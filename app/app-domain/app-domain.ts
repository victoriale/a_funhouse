import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

import {WebApp} from "../app-layout/webpage.component";

@Component({
    selector: 'app-domain',
    templateUrl: './app/app-domain/app-domain.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WebApp, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
        path: '/...',
        name: 'Default-home',
        component: WebApp,
        useAsDefault: true
    },
    {
        path: '/:partner_id/...',
        name: 'Partner-home',
        component: WebApp,
    },
])

export class AppDomain {
    cityStateLocation: string = "WICHITA_KS";
}
