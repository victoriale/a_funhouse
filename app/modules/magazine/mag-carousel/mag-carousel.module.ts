import {Component, OnInit} from 'angular2/core';
import {MagazineCarousel} from "../../../global/global-service";
import {MagCarouselData} from "../../../global/global-interface";

@Component({
    selector: 'magazine-carousel-module',
    templateUrl: './app/modules/magazine/mag-carousel/mag-carousel.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    providers: [MagazineCarousel],
})
export class MagCarouselModule implements OnInit {
    data:MagCarouselData[];
    length:'';
    counter:number;
    imageLength:number;

    constructor(private _magazineCarouselService:MagazineCarousel) {
    }

    getMagazineCarousel() {
        this._magazineCarouselService.getMagazineCarousel().then(data => this.data = data);
    }

    ngOnInit() {
        this._magazineCarouselService.getMagazineCarousel().then(data => {
            this.data = data;
            length = data[0].photos.length;
            this.counter = 0;
            this.imageLength = length;
        });
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
}