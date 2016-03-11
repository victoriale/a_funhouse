import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

import {webApp} from "../app-layout/webpage.component";

@Component({
    selector: 'app-domain',
    templateUrl: './app/app-domain/app-domain.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [webApp, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
        path: '/...',
        name: 'Default-home',
        component: webApp,
        useAsDefault: true
    },
    {
        path: '/:partner_id/...',
        name: 'Partner-home',
        component: webApp,
    },
])

export class appDomain {
    cityStateLocation: string = "WICHITA_KS";
}
