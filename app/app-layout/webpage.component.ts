import {Component} from 'angular2/core';
import {AppComponent} from "../app-layout/app.component";
import {magazineAppComponent} from "../app-magazine/app.magazine";

import {Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

@Component({
    selector: 'web-app',
    templateUrl: './app/app-layout/webpage.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [magazineAppComponent, AppComponent,RouterOutlet, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
       path: '/...',
       name: 'Webpages',
       component: AppComponent,
    },
    {
       path: '/magazine/...',
       name: 'Magazine',
       component: magazineAppComponent,
    },
])

export class webpageAppComponent {

}
