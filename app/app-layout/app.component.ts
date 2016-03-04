import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {OverviewPage} from "../webpages/magazine/overview/overview.page";
import {NeighborhoodPage} from "../webpages/magazine/neighborhood/neighborhood.page";


@Component({
    selector: 'my-app',
    templateUrl: './app/app-layout/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ OverviewPage, NeighborhoodPage, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/magazine/1',
        name: 'Overview-page',
        component: OverviewPage,

    },
    {
        path: '/magazine/2',
        name: 'Neighborhood-page',
        component: NeighborhoodPage,
        useAsDefault: true,
    },

])

export class AppComponent {
}