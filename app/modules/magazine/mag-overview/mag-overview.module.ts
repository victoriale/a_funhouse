import {Component, OnInit} from 'angular2/core';
import {MagazineOverview} from "../../../global/global-service";
import {MagOverviewData} from "../../../global/global-interface";
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";

@Component({
    selector: 'magazine-overview-module',
    templateUrl: './app/modules/magazine/mag-overview/mag-overview.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent],
    providers: [MagazineOverview],
})
export class MagOverviewModule implements OnInit {
    data:MagOverviewData[];
    counter:number;

    constructor(private _magazineOverviewService:MagazineOverview) {
    }

    getMagazineOverview() {
        this._magazineOverviewService.getMagazineOverview().then(data => this.data = data);
    }

    ngOnInit() {
        this._magazineOverviewService.getMagazineOverview().then(data => {
            this.data = data;
        });
    }
}