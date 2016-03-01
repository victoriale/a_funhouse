import {Component} from 'angular2/core';
import {ExploreButtonComponent} from "../buttons/explore-button/explore-button.component";


@Component({
    selector: 'explore-tiles-component',
    templateUrl: './app/components/explore-tiles/explore-tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ExploreButtonComponent],
    providers: [],
})

export class ExploreTilesComponent{ }