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
    public headline_title = '[Listing Name]';

    //  Get current route name
    constructor(public router: Router){
        console.log('Route Name:', this.router.hostComponent.name);
    }
}