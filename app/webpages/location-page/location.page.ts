import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {HeadlineComponent} from '../../components/headline/headline.component';
import {ProfileHeader} from '../../modules/profile_header/profile_header.module';
import {CrimeModule} from '../../modules/crime/crime.module';
import {FeaturedListsModule} from '../../modules/featured_lists/featured_lists.module';
import {InfoListModule} from "../../modules/infolist/info-list.module";
import {CommentModule} from '../../modules/comment/comment.module';
import {LikeUs} from '../../modules/likeus/likeus.module';
import {ShareModule} from '../../modules/share/share.module';
import {AboutUsModule} from '../../modules/aboutus/aboutus.module';
import {SchoolModule} from "../../modules/school/school.module";
import {LocationProfileService} from '../../global/location-profile.service';
import {WidgetModule} from "../../modules/widget/widget.module";
import {FindYourHomeModule} from "../../modules/find-your-home/find-your-home.module";
import {AmenitiesModule} from "../../modules/amenities/amenities.module";
import {TrendingHomes} from "../../modules/trending-homes/trending-homes.module";

@Component({
    selector: 'location-page',
    templateUrl: './app/webpages/location-page/location.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeadlineComponent, ProfileHeader, CrimeModule, FeaturedListsModule, FindYourHomeModule, InfoListModule, CommentModule, LikeUs, ShareModule, AboutUsModule, SchoolModule, WidgetModule, AmenitiesModule, TrendingHomes],
    providers: [LocationProfileService],
})

export class LocationPage implements OnInit {
    loc: string;
    locCity: string;
    locState: string;
    public locDisplay: string;
    public headlineAbout: any;
    public headlineCrime: any;
    public headlineSchool: any;
    public headlineInteract: any;
    public profileHeaderData: Object;
    public featuredListData: Object;
    public recentListingsData: Object;
    public schoolData: Object;
    public amenitiesData: Object;
    public trendingHomesData: Object;
    public trendingFeature = true;

    constructor(private _params: RouteParams, private _locationProfileService: LocationProfileService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    getProfileHeader(){
        this._locationProfileService.getLocationProfile(this.locCity, this.locState)
            .subscribe(
                data => {
                    this.profileHeaderData = data;
                },
                err => console.log('Error - Location Profile Header Data: ', err)
            )
    }

    getTrendingListings(){
        this._locationProfileService.getTrendingHomesData(this.locCity, this.locState)
            .subscribe(
                data => {
                    this.trendingHomesData = data;
                },
                err => console.log('Error - Location Trending Homes Data: ', err)
            )
    }

    getFeaturedList(){
        this._locationProfileService.getLocationFeaturedList(this.locCity, this.locState)
            .subscribe(
                data => {
                    this.featuredListData = data;
                },
                err => console.log('Error - Location Profile: ', err)
            );
    }

    getRecentListings() {
        this._locationProfileService.getRecentListings(this.locCity, this.locState)
            .subscribe(
                recentListingsData => { this.recentListingsData = recentListingsData },
                err => console.log(err),
                () => console.log('Recent Listings Data Acquired!')
            );
    }

    getSchoolData(){
        this._locationProfileService.getSchoolData(this.locCity, this.locState)
          .subscribe(
              data => {
                this.schoolData = data;
              },
              err => console.log('School Location Data Acquired!', err)
            )
    }

    getAmenitiesData(){
      this._locationProfileService.getAmenitiesData(this.locCity, this.locState)
        .subscribe(
            data => {
              this.amenitiesData = data;
            },
            err => console.log('Amenities Location Data Acquired!', err)
          )
    }

    ngOnInit() {
        this.loc = this._params.get('loc');
        this.locCity = this.loc.split('_')[0];
        this.locState = this.loc.split('_')[1];
        this.locDisplay = decodeURI(this.locCity + ', ' + this.locState);

        this.headlineAbout = {
            title: 'About ' + this.locDisplay,
            icon: 'fa-map-marker'
        };

        this.headlineCrime = {
            title: 'Most Recent Crimes in ' + this.locDisplay,
            icon: 'fa-gavel'
        };

        this.headlineSchool = {
            title: 'Schools and Amenities in ' + this.locDisplay,
            icon: 'fa-graduation-cap'
        };

        this.headlineInteract = {
            title: 'Interact with Joyful Home',
            icon: 'fa-comment-o'
        };

        console.log('City, State: ', this.locDisplay);

        this.getProfileHeader();
        this.getTrendingListings();
        this.getFeaturedList();
        this.getRecentListings();
        this.getSchoolData();
        this.getAmenitiesData();
        console.log(this);
    }

}
