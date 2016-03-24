import {Component, OnInit, Injector, Input} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams } from 'angular2/router';
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagNeighborhood} from "../../../global/global-interface";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";
import {WebApp} from "../../../app-layout/app.layout";

@Component({
    selector: 'magazine-neighborhood-module',
    templateUrl: './app/modules/magazine/mag-neighborhood/mag-neighborhood.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent, ROUTER_DIRECTIVES],
})
export class MagNeighborhoodModule implements OnInit {
    address:string;
    magNeighborhood:MagNeighborhood;
    public partnerID:string;
    isPartner:boolean;

    constructor(private _injector:Injector, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineNeighborhood() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magNeighborhood = magData.neighborhood;
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineNeighborhood();
    }
}