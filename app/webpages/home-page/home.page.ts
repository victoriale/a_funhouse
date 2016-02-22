import {Component, OnInit} from 'angular2/core';

import {ListOfListModule} from '../../modules/listoflist/listoflist.module';

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListOfListModule],
    providers: [],
})

export class HomePage{

}