import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {HeadlineComponent} from '../../components/headline/headline.component';
import {ProfileHeader} from '../../modules/profile_header/profile_header.module';
import {CrimeModule} from '../../modules/crime/crime.module';
import {FeaturedListsModule} from '../../modules/featured_lists/featured_lists.module';

@Component({
    selector: 'location-page',
    templateUrl: './app/webpages/location-page/location.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeadlineComponent, ProfileHeader, CrimeModule, FeaturedListsModule],
    providers: [],
})

export class LocationPage {

    loc: string;

    public headline_about = {
        title: 'About [City], [State]',
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

    constructor(params: RouteParams) {
        this.loc = params.get('loc');
        console.log(this.loc);
    }
}