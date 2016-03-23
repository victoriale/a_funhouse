/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

import {moduleHeader} from "../../components/module-header/module-header";
import {ListingProfileService} from '../../global/listing-profile.service';
import {AmenitiesNearListingInterface} from '../../global/global-interface';

@Component({
    selector: 'Amenities-list-page',
    templateUrl: './app/webpages/amenities-lists/amenities-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, moduleHeader, ROUTER_DIRECTIVES],
    providers: [ListingProfileService]
})

export class AmenitiesListPage implements OnInit{
  moduleTitle: string;
  paramAddress: string;
  address: string;
  amenitiesListingsData: any;
  name: string;
  counter: number;
  display_address1: string;
  display_address2: string;
  snippet_text: string;
  imageURL: string;

  @Input() amenitiesNearListingData: AmenitiesNearListingInterface;

  constructor(private _params: RouteParams, private _router: Router, private _globalFunctions: GlobalFunctions,  private _listingService: ListingProfileService, params: RouteParams){
      window.scrollTo(0, 0);
  }

  getData(){
    this._listingService.getAmenitiesNearListing(this._params.get('address'))
        .subscribe(data => {
          var dataLists = data['restaurant']['businesses'];
          this.name = dataLists[0]['name'];
          this.counter = dataLists.length;
          var address = dataLists[0]['location']['display_address'];
          this.display_address1 = address[0];
          this.display_address2 = address[1];
          this.snippet_text = dataLists[0].snippet_text;
          this.imageURL = dataLists[0].image_url;
      },
        err => console.log(err),
        () => console.log('Recent Listings Data Acquired!')
      );
  }

  //Build Module Title
  setModuleTitle() {
    var paramAddress = this._params.get('address').split('-');
    var paramState = paramAddress[paramAddress.length - 1];
    var paramCity = paramAddress[paramAddress.length - 2];
    var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
    var address = tempArr.join(' ');
    this.moduleTitle = 'Amenities near ' + address + ' ' + paramCity + ', ' + paramState;
  }

  ngOnInit(){
    this.setModuleTitle();
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
