import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

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

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [TrendingHomes, MediaImages, HeadlineComponent, ProfileHeader, MediaFeatureModule, CommentModule, CrimeModule, ListOfListModule, AboutUsModule, HeaderComponent, FooterComponent, LikeUs, ShareModule, FeaturedListsModule, AmenitiesModule, WidgetModule, MapModule],
    providers: [ListingProfileService]
})

export class ProfilePage implements OnInit{
    paramAddress: string;
    address: string;
    city: string;
    state: string;
    public headlineAbout: any;
    public headlineCrime: any;
    public headlineAmenities: any;
    public headlineOtherHomes: any;
    public headlineInteract: any;
    public mediaFeature: boolean = false;
    public trendingFeature: boolean = true;
    public trendingHomesData: Object;
    public profileHeaderData: Object;
    public propertyListingData: Object;
    public crimeData: Object;
    public mapData: Object;
    public featuredListData: Object;
    public amenitiesData: Object;

    //  Get current route name
    constructor(public _params: RouteParams, private _listingProfileService: ListingProfileService, params: RouteParams){
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.paramAddress = params.get('address');
    }

    getProfileHeader(){
        this._listingProfileService.getListingProfile(this.paramAddress)
            .subscribe(
                data => {
                    this.profileHeaderData = data;
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
        this._listingProfileService.getTrendingHomesData(this.city, this.state)
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

    getAddress() {
      var paramAddress = this._params.get('address').split('-');
      var paramState = paramAddress[paramAddress.length - 1];
      var paramCity = paramAddress[paramAddress.length - 2];
      var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
      var address = tempArr.join(' ');
      this.city = paramCity;
      this.state = paramState;
      this.address = address + ', ' + paramCity + ', ' + paramState;
    }
    ngOnInit(){
      //Run each call
        this.getAddress();
        this.getProfileHeader();
        this.getCrime();
        this.getMap();
        this.getFeaturedList();
        this.getAmenitiesData();
        this.getTrendingListings();

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
            title: 'Interact with Joyful Home',
            icon: 'fa-comment-o'
        };
    }
}
