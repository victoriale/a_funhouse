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
    left: number;
    right: number;
    address: string;
    imageLength: number;

    constructor(private _injector:Injector) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    nextClick() {
        this.left = this.counter;
        this.counter = (this.counter + 1) % length;
        this.right = (this.counter + 1) % length;
    }

    prevClick() {
        this.right = this.counter;
        this.counter = (((this.counter - 1) % length) + length) % length;
        this.left = (((this.counter - 1) % length) + length) % length;
    }

    changeClick(i) {
        this.counter = i % length;
        this.right = (this.counter + 1) % length;
        this.left = (((this.counter - 1) % length) + length) % length;
    }

    setupImages() {
        if (this.magOverview) {
            length = this.magOverview.photos.length;
            this.counter = 0;
            this.right = this.counter + 1;
            this.left = length - 1;
            this.imageLength = length;
        }
    }

    ngOnInit() {
        this.counter = 0;
        this.setupImages();
    }

    ngOnChanges() {
        this.setupImages();
    }

}
