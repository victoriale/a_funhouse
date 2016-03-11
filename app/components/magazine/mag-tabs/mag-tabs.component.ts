/**
 * Created by Christopher Lynch on 2/23/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {MagHeaderData} from '../../../global/global-interface';
import {MagazineHeader} from "../../../global/global-mag-service";
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";
import {Router} from "angular2/router";

@Component({
    selector: 'magtab-component',
    templateUrl: './app/components/magazine/mag-tabs/mag-tabs.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagTabComponent, ROUTER_DIRECTIVES],
    providers: [MagazineHeader],
})
export class MagTabComponent implements OnInit {
    tabs: MagHeaderData[];
    address: string;
    checked: boolean;

    constructor(private _params:RouteParams, private _magazineHeaderService:MagazineHeader, private _router:Router) {
    }

    getMagazineHeader() {
        this._magazineHeaderService.getMagazineHeader().then(tabs =>{ this.tabs = tabs

        });
    }

    navigate(moduleId:string){
        console.log(moduleId);
        //this._router.navigate(['./Magazine-page', {addr: this.address}, moduleId]);
        this._router.navigate([moduleId]);
    }

    ngOnInit() {
      console.log(this);
        this.getMagazineHeader();
        this.address = this._params.get('addr');
    }
}
