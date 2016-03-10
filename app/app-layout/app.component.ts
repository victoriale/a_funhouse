import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MagazinePage} from "../webpages/magazine/magazine.page";


@Component({
    selector: 'my-app',
    templateUrl: './app/app-layout/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagazinePage, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES, ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/magazine/:addr/...',
        name: 'Magazine-page',
        component: MagazinePage
    },
])

export class AppComponent {
}