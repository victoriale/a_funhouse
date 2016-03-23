import {Component, OnInit, Injector, Input} from 'angular2/core';
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagNeighborhood} from "../../../global/global-interface";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";

@Component({
    selector: 'magazine-neighborhood-module',
    templateUrl: './app/modules/magazine/mag-neighborhood/mag-neighborhood.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent],
})
export class MagNeighborhoodModule implements OnInit {
    address: string;
    magNeighborhood:MagNeighborhood;

    constructor( private _injector: Injector, private _magazineDataService: MagazineDataService ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineNeighborhood() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magNeighborhood = magData.neighborhood;
                    //console.log("magData:", magData);
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineNeighborhood();
    }
}