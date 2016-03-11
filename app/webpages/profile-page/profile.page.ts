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

import {ListingProfileService} from '../../global/listing-profile.service';

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MediaImages, HeadlineComponent, ProfileHeader, MediaFeatureModule, CommentModule, CrimeModule, ListOfListModule, AboutUsModule, HeaderComponent, FooterComponent, LikeUs, ShareModule, FeaturedListsModule, AmenitiesModule],
    providers: [ListingProfileService]
})

export class ProfilePage implements OnInit{
    public headline_about = {
        title: 'About [Listing Name]',
        icon: 'fa-map-marker'
    };
    public headline_crime = {
        title: 'Most Recent Crimes in [Listing Name]',
        icon: 'fa-gavel'
    };
    public headline_amenities = {
        title: 'Amenities in [Listing Name]',
        icon: 'fa-cutlery'
    };
    public headline_otherHomes = {
        title: 'Other Homes You May Be Interested In',
        icon: 'fa-heart-o'
    };
    public headline_interact = {
        title: 'Interact with Joyful Home',
        icon: 'fa-comment-o'
    };
    public profile_type = 'listing';
    public media_feature = false;
    public trending_feature = true;

    public paramAddress: string;

    public profileHeaderData: Object;

    //  Get current route name
    constructor(public router: Router, private _listingProfileService: ListingProfileService, params: RouteParams){
        console.log('Route Name:', this.router.hostComponent.name);
        this.paramAddress = params.get('address');
    }

    getListingData(){
        this.profileHeaderData = this._listingProfileService.getListingProfile(this.paramAddress).map(
             data => {
                 var data = data.data;
                 var transformData = {
                     title_data: {
                         titleImg: data.listingImage,
                         smallText1: '',
                         smallText2: data.city + ', ' + data.state,
                         heading1: data.address,
                         heading2: '- Active',
                         heading3: 'Listing Price: $' + data.listingPrice,
                         heading4: '- Sq ft: ' + data.squareFeet + ' Sq ft.',
                         icon: 'fa fa-map-marker',
                         hasHover: false
                     },
                     description: 'The listing is located at ' + data.address + ', ' + data.city + ', ' + data.state + '. The live area is around ' + data.squareFeet + ' sq ft. If you\'re interested in more information, please contact ' + data.agent + ' at phone number ' + data.phoneNumber + '.',
                     title: 'Quick info about ' + data.city + ', ' + data.state
                 }
                 console.log('Lutz - PROFILE HEADER TRANSFORM DATA:', transformData);
                 return transformData;
             }
            )
            //.subscribe(
            //data => {
            //    console.log('GET LISTING PROFILE SUCCESS: ', data);
            //    this.profileHeaderData = data.data;
            //},
            //err => {
            //    console.log('GET LISTING PROFILE ERROR: ', err);
            //}
            //)
    }

    ngOnInit(){
        this.getListingData();
    }
}