/**
 * Created by Christopher Lynch on 2/23/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {MagHeaderData} from '../../../global/global-interface';
import {MagazineHeader} from "../../../global/global-service";
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";

@Component({
    selector: 'magtab-component',
    templateUrl: './app/components/magazine/mag-tabs/mag-tabs.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagTabComponent, ROUTER_DIRECTIVES],
    providers: [MagazineHeader],
})
export class MagTabComponent implements OnInit {
    tabs:MagHeaderData[];
    address:string;

    constructor(private _magazineHeaderService:MagazineHeader) {
    }

    getMagazineHeader() {
        this._magazineHeaderService.getMagazineHeader().then(tabs => this.tabs = tabs);
    }

    ngOnInit() {
        this.getMagazineHeader();

        //this.address = this._params.get('addr');
        //console.log(this.address);
    }
}