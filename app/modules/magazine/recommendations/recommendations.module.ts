import {Component, OnInit} from 'angular2/core'
import {NavRightComponent} from "../../../components/magazine/mag-nav-right/mag-nav-right.component";
import {MagRecommendationsImgModule} from "../mag-recommendations-img/mag-recommendations-img";
import {MagRecommendationsTextModule} from "../mag-recommendations-text/mag-recommendations-text";
import {NavLeftComponent} from "../../../components/magazine/mag-nav-left/mag-nav-left.component";
import {MagazineSimilarListings} from "../../../global/global-service";
import {MagSimilarListingsData} from "../../../global/global-interface";

@Component({
    selector: 'recommendations-module',
    templateUrl: './app/modules/magazine/recommendations/recommendations.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [NavRightComponent, MagRecommendationsImgModule, MagRecommendationsTextModule, NavLeftComponent],
    providers: [MagazineSimilarListings],
})

export class RecommendationsModule implements OnInit {
    listingData:MagSimilarListingsData[];
    recommendations: boolean;

    constructor(private _magazineSimilarListingsService:MagazineSimilarListings) {
    }

    getMagazineSimilarListings() {
        this._magazineSimilarListingsService.getMagazineSimilarListings().then(listingData => {
            this.listingData = listingData;
        });
    }

    ngOnInit() {
        this.getMagazineSimilarListings();
        this.recommendations = true;
    }
}