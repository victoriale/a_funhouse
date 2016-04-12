import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'feature-tiles-component',
    templateUrl: './app/components/feature-tiles/feature-tiles.component.html',
    
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
    inputs: ['cityLocation', 'stateLocation'],
})

export class FeatureTilesComponent{
    location: string;
    cityLocation: string;
    stateLocation: string;

    ngOnInit() {
        this.location = this.cityLocation + '_' + this.stateLocation;
    }
}