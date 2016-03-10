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

    constructor(private _params: RouteParams) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    ngOnInit() {
        this.loc = this._params.get('loc');
        this.locCity = this.loc.split('_')[0];
        this.locState = this.loc.split('_')[1];

        console.log('City, State: ', this.locCity, this.locState);
    }

    public headline_about = {
        title: 'About ' + this.locCity,
        icon: 'fa-map-marker'
    };

    public headline_crime = {
        title: 'Most Recent Crimes in [City], [State]',
        icon: 'fa-gavel'
    };
    public headline_amenities = {
        title: 'Schools & Amenities in [City], [State]',
        icon: 'fa-graduation-cap'
    };
    public headline_interact = {
        title: 'Interact with Joyful Home',
        icon: 'fa-comment-o'
    };
    public profile_type = 'location';
}