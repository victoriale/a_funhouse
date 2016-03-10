import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {OverviewPage} from "../webpages/magazine/overview/overview.page";
import {NeighborhoodPage} from "../webpages/magazine/neighborhood/neighborhood.page";
import {RecommendationsPage} from "../webpages/magazine/recommendations/recommendations.page";
import {ContactPage} from "../webpages/magazine/contact/contact.page";


@Component({
    selector: 'my-app',
    templateUrl: './app/app-layout/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [OverviewPage, NeighborhoodPage, RecommendationsPage, ContactPage, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/magazine/:addr/:pagenum',
        name: 'Overview-page',
        component: OverviewPage,
        useAsDefault: true,
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

export class AppComponent {
}