import {Component, OnInit} from 'angular2/core';
import {MagHeaderModule} from "../../../modules/magazine/mag-header/mag-header.module";
import {FooterComponent} from "../../../components/magazine/mag-footer/mag-footer.component";
import {MagazineSimilarListings} from "../../../global/global-service";
import {MagSimilarListingsData} from "../../../global/global-interface";
import {MagRecommendationsTextModule} from "../../../modules/magazine/mag-recommendations-text/mag-recommendations-text";
import {MagRecommendationsImgModule} from "../../../modules/magazine/mag-recommendations-img/mag-recommendations-img";
import {MagContactModule} from "../../../modules/magazine/mag-contact/mag-contact.module";
import {NavLeftComponent} from "../../../components/magazine/mag-nav-left/mag-nav-left.component";

@Component({
    selector: 'contact-page',
    templateUrl: './app/webpages/magazine/contact/contact.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagHeaderModule, FooterComponent, MagRecommendationsTextModule, MagRecommendationsImgModule, MagContactModule, NavLeftComponent],
    providers: [MagazineSimilarListings],
})

export class ContactPage implements OnInit {
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