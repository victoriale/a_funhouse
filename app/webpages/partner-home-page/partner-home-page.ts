import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {HomePageData} from "../../global/global-interface";
import {HomePageService} from '../../global/global-service'

import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {ExploreTilesComponent} from "../../components/explore-tiles/explore-tiles.component";
import {ExploreButtonComponent} from "../../components/buttons/explore-button/explore-button.component";
import {HeroBottomComponent} from "../../components/hero/hero-bottom/hero-bottom.component";
import {FeatureTilesComponent} from "../../components/feature-tiles/feature-tiles.component";

@Component({
    selector: 'partner-profile-page',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent, FeatureTilesComponent],
    providers: [HomePageService],
})

export class PartnerHomePage {
    homepagedata: HomePageData[];

    citylocation: string = "Wichita";

    // Buttons
    buttontitle: string;
    buttonwidth: number;
    buttonicon: string;
    herobuttontitle: string;
    herobuttonwidth: number;
    herobuttonicon: string;

    // Explore Tiles

    constructor(private _homePageService: HomePageService) { }

    getHomepageService() {
        this._homePageService.getHomePageService().then(homepagedata => this.homepagedata = homepagedata);
    }

    ngOnInit() {
        this.getHomepageService();

        // Buttons
        this.buttontitle = "More";
        this.buttonwidth = 160;
        this.buttonicon = "fa fa-angle-double-down";
        this.herobuttontitle = "See The List";
        this.herobuttonwidth = 220;
        this.herobuttonicon = "";

        console.log(this);
    }
}