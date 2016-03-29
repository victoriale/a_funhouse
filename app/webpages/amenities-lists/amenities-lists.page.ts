/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit, OnChanges} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

import {moduleHeader} from "../../components/module-header/module-header";
import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";
import {LocationProfileService} from '../../global/location-profile.service';

@Component({
    selector: 'Amenities-list-page',
    templateUrl: './app/webpages/amenities-lists/amenities-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, moduleHeader, HeroListComponent, ROUTER_DIRECTIVES],
    providers: [LocationProfileService]
})

export class AmenitiesListPage implements OnInit{
  moduleTitle: string;
  paramAddress: string;
  address: string;
  amenitiesListingsData: any;
  name: string;
  displayAddress1: string;
  displayAddress2: string;
  public category: string;
  public location: string;
  public locCity: string;
  public locState: string;
  public profileType: string;
  private amenitiesData: any;
  providerUrl = 'http://www.yelp.com/';
  providerLogo = './app/public/amenities_yelp.png';
  @Input() amenitiesNearListingData: any;

  constructor(private _params: RouteParams, private router: Router, private globalFunctions: GlobalFunctions,  private _locationService: LocationProfileService, params: RouteParams){
      this.category = params.params['listname'];
      window.scrollTo(0, 0);
  }

  getData(){
      this._locationService.getAmenitiesData(this.locState, this.locCity)
          .subscribe(
              amenitiesData => {this.amenitiesData = this.dataFormatter(amenitiesData)}
          );
  }

  dataFormatter(data){
    var dataLists = data[this.category]['businesses'];
    dataLists.forEach(function(val, i){
      val.rank = i+1;
      val.location['address'].forEach(function(addr, index) {
        if(typeof val.displayAddress1 != 'undefined'){
          val.displayAddress1 += addr + ' ';
        }else{
          val.displayAddress1 = addr + ' ';
        }
      })
      val.displayAddress2 =  val['location']['city'] + ', ' + val['location']['state_code'];
      val.locationUrl = {loc: val['location']['city'] + '_' + val['location']['state_code']};
    })
    return dataLists;
  }

  ngOnInit(){
    this.locState = decodeURI(this._params.get('state'));
    this.locCity = decodeURI(this._params.get('city'));
    this.location = this.globalFunctions.toTitleCase(this.locCity) + ', ' + this.locState;
    this.moduleTitle = "Top Rated Amenities In and Around " + this.location;
    this.getData();
  }

  // On Change Call
  ngOnChanges(event) {
    //Get changed input
    var currentAmenitiesNearListingData = event.amenitiesNearListingData.currentValue;
    //If the data input is valid run transform data function
    if (currentAmenitiesNearListingData !== null && currentAmenitiesNearListingData!== false) {
      this.getData();
    }
  }
}
