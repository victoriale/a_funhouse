import {Component, Input, OnInit} from 'angular2/core';
import {List} from '../../global/global-interface';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {GlobalFunctions} from "../../global/global-functions";

@Component({
    selector: 'contentlist',
    templateUrl: './app/components/contentlist/contentlist.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [GlobalFunctions],
})

export class contentList implements OnInit{
    @Input() data;
    @Input() cityLocation;
    @Input() stateLocation;

    first: number = 0;
    location: string;
    locationURL: string;

    constructor(private _globalFunctions: GlobalFunctions) {}

    ngOnInit(){
        this.location = this.cityLocation.toLowerCase() + ', ' + this._globalFunctions.stateToAP(this.stateLocation);
        this.locationURL = this.cityLocation + '_' +this.stateLocation;
    }
}
