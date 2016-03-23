import {Component, OnInit, Injector, Input} from 'angular2/core';
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagOverview} from "../../../global/global-interface";
import {MagazineDataService} from "../../../global/global-mag-service";

@Component({
    selector: 'magazine-carousel-module',
    templateUrl: './app/modules/magazine/mag-carousel/mag-carousel.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
})
export class MagCarouselModule implements OnInit {
    @Input() magOverview: MagOverview;
    length: number;
    counter: number;
    address: string;
    imageLength: number;

    constructor(private _injector:Injector, private _magazineDataService:MagazineDataService) {
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

    setupImages() {
        if (this.magOverview) {
            length = this.magOverview.photos.length;
            this.counter = 0;
            this.imageLength = length;
        }
    }

    ngOnInit() {
        this.counter = 0;
        this.setupImages();
        //console.log("Carousel:", this.magOverview);
    }

    ngOnChanges() {
        this.setupImages();
    }

}
