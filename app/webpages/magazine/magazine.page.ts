import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams } from 'angular2/router';
import {OverviewPage} from "./overview/overview.page";
import {NeighborhoodPage} from "./neighborhood/neighborhood.page";
import {RecommendationsPage} from "./recommendations/recommendations.page";
import {ContactPage} from "./contact/contact.page";

@Component({
    selector: 'magazine-page',
    templateUrl: './app/webpages/magazine/magazine.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [OverviewPage, NeighborhoodPage, RecommendationsPage, ContactPage, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})

@RouteConfig([
    {
        path: '/magazine/:addr/1',
        name: 'Overview-page',
        component: OverviewPage,
    },
    {
        path: '/magazine/:addr/2',
        name: 'Neighborhood-page',
        component: NeighborhoodPage,
    },
    {
        path: '/magazine/:addr/3',
        name: 'Recommendation-page',
        component: RecommendationsPage,
    },
    {
        path: '/magazine/:addr/4',
        name: 'Contact-page',
        component: ContactPage,
    },
])

export class MagazinePage {
    pagenum: string;
    constructor(params: RouteParams){
        this.pagenum = params.get('pagenum');
    }
}