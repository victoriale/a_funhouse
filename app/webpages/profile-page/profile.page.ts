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

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [TrendingHomes, MediaImages, HeadlineComponent, ProfileHeader, MediaFeatureModule, CommentModule, CrimeModule, ListOfListModule, AboutUsModule, HeaderComponent, FooterComponent, LikeUs, ShareModule, FeaturedListsModule, AmenitiesModule, WidgetModule],
    providers: [ListingProfileService]
})

export class ProfilePage implements OnInit{
    paramAddress: string;
    address: string;
    public headlineAbout: any;
    public headlineCrime: any;
    public headlineAmenities: any;
    public headlineOtherHomes: any;
    public headlineInteract: any;
    public mediaFeature = false;
    public trendingFeature = true;
    public profileHeaderData: Object;
    public propertyListingData: Object;
    public featuredListData: Object;

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

    getFeaturedList(){
        this._listingProfileService.getListingFeaturedList(this.paramAddress)
            .subscribe(
                data => {
                    this.featuredListData = data;
                },
                err => console.log('Error - Listing Featured List Data: ', err)
            )
    }

    getPropertyListing(){
      this.propertyListingData = this._listingProfileService.getPropertyListing(this.paramAddress);
    }

    ngOnInit(){
        this.address = this._params.get('address');
        this.getProfileHeader();
        this.getFeaturedList();
        this.headlineAbout  = {
            title: 'About ' + this.address,
            icon: 'fa-map-marker'
        };
        this.headlineCrime  = {
            title: 'Most Recent Crimes in ' + this.address,
            icon: 'fa-gavel'
        };
        this.headlineAmenities = {
            title: 'Amenities in ' + this.address,
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
