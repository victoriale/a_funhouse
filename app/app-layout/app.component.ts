import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {ProfilePage} from "../webpages/profile-page/profile.page";
import {HomePage} from "../webpages/home-page/home.page";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app-layout/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ProfilePage, HomePage, HeaderComponent, FooterComponent, ROUTER_DIRECTIVES],
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