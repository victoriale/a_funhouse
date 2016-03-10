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
import {FeaturedListsModule} from '../../modules/featured_lists/featured_lists.module';

import {ListingProfileService} from '../../global/listing-profile.service';

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeadlineComponent, ProfileHeader, MediaFeatureModule, CommentModule, CrimeModule, ListOfListModule, AboutUsModule, HeaderComponent, FooterComponent, LikeUs, ShareModule, FeaturedListsModule],
    providers: [ListingProfileService],
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
    public profile_type = 'listings';
    public media_feature = false;
    public trending_feature = true;

    public paramAddress: string;

    profileHeaderData: Object;

    //  Get current route name
    constructor(public router: Router, private _listingProfileService: ListingProfileService, params: RouteParams){
        console.log('Route Name:', this.router.hostComponent.name);
        this.paramAddress = params.get('address');
        console.log('PARAMETER', this.paramAddress);
    }

    getListingData(){
        this._listingProfileService.getListingProfile(this.paramAddress).then(data => this.profileHeaderData = data);
    }

    ngOnInit(){
        this.getListingData();
    }
}