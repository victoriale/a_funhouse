import {Component, Input, OnInit} from 'angular2/core';
import {List} from '../../global/global-interface';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'contentlist',
    templateUrl: './app/components/contentlist/contentlist.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [],
})

export class contentList implements OnInit{
    @Input() data;
    @Input() cityLocation;
    @Input() stateLocation;

    cityLocation: string;
    stateLocation: string;

    ngOnInit(){
        this.location = this.cityLocation + ', ' + this.stateLocation;
    }
}
