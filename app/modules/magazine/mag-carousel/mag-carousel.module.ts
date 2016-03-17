import {Component, OnInit, Injector} from 'angular2/core';
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagOverview} from "../../../global/global-interface";
import {MagazineDataService} from "../../../global/global-mag-service";

@Component({
    selector: 'magazine-carousel-module',
    templateUrl: './app/modules/magazine/mag-carousel/mag-carousel.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
})
export class MagCarouselModule implements OnInit {
    photos: MagOverview;
    length: number;
    counter: number = 10;
    address: string;
    magOverview: MagOverview;
    imageLength: number;

    constructor( private _injector: Injector, private _magazineDataService: MagazineDataService ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    nextClick() {
        this.counter = this.counter + 1;
        if (this.counter >= length) {
            this.counter = 0;
        }
    }

    prevClick() {
        this.counter = this.counter - 1;
        if (this.counter < 0) {
            this.counter = length - 1;
        }
    }

    changeClick(i) {
        if (i <= 0) {
            this.counter = 0;
        }
        else if (i >= length) {
            this.counter = length - 1;
        }
        else {
            this.counter = i;
        }
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
