import {Component} from 'angular2/core';
import {ExploreButtonComponent} from "../buttons/explore-button/explore-button.component";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'explore-tiles-component',
    templateUrl: './app/components/explore-tiles/explore-tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES, ExploreButtonComponent],
    providers: [],
})

export class ExploreTilesComponent {

    tileLocations = ["Wichita, KS", "Derby, KS", "Haysville, KS", "Valley Center, KS", "Mulvane, KS"];
    tileUrls = ["WICHITA_KS", "DERBY_KS", "HAYSVILLE_KS", "VALLEY CENTER_KS", "MULVANE_KS"];
}