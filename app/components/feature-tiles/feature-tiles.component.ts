import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'feature-tiles-component',
    templateUrl: './app/components/feature-tiles/feature-tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

export class FeatureTilesComponent{ }