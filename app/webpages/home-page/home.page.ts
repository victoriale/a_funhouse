import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {ExploreTilesComponent} from "../../components/explore-tiles/explore-tiles.component";
import {ExploreButtonComponent} from "../../components/buttons/explore-button/explore-button.component";
import {HeroBottomComponent} from "../../components/hero/hero-bottom/hero-bottom.component";
import {FeatureTilesComponent} from "../../components/feature-tiles/feature-tiles.component";
import {GeoLocationService} from "../../global/geo-location.service";
import map = webdriver.promise.map;

@Component({
    selector: 'PartnerHomePage',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent, FeatureTilesComponent],
    providers: [GeoLocationService],
})

export class HomePage implements OnInit {

    public geoLocationData: Object;
    city: string;
    state: string;

    // Buttons
    buttonTitle: string;
    buttonWidth: number;
    buttonIcon: string;
    heroButtonTitle: string;
    heroButtonWidth: number;
    heroButtonIcon: string;

    // Explore Tiles

    constructor(private _geoLocationService: GeoLocationService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    getGeoLocation() {
        this._geoLocationService.getGeoLocation()
            .subscribe(
                geoLocationData => {
                    this.city = geoLocationData[0].city;
                    this.state = geoLocationData[0].state;
                }
            );
    }

    ngOnInit() {

        this.getGeoLocation();

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