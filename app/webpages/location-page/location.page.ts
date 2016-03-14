import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {HeadlineComponent} from '../../components/headline/headline.component';
import {ProfileHeader} from '../../modules/profile_header/profile_header.module';
import {CrimeModule} from '../../modules/crime/crime.module';
import {FeaturedListsModule} from '../../modules/featured_lists/featured_lists.module';
import {InfoListModule} from "../../modules/infolist/info-list.module";

@Component({
    selector: 'location-page',
    templateUrl: './app/webpages/location-page/location.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeadlineComponent, ProfileHeader, CrimeModule, FeaturedListsModule, InfoListModule],
    providers: [],
})

export class LocationPage implements OnInit {

    loc: string;
    locCity: string;
    locState: string;
    locDisplay: string;
    public headlineAbout: any;
    public headlineCrime: any;
    public headlineAmenities: any;
    public headlineInteract: any;
    public profile_type: string;

    constructor(private _params: RouteParams) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    ngOnInit() {
        this.loc = this._params.get('loc');
        this.locCity = this.loc.split('-')[0];
        this.locState = this.loc.split('-')[1];
        this.locDisplay = decodeURI(this.locCity + ', ' + this.locState);

        this.headlineAbout = {
            title: 'About ' + this.locDisplay,
            icon: 'fa-map-marker'
        };

        this.headlineCrime = {
            title: 'Most Recent Crimes in ' + this.locDisplay,
            icon: 'fa-gavel'
        };

        this.headlineAmenities = {
            title: 'Schools & Amenities in ' + this.locDisplay,
            icon: 'fa-graduation-cap'
        };

        this.headlineInteract = {
            title: 'Interact with Joyful Home',
            icon: 'fa-comment-o'
        };

        this.profile_type = 'location';

        console.log('City, State: ', this.locDisplay);
    }

}