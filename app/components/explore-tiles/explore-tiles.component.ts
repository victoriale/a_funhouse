import {Component, Input, OnInit} from 'angular2/core';
import {ExploreButtonComponent} from "../buttons/explore-button/explore-button.component";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'explore-tiles-component',
    templateUrl: './app/components/explore-tiles/explore-tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES, ExploreButtonComponent],
    providers: [],
    inputs: ['nearByCities'],
})

export class ExploreTilesComponent implements OnInit {

    nearByCities: Object;
    citiesDisplay: Array<any> = [];

    transformData() {
        var data = this.nearByCities;

        // Transform city names to lowercase and push to array for display
        for (var index in data) {
            if(data[index].hasOwnProperty("city")) {
                this.citiesDisplay.push(data[index].city.toLowerCase());
            }
        }
    }

    ngOnInit() {
        this.transformData();
    }
}