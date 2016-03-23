/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit, OnChanges} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

import {moduleHeader} from "../../components/module-header/module-header";
import {LocationProfileService} from '../../global/location-profile.service';
// import {AmenitiesNearListingInterface} from '../../global/global-interface';

@Component({
    selector: 'Amenities-list-page',
    templateUrl: './app/webpages/amenities-lists/amenities-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, moduleHeader, ROUTER_DIRECTIVES],
    providers: [LocationProfileService]
})

export class AmenitiesListPage implements OnInit{
  moduleTitle: string;
  paramAddress: string;
  address: string;
  amenitiesListingsData: any;
  name: string;
  counter: number;
  displayAddress1: string;
  displayAddress2: string;
  snippetText: string;
  imageURL: string;
  public location: string;
  public locCity: string;
  public locState: string;
  public profileType: string;
  private amenitiesData: any;

  @Input() amenitiesNearListingData: any;

  constructor(private _params: RouteParams, private router: Router, private globalFunctions: GlobalFunctions,  private _locationService: LocationProfileService, params: RouteParams){
      window.scrollTo(0, 0);
  }

  getData(){
      this._locationService.getAmenitiesData(this.locState, this.locCity)
          .subscribe(
              amenitiesData => {this.amenitiesData = this.dataFormatter(amenitiesData)}
          );
  }

  dataFormatter(data){
    console.log(data);
    var dataLists = data['restaurant']['businesses'];
    console.log('data', dataLists);
    this.counter = dataLists.length;
    this.name = dataLists[0]['name'];
    console.log(this.counter, this.name);
    var address = dataLists[0]['location']['display_address'];
    this.displayAddress1 = address[0];
    this.displayAddress2 = address[1];
    this.snippetText = dataLists[0].snippet_text;
    this.imageURL = dataLists[0].image_url;
  }

  ngOnInit(){
    this.locState = decodeURI(this._params.get('state'));
    this.locCity = decodeURI(this._params.get('city'));
    this.location = this.globalFunctions.toTitleCase(this.locCity) + ', ' + this.locState;
    this.moduleTitle = "Top Rated Amenities In " + this.location;

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
