import {Component, OnInit, Injector} from 'angular2/core';
import {MagazineOverview} from "../../../global/global-mag-service";
import {MagOverview} from "../../../global/global-interface";
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";

@Component({
    selector: 'magazine-overview-module',
    templateUrl: './app/modules/magazine/mag-overview/mag-overview.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent],
})
export class MagOverviewModule implements OnInit {
    counter: number;
    address: string;
    magOverview: MagOverview;

    constructor( private _injector: Injector, private _magazineDataService: MagazineDataService ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineOverview() {
        this._magazineDataService.getMagazineData("5170-Benton-Tama-Road-Buckingham-IA")
            .subscribe(
                magData => {
                    this.magOverview = magData.overview;
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
      this.getMagazineOverview();
    }
}
