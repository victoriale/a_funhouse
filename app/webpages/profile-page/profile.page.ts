import {Component, OnInit} from 'angular2/core';

import {ListOfListModule} from '../../modules/listoflist/listoflist.module';
import {CrimeModule} from '../../modules/crime/crime.module';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/profile-page/profile.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListOfListModule, CrimeModule, HeaderComponent, FooterComponent],
    providers: [],
})

export class ProfilePage{
}