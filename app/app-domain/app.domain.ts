import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

import {WebApp} from "../app-layout/app.layout";
import {MyWebApp} from "../app-layout/app.mylayout";

@Component({
    selector: 'app-domain',
    templateUrl: './app/app-domain/app.domain.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MyWebApp, WebApp, ROUTER_DIRECTIVES],
    providers: []
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
