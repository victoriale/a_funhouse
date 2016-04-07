/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit, OnChanges} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

import {BackTabComponent} from "../../components/backtab/backtab.component";
import {moduleHeader} from "../../components/module-header/module-header";
import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";
import {LocationProfileService} from '../../global/location-profile.service';
import {LoadingComponent} from '../../components/loading/loading.component';
import {ErrorComponent} from '../../components/error/error.component';
import {TitleComponent} from '../../components/title/title.component';
import {DynamicCarousel2} from "../../components/carousel/dynamic-carousel2/dynamic-carousel2";

declare var moment: any;

@Component({
    selector: 'Amenities-list-page',
    templateUrl: './app/webpages/amenities-lists/amenities-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, moduleHeader, HeroListComponent, ROUTER_DIRECTIVES, LoadingComponent, BackTabComponent, ErrorComponent, TitleComponent, DynamicCarousel2],
    providers: [LocationProfileService]
})

export class AmenitiesListPage implements OnInit{
  paramAddress: string;
  data: any;
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
  public titleComponentData: {};
  carouselData: any = [];
  private amenitiesData: any;
  providerUrl = 'http://www.yelp.com/';
  providerLogo = './app/public/amenities_yelp.png';
  @Input() amenitiesNearListingData: any;

  public isError: boolean = false;

  constructor(private _params: RouteParams, private router: Router, private globalFunctions: GlobalFunctions,  private _locationService: LocationProfileService, params: RouteParams){
      this.category = params.params['listname'];
      window.scrollTo(0, 0);
  }

  getData(){
      this._locationService.getAmenitiesData(this.locCity, this.locState)
          .subscribe(
              amenitiesData => {this.amenitiesData = this.dataFormatter(amenitiesData)},
              err => {
                console.log('Error: Amenities Page API', err);
                this.isError = true;
              }
          );
  }

  dataFormatter(data){
    var counter = 1;
    if(!data) return false;
    this.titleComponentData = {
        imageURL: './app/public/joyfulhome_house.png',
        smallText1: 'Last Updated: ' + moment(new Date()).format('dddd, MMMM Do, YYYY'),
        smallText2: decodeURI(this._params.get('city')) + ', ' + decodeURI(this._params.get('state')),
        heading1: this.globalFunctions.toTitleCase(this.category) + ' in and around ' + decodeURI(this._params.get('city')) + ', ' + decodeURI(this._params.get('state')),
        icon: 'fa fa-map-marker',
        hasHover: false
   }//end data input for title component

    var dataLists = data[this.category]['businesses'];
    var globalFunc = this.globalFunctions;
    if(this.category == 'restaurant'){
      this.category = 'restaurants';
    }
    var carouselData = [];
    dataLists.forEach(function(val, i){
      val.rank = i+1;
      val.location['address'].forEach(function(addr, index) {
        if(typeof val.displayAddress1 != 'undefined'){
          val.displayAddress1 += addr + ' ';
        }else{
          val.displayAddress1 = addr + ' ';
        }
      })//end forEach to get full address
      // Counter for rank #
      val.displayAddress2 =  val['location']['city'] + ', ' + val['location']['state_code'];
      val.rank = counter++;
      // Check if even or odd for BG color class
      if(counter % 2 == 0) {
          val.bgClass = "even";
      }else{
          val.bgClass = "odd";
      }
      val.displayAddress2 =  val['location']['city'] + ', ' + val['location']['state_code'];
      val.locationUrl = {loc: val['location']['city'] + '_' + val['location']['state_code']};
      if(typeof val.phone == 'undefined' || val.phone === 'null'){
        val.phone = 'No Phone Listed';
      }
      val.phone = globalFunc.formatPhoneNumber(val['phone']);
      val.categories = val.categories[0][0];

      var carData = {
        textDetails:    [
                        val.name,
                        "<small><i class='fa fa-map-marker'></i> "+ val.displayAddress2+"</small>",
                        "&nbsp;",
                        val.categories,
                        "<small><i class='fa fa-phone-square'></i> "+val.phone+"</small>"
                        ],
        callToAction:   "Interested in discovering more about this amenity?",
        buttonLabel:    "<span></span> <span>View on Yelp</span> <i class='fa fa-angle-right'></i>",
        index:          val.rank,
        imageUrl1:      val.image_url
      }
      carData['linkUrl1'] = val.url;
      carouselData.push(carData);
    })//end of forEach
    this.carouselData = carouselData;
    return dataLists;
  }//end dataFormatter

  ngOnInit(){
    this.locState = decodeURI(this._params.get('state'));
    this.locCity = decodeURI(this._params.get('city'));
    this.location = this.globalFunctions.toTitleCase(this.locCity) + ', ' + this.locState;
    this.getData();
  }//end ngOnInit

  // On Change Call
  ngOnChanges(event) {
    //Get changed input
    var currentAmenitiesNearListingData = event.amenitiesNearListingData.currentValue;
    //If the data input is valid run transform data function
    if (currentAmenitiesNearListingData !== null && currentAmenitiesNearListingData!== false) {
      this.getData();
    }
  }//end ngOnChanges
}
