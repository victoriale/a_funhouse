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
    selector: 'profile-page',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent, FeatureTilesComponent],
    providers: [HomePageService],
})

export class HomePage {

    homePageData: HomePageData[];
    citylocation: string = "Wichita";

    // Buttons
    buttonTitle: string;
    buttonWidth: number;
    buttonIcon: string;
    heroButtonTitle: string;
    heroButtonWidth: number;
    heroButtonIcon: string;

    // Explore Tiles

    constructor(private _homePageService: HomePageService) { }

    getHomepageService() {
        this._homePageService.getHomePageService().then(homePageData => this.homePageData = homePageData);
    }

    ngOnInit() {
        this.getHomepageService();

        // Buttons
        this.buttonTitle = "More";
        this.buttonWidth = 160;
        this.buttonIcon = "fa fa-angle-double-down";
        this.heroButtonTitle = "See The List";
        this.heroButtonWidth = 220;
        this.heroButtonIcon = "";

        console.log(this);
    }
}