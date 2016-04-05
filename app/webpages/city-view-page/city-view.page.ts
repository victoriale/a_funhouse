import {Component, OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {WidgetModule} from "../../modules/widget/widget.module";
import {TitleComponent} from "../../components/title/title.component";
import {CityViewService} from "../../global/geo-location.service";
import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";
import {GlobalFunctions} from "../../global/global-functions";

@Component({
    selector: 'city-view-page',
    templateUrl: './app/webpages/city-view-page/city-view.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, TitleComponent, HeroListComponent , ROUTER_DIRECTIVES],
    providers: [CityViewService, GlobalFunctions],
})

export class CityViewPage implements OnInit{
    public titleData: any;
    stateLocation: string;
    cityLocation: string;
    cityStateLocation: string;
    cityView: any;
    cities: Array<any> = [];

    constructor(private _params: RouteParams, private _cityViewService: CityViewService, private _globalFunctions: GlobalFunctions) {}

    getData() {
        this.titleData =
            {
                imageURL : './app/public/placeholder-location.jpg',
                smallText1 : 'Monday, February 23, 2016',
                smallText2 : ''+ this.cityLocation + ', ' + this._globalFunctions.stateToAP(this.stateLocation) + '',
                heading1 : 'Nearby Cities',
                heading2 : '',
                heading3 : 'For the ' + this.cityLocation + ', ' + this._globalFunctions.stateToAP(this.stateLocation) + ' Area',
                heading4 : '',
                icon: 'fa fa-map-marker',
                hasHover: false
            };

        // Subscribe to getNearByCities in geo-location.service.ts
        this._cityViewService.getCityView(this.stateLocation, this.cityLocation)
            .subscribe(
                cityView => { this.cityView = cityView },
                err => console.log(err),
                () => this.dataToArray()
        );
    }

    dataToArray() {
        for( var i in this.cityView ) {
            if (this.cityView.hasOwnProperty(i) && i != 'citiesCount') {
                this.cityView[i].stateAP = this._globalFunctions.stateToAP(this.cityView[i].state);
                this.cityView[i].counter = Number(i) + 1;
                this.cityView[i].distance = parseFloat(this.cityView[i].distance).toFixed(2);
                this.cityView[i].locationUrl = this.cityView[i].city + '_' + this.cityView[i].state;
                this.cities.push(this.cityView[i]);
            }
        }
    }

    ngOnInit() {
        // Get City & State from route params
        this.stateLocation = decodeURI(this._params.get('state'));
        this.cityLocation = decodeURI(this._params.get('city'));
        this.cityStateLocation = this.stateLocation + '_' + this.cityLocation;

        this.getData();
        console.log(this);
    }

}