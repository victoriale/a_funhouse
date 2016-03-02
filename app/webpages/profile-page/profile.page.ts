import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {HeadlineComponent} from '../../components/headline/headline.component';
import {ListOfListModule} from '../../modules/listoflist/listoflist.module';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeadlineComponent, ListOfListModule, HeaderComponent, FooterComponent],
    providers: [],
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

    //  Get current route name
    constructor(public router: Router){
        console.log('Route Name:', this.router.hostComponent.name);
    }

    ngOnInit(){

    }
}