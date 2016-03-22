/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {MapMarkerComponent} from '../../components/mapMarker/mapMarker.component';
import {InfoListComponent} from "../../components/info-list/info-list.component";
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";
import {ListingProfileService} from '../../global/listing-profile.service';
import {AmenitiesNearListingInterface} from '../../global/global-interface';

@Component({
    selector: 'Amenities-list-page',
    templateUrl: './app/webpages/amenities-lists/amenities-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListMenuComponent, DropdownComponent, MapMarkerComponent, WidgetModule, InfoListComponent, ROUTER_DIRECTIVES],
    providers: [ListingProfileService]
})

export class AmenitiesListPage implements OnInit{
  provider_logo = './app/public/yelp_logo.png';
  paramAddress: string;
  address: string;
  private infoList: any;
  amenitiesListingsData: any;
  @Input() amenitiesNearListingData: AmenitiesNearListingInterface;

  constructor(private _params: RouteParams, private _router: Router, private _globalFunctions: GlobalFunctions,  private _listingService: ListingProfileService, params: RouteParams){
      window.scrollTo(0, 0);
  }

  getData(){
    this.infoList = this._listingService.getListingProfile(this._params.get('address'))
        .subscribe(data => {
        // this.infoList = this.dataFormatter(data);
    })
  }

  // dataFormatter(data){
  //   this.infoList = this.amenitiesListingsData;
  //   var self = this;
  //   var counter = 1;
  //   // this.amenitiesListingsData.forEach(function(val){
  //   //     val.counter = counter++;
  //   //     // Check if even or odd for BG color class
  //   //     if(counter % 2 == 0) {
  //   //         val.bgClass = "even";
  //   //     }else{
  //   //         val.bgClass = "odd";
  //   //     }
  //   // })
  // }
  ngOnInit(){
    this.getData();
    // this.dataFormatter(data);
    this.address = this._params.get('address');
    console.log(this.address);
  }
  //On Change Call
  ngOnChanges(event) {
    //Get changed input
    var currentAmenitiesNearListingData = event.amenitiesNearListingData.currentValue;
    //If the data input is valid run transform data function
    if (currentAmenitiesNearListingData !== null && currentAmenitiesNearListingData!== false) {
      this.getData();
    }
  }
}
