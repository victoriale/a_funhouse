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
import {NearByCitiesService} from "../../global/geo-location.service";
//import map = webdriver.promise.map;

@Component({
    selector: 'PartnerHomePage',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent, FeatureTilesComponent],
    providers: [GeoLocationService, NearByCitiesService],
})

export class HomePage implements OnInit {

    // Location data
    cityLocation: string;
    stateLocation: string;
    nearByCities: Object;
    citiesDisplay: Array<any> = [];

    selectValue: string;

    // Buttons
    buttonTitle: string;
    buttonWidth: number;
    buttonIcon: string;
    heroButtonTitle: string;
    heroButtonWidth: number;
    heroButtonIcon: string;

    constructor(private _geoLocationService: GeoLocationService, private _nearByCitiesService: NearByCitiesService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    // Subscribe to getGeoLocation in geo-location.service.ts. On Success call getNearByCities function.
    //getGeoLocation() {
    //    this._geoLocationService.getGeoLocation()
    //        .subscribe(
    //            geoLocationData => {
    //                this.cityLocation = geoLocationData[0].city;
    //                this.stateLocation = geoLocationData[0].state;
    //            },
    //        err => console.log(err),
    //        () => this.getNearByCities()
    //        );
    //}

    // Subscribe to getNearByCities in geo-location.service.ts
    getNearByCities() {
        this._nearByCitiesService.getNearByCities(this.stateLocation, this.cityLocation)
            .subscribe(
                nearByCities => { this.nearByCities = nearByCities },
                err => console.log(err),
                () => console.log('Near By Cities Success!')
            );
    }

    //transformData() {
    //    var data = this.nearByCities;
    //
    //    // Transform city names to lowercase and push to array for display
    //    for (var index in data) {
    //        if(data[index].hasOwnProperty("city")) {
    //            this.citiesDisplay.push(data[index].city.toLowerCase());
    //        }
    //    }
    //}

    onChange(value) {
        this.selectValue = value;
        this.cityLocation = this.selectValue.split('-')[0];
        this.stateLocation = this.selectValue.split('-')[1];
        this.getNearByCities();
        console.log(this.nearByCities);
    }

    ngOnInit() {
        // Call to get current State and City
        //this.getGeoLocation();

        this.stateLocation = "KS";
        this.cityLocation = "Wichita";

        // For testing geo location
        this.getNearByCities();

        // Set button options. Passed to explore-button-component and hero-bottom-component.
        this.buttonTitle = "More";
        this.buttonWidth = 160;
        this.buttonIcon = "fa fa-angle-double-down";
        this.heroButtonTitle = "See The List";
        this.heroButtonWidth = 220;
        this.heroButtonIcon = "";
        console.log(this);
    }
}