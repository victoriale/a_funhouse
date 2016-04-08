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
import {GlobalFunctions} from "../../global/global-functions";
import {PartnerHomePage} from "../partner-home-page/partner-home-page";
//import map = webdriver.promise.map;

declare var jQuery:any;

@Component({
    selector: 'PartnerHomePage',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [PartnerHomePage, HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent, FeatureTilesComponent, ROUTER_DIRECTIVES],
    providers: [GeoLocationService, NearByCitiesService],
    inputs: [],
})

export class HomePage implements OnInit {

    // Location data
    cityLocation: string;
    stateLocation: string;
    stateAPLocation: string;
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
    isMyHouseKitHome: boolean;//determine which homepage to show myhousekit or joyfulhome.

    constructor(private _router: Router, private _geoLocationService: GeoLocationService, private _nearByCitiesService: NearByCitiesService, private _globalFunctions: GlobalFunctions) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this._router.root
            .subscribe(
                route => {
                  var curRoute = route;
                  var partnerID = curRoute.split('/');
                  var hostname = window.location.hostname;
                  var partnerIdExists = partnerID[0] != '' ? true : false;

                  var myhousekit = /myhousekit/.test(hostname);

                  if( !partnerIdExists &&  myhousekit){
                    jQuery('.webpage-home').css('display','none');
                    this.isMyHouseKitHome = true;
                    document.title = "MyHousekit";
                  }else if( partnerIdExists && myhousekit){
                    jQuery('.webpage-home').css('display','block');
                    document.title = "MyHousekit " + partnerID[0].replace('-', ' ');
                  }else{
                    jQuery('.webpage-home').css('display','block');
                    this.isMyHouseKitHome = false;
                    document.title = "Joyful Home";
                  }
                }//end route
            )//end of route subscribe
    }

    //Subscribe to getGeoLocation in geo-location.service.ts. On Success call getNearByCities function.
    getGeoLocation() {
        this._geoLocationService.getGeoLocation()
            .subscribe(
                geoLocationData => {
                    this.cityLocation = geoLocationData[0].city;
                    this.stateLocation = geoLocationData[0].state;
                    this.stateAPLocation = this._globalFunctions.stateToAP(this.stateLocation);
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
                nearByCities => {
                    this.nearByCities = nearByCities;
                    for( var i in this.nearByCities ) {
                        if (this.nearByCities.hasOwnProperty(i) && i != 'citiesCount') {
                            this.nearByCities[i].stateAPLocation = this._globalFunctions.stateToAP(this.nearByCities[i].state);
                        }
                    }
                },
                err => console.log(err)
            );
    }

    defaultCity() {
        // Set default city and state if geo location call fails
        this.stateLocation = "KS";
        this.stateAPLocation = this._globalFunctions.stateToAP(this.stateLocation);
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

        // Call to get current State and City
        this.getGeoLocation();
    }
}
