import {Component, OnInit} from 'angular2/core';
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagazineNeighborhood} from "../../../global/global-mag-service";
import {MagNeighborhood} from "../../../global/global-interface";

@Component({
    selector: 'magazine-neighborhood-module',
    templateUrl: './app/modules/magazine/mag-neighborhood/mag-neighborhood.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent],
    providers: [MagazineNeighborhood],
})
export class MagNeighborhoodModule implements OnInit {
    data:MagNeighborhood;

    constructor(private _magazineNeighborhoodService:MagazineNeighborhood) {
    }

    getMagazineNeighborhood() {
        this._magazineNeighborhoodService.getMagazineNeighborhood().then(data => this.data = data);
    }

    ngOnInit() {
        this._magazineNeighborhoodService.getMagazineNeighborhood().then(data => {
            this.data = data;
        });
    }
}