import {Component, Input, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

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
    directives: [HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent, FeatureTilesComponent, ROUTER_DIRECTIVES],
    providers: [GeoLocationService, NearByCitiesService],
    inputs: ['cityLocation', 'stateLocation', 'nearByCities'],
})

export class HomePage implements OnInit {

    // Location data
    cityLocation: string;
    stateLocation: string;
    cityStateLocation: string;
    nearByCities: Object;

    //selectValue: string;

    // Buttons
    buttonTitle: string;
    buttonWidth: number;
    buttonIcon: string;
    buttonUrl: string;
    heroButtonTitle: string;
    heroButtonWidth: number;
    heroButtonIcon: string;

    constructor(private _router: Router, private _geoLocationService: GeoLocationService, private _nearByCitiesService: NearByCitiesService) {
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

    //Subscribe to getGeoLocation in geo-location.service.ts. On Success call getNearByCities function.
    getGeoLocation() {
        this._geoLocationService.getGeoLocation()
            .subscribe(
                geoLocationData => {
                    this.cityLocation = geoLocationData[0].city;
                    this.stateLocation = geoLocationData[0].state;
                    this.cityStateLocation = this.cityLocation + '_' + this.stateLocation;
                },
                err => this.defaultCity(),
                () => this.getNearByCities()
            );
    }

    // Subscribe to getNearByCities in geo-location.service.ts
    getNearByCities() {
        this._nearByCitiesService.getNearByCities(this.stateLocation, this.cityLocation)
            .subscribe(
                nearByCities => { this.nearByCities = nearByCities },
                err => console.log(err),
                () => console.log('Near By Cities Success!')
            );
    }

    defaultCity() {
        // Set default city and state if geo location call fails
        console.log('Geo Location is Borked!');
        this.stateLocation = "KS";
        this.cityLocation = "Wichita";
        this.cityStateLocation = this.cityLocation + '_' + this.stateLocation;
        this.getNearByCities();
    }

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

        // Call to get current State and City
        this.getGeoLocation();
        console.log(this);
    }
}