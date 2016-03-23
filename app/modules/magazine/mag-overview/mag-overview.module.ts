import {Component, OnInit, Injector} from 'angular2/core';
import {MagOverview} from "../../../global/global-interface";
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagCarouselModule} from "../mag-carousel/mag-carousel.module";

@Component({
    selector: 'magazine-overview-module',
    templateUrl: './app/modules/magazine/mag-overview/mag-overview.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent, MagCarouselModule],
})
export class MagOverviewModule implements OnInit {
    address: string;
    magOverview: MagOverview;
    price: number;

    constructor(private _injector:Injector, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineOverview() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magOverview = magData.overview;
                    this.price = +magData.overview.price;
                    //console.log("magData:", magData);
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineOverview();
    }
}
