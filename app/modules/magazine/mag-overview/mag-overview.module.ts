import {Component, OnInit, Injector} from 'angular2/core';
import {MagOverview} from "../../../global/global-interface";
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagCarouselModule} from "../mag-carousel/mag-carousel.module";

declare var jQuery:any;

@Component({
    selector: 'magazine-overview-module',
    templateUrl: './app/modules/magazine/mag-overview/mag-overview.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent, MagCarouselModule],
})
export class MagOverviewModule implements OnInit {
    address:string;
    magOverview:MagOverview;
    price:string;
    contactAgent:string;

    constructor(private _injector:Injector, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    onResize(event) {
        var result;
        let fontSize = 4;
        if (jQuery(window).width() > '1020') {
            while (jQuery('.mag_text')[0].scrollHeight > jQuery('.mag_text')[0].clientHeight) {
                jQuery('.mag_text').css('font-size', fontSize + 'vw');
                fontSize = fontSize - 0.01;
                if (fontSize < 0.5) {
                    console.log('Too many loops!');
                    return false;
                }
            }
        } else {
            jQuery('.mag_text').css('font-size', '18px');
        }
        if (result) {
            clearTimeout(result)
        }
        result = setTimeout(function () {
        }, 100);
    }

    getMagazineOverview() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magOverview = magData.overview;
                    if (typeof magData.overview.price === 'string' && magData.overview != 'undefined') {
                        this.contactAgent = magData.overview.price;
                    } else {
                        if (magData.overview != 'undefined') {
                            this.price =  '$' + magData.overview.price.toLocaleString();
                        }
                    }
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineOverview();
    }
}
