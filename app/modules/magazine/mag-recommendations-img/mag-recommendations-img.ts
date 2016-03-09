import {Component, Input} from 'angular2/core';
import {MagazineCarousel} from "../../../global/global-service";

@Component({
    selector: 'magazine-recommendations-img-module',
    templateUrl: './app/modules/magazine/mag-recommendations-img/mag-recommendations-img.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    providers: [MagazineCarousel],
    inputs: ['listingData', 'recommendations'],
})

export class MagRecommendationsImgModule{
}