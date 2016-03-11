import {Component, OnInit} from 'angular2/core';
import {MagRecommendationsTextModule} from "../mag-recommendations-text/mag-recommendations-text";
import {MagRecommendationsImgModule} from "../mag-recommendations-img/mag-recommendations-img";
import {MagExploreModule} from "../mag-explore/mag-explore.module";
import {NavLeftComponent} from "../../../components/magazine/mag-nav-left/mag-nav-left.component";
import {MagazineSimilarListings} from "../../../global/global-mag-service";
import {MagSimilarListingsData} from "../../../global/global-interface";

@Component({
    selector: 'contact-module',
    templateUrl: './app/modules/magazine/contact/contact.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagRecommendationsTextModule, MagRecommendationsImgModule, MagExploreModule, NavLeftComponent],
    providers: [MagazineSimilarListings],
})

export class Contact implements OnInit {
    listingData:MagSimilarListingsData[];
    recommendations:boolean;

    constructor(private _magazineSimilarListingsService:MagazineSimilarListings) {
    }

    getMagazineSimilarListings() {
        this._magazineSimilarListingsService.getMagazineSimilarListings().then(listingData => {
            this.listingData = listingData;
        });
    }

    ngOnInit() {
        this.getMagazineSimilarListings();
        this.recommendations = false;
    }
}