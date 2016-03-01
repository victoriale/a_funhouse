import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {ListOfListModule} from '../../modules/listoflist/listoflist.module';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListOfListModule, HeaderComponent, FooterComponent],
    providers: [],
})

export class ProfilePage{

    //  Get current route name
    constructor(public router: Router){
        console.log('Route Name:', this.router.hostComponent.name);
    }

}