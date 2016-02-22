import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {ListOfListModule} from '../modules/listoflist/listoflist.module';
import {ProfilePage} from "../webpages/profile-page/profile.page";
import {HomePage} from "../webpages/home-page/home.page";

@Component({
    selector: 'my-app',
    templateUrl: './app/app/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ProfilePage, HomePage, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home-page',
        component: HomePage,
        useAsDefault: true,
    },
    {
        path: '/profile',
        name: 'Profile-page',
        component: ProfilePage,
    }
])

export class AppComponent {
    title = 'HEADER';
}