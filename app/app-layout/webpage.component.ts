import {Component} from 'angular2/core';
import {appComponent} from "../app-layout/app.component";
import {magazineApp} from "../app-magazine/app.magazine";

import {Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

@Component({
    selector: 'web-app',
    templateUrl: './app/app-layout/webpage.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [magazineApp, appComponent,RouterOutlet, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
       path: '/...',
       name: 'Webpages',
       component: appComponent,
    },
    {
       path: '/magazine/...',
       name: 'Magazine',
       component: magazineApp,
    },
])

export class webApp {

}
