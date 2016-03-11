import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

import {AppComponent} from "../app-layout/app.component";
import {webpageAppComponent} from "../app-layout/webpage.component";

@Component({
    selector: 'app-domain',
    templateUrl: './app/app-domain/app-domain.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [webpageAppComponent, AppComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
        path: '/...',
        name: 'Default-home',
        component: webpageAppComponent,
        useAsDefault: true
    },
    {
        path: '/:partner_id/...',
        name: 'Partner-home',
        component: webpageAppComponent,
    },
])

export class AppDomain {
    cityStateLocation: string = "WICHITA_KS";
}
