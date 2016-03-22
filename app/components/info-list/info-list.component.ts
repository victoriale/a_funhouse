import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'info-list',
    templateUrl: './app/components/info-list/info-list.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    inputs: ['infoList'],
})

export class InfoListComponent implements OnInit{
    buttonName: string;
    infoList: any;

    ngOnInit(){
        console.log(this);
    }
}
