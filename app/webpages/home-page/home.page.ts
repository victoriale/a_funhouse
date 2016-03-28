import {Component, Input, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {ExploreTilesComponent} from "../../components/explore-tiles/explore-tiles.component";
import {ExploreButtonComponent} from "../../components/buttons/explore-button/explore-button.component";
import {HeroBottomComponent} from "../../components/hero/hero-bottom/hero-bottom.component";
import {FeatureTilesComponent} from "../../components/feature-tiles/feature-tiles.component";
import {GeoLocationService} from "../../global/geo-location.service";
import {NearByCitiesService} from "../../global/geo-location.service";
//import map = webdriver.promise.map;

@Component({
    selector: 'PartnerHomePage',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent, FeatureTilesComponent],
    providers: [GeoLocationService, NearByCitiesService],
    inputs: ['cityLocation', 'stateLocation', 'nearByCities'],
})

export class HomePage implements OnInit {

    // Location data
    cityLocation: string;
    stateLocation: string;
    nearByCities: Object;

    selectValue: string;

    // Buttons
    buttonTitle: string;
    buttonWidth: number;
    buttonIcon: string;
    buttonUrl: string;
    heroButtonTitle: string;
    heroButtonWidth: number;
    heroButtonIcon: string;

    _router: Router;

    constructor(private _geoLocationService: GeoLocationService, private _nearByCitiesService: NearByCitiesService, private _router: Router) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    //onChange(value) {
    //    this.selectValue = value;
    //    this.cityLocation = this.selectValue.split('-')[0];
    //    this.stateLocation = this.selectValue.split('-')[1];
    //    this.getNearByCities();
    //    console.log(this.nearByCities);
    //}

    ngOnInit() {

        // Set button options. Passed to explore-button-component and hero-bottom-component.
        this.buttonTitle = "More";
        this.buttonWidth = 160;
        this.buttonIcon = "fa fa-angle-double-down";
        this.buttonUrl = "";
        this.heroButtonTitle = "See The List";
        this.heroButtonWidth = 220;
        this.heroButtonIcon = "";
        //console.log(this);
        //console.log("this router:", this._router);
        if(this._router.hostComponent.name === "HomePage"){
            console.log("do something");
        }
    }
}
