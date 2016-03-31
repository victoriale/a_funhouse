import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {ProfileHeader} from '../../modules/profile_header/profile_header.module';
import {HeadlineComponent} from '../../components/headline/headline.component';
import {MediaFeatureModule} from "../../modules/media_features/media_features.module";
import {CommentModule} from "../../modules/comment/comment.module";
import {CrimeModule} from "../../modules/crime/crime.module";
import {ListOfListModule} from "../../modules/listoflist/listoflist.module";
import {AboutUsModule} from "../../modules/aboutus/aboutus.module";
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {LikeUs} from "../../modules/likeus/likeus.module";
import {ShareModule} from "../../modules/share/share.module";
import {AmenitiesModule} from "../../modules/amenities/amenities.module";
import {FeaturedListsModule} from '../../modules/featured_lists/featured_lists.module';
import {MediaImages} from "../../components/media-images/media-images.component";
import {TrendingHomes} from "../../modules/trending-homes/trending-homes.module";
import {ListingProfileService} from '../../global/listing-profile.service';
import {WidgetModule} from "../../modules/widget/widget.module";
import {MapModule} from '../../modules/map/map.module';
import {ListOfListPage} from '../../global/global-service';
import {magazineBanner} from '../../modules/mag_banner/mag_banner.module';
import {magazineModule} from '../../modules/mag_module/mag_module';
import {Injector} from 'angular2/core';
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [magazineModule, magazineBanner, TrendingHomes, MediaImages, HeadlineComponent, ProfileHeader, MediaFeatureModule, CommentModule, CrimeModule, ListOfListModule, AboutUsModule, HeaderComponent, FooterComponent, LikeUs, ShareModule, FeaturedListsModule, AmenitiesModule, WidgetModule, MapModule],
    providers: [ListOfListPage, ListingProfileService]
})

export class ProfilePage implements OnInit{
    paramAddress: string;
    address: string;
    city: string;
    state: string;
    public pageName: string;
    public headlineAbout: any;
    public headlineCrime: any;
    public headlineAmenities: any;
    public headlineOtherHomes: any;
    public headlineInteract: any;
    public lists: any;
    public mediaFeature: boolean = false;
    public trendingFeature: boolean = true;
    public partnerCheck: boolean;
    public trendingHomesData: Object;
    public profileHeaderData: Object;
    public propertyListingData: Object;
    public crimeData: Object;
    public mapData: Object;
    public featuredListData: Object;
    public amenitiesData: Object;
    public partnerParam: string;
    public partnerID: string;
    //  Get current route name
    constructor(private _router:Router, private _listingProfileService: ListingProfileService, private _params: RouteParams, private _listService:ListOfListPage, private globalFunctions: GlobalFunctions){
        // Scroll page to top to fix routerLink bug
        // let partnerParam = this.injector.get(MyWebApp);
        // this.partnerID = partnerParam.partnerID;
        console.log(this);
        this.paramAddress = _params.get('address');
        window.scrollTo(0, 0);
    }

    getProfileHeader(){
        this._listingProfileService.getListingProfile(this.paramAddress)
            .subscribe(
                data => {
                    this.profileHeaderData = data;
                    this.profileHeaderData['paramAddress'] = this.paramAddress;
                },
                err => console.log('Error - Listing Profile Header Data: ', err)
            )
    }

    getCrime(){
        this._listingProfileService.getCrime(this.paramAddress)
            .subscribe(
                data => {
                    this.crimeData = data.crimes;
                },
                err => console.log('Error - Crime Data: ', err)
            )
    }

    getMap(){
        this._listingProfileService.getMap(this.paramAddress)
            .subscribe(
                data => {
                    this.mapData = data;
                },
                err => console.log('Error - Map Data', err)
            )
    }

    getFeaturedList(){
        this._listingProfileService.getListingFeaturedList(this.paramAddress)
            .subscribe(
                data => {
                    this.featuredListData = data;
                },
                err => console.log('Error - Listing Featured List Data: ', err)
            )
    }

    getTrendingListings(){
        this._listingProfileService.getTrendingHomesData(this.paramAddress)
            .subscribe(
                data => {
                    this.trendingHomesData = data;
                },
                err => console.log('Error - Location Trending Homes Data: ', err)
            )
    }

    getAmenitiesData(){
        this._listingProfileService.getAmenitiesNearListing(this.paramAddress)
          .subscribe(
              data => {
                this.amenitiesData = data;
              },
              err => console.log('Amenities Location Data Acquired!', err)
            )
    }

    getPropertyListing(){
      this.propertyListingData = this._listingProfileService.getPropertyListing(this.paramAddress);
    }

    getListOfList() {
        this._listService.getAddressListOfListPage(this.paramAddress)
        .subscribe(lists => {
          this.lists = lists
        });
    }

    getAddress() {
      var paramAddress = this._params.get('address').split('-');
      var paramState = paramAddress[paramAddress.length - 1];
      var paramCity = paramAddress[paramAddress.length - 2];
      var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
      var address = tempArr.join(' ');
      this.city = paramCity;
      this.state = paramState;
      this.address = this.globalFunctions.toTitleCase(address) + ' ' + paramCity + ', ' + paramState;
    }

    ngOnInit(){
      //Run each call
      if(this.partnerID === null || this.partnerID == '' || typeof this.partnerID == 'undefined'){
          this.partnerCheck = false;
          this.pageName = "Joyful Home";
        } else {
          this.partnerCheck = true;
          this.pageName = "My HouseKit";
        }
        this.getAddress();
        this.getProfileHeader();
        this.getCrime();
        this.getMap();
        this.getFeaturedList();
        this.getAmenitiesData();
        this.getTrendingListings();
        this.getListOfList();
        this.headlineAbout  = {
            title: 'About ' + this.address,
            icon: 'fa-map-marker'
        };
        this.headlineCrime  = {
            title: 'Most Recent Crimes in ' + this.address,
            icon: 'fa-gavel'
        };
        this.headlineAmenities = {
            title: 'Amenities Around ' + this.address,
            icon: 'fa-cutlery'
        };
        this.headlineOtherHomes = {
            title: 'Other Homes You May Be Interested In',
            icon: 'fa-heart-o'
        };
        this.headlineInteract = {
            title: 'Interact with ' + this.pageName,
            icon: 'fa-comment-o'
        };
    }
}
