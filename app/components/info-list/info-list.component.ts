import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'info-list',
    templateUrl: './app/components/info-list/info-list.component.html',
    
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    inputs: ['infoList'],
})

export class InfoListComponent implements OnInit{
    buttonName: string;
    infoList: any;
    locationURL: string;

    ngOnInit(){
        this.locationURL = this.infoList.city + '_' + this.infoList.stateOrProvince;
    }
}
