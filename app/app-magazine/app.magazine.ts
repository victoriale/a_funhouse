import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';
import {magazine} from "../magazine/magazine";

@Component({
    templateUrl: './app/magazine/magazine.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [magazine, RouterOutlet, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
       path: '/',
       name: 'Magazine-page',
       component: magazine,
       useAsDefault: true,
    },
    {
       path: '/page',
       name: 'Page',
       component: magazine,
    }
])

export class magazineApp {
    partner_id: string = "latimes.com";
    cityStateLocation: string = "WICHITA_KS";
}
