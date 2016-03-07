import {Component} from 'angular2/core';
import {ExploreButtonComponent} from "../buttons/explore-button/explore-button.component";
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy} from 'angular2/router';


@Component({
    selector: 'explore-tiles-component',
    templateUrl: './app/components/explore-tiles/explore-tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ExploreButtonComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})

export class ExploreTilesComponent{ }