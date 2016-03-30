import {Component, OnInit} from 'angular2/core';
import {WidgetModule} from "../../modules/widget/widget.module";
import {TitleComponent} from "../../components/title/title.component";
import {RouteParams} from "angular2/router";
import {NearByCitiesService} from "../../global/geo-location.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'city-view-page',
    templateUrl: './app/webpages/city-view-page/city-view.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, TitleComponent, ROUTER_DIRECTIVES],
    providers: [NearByCitiesService],
})

export class CityViewPage implements OnInit{
    public titleData: any;
    stateLocation: string;
    cityLocation: string;
    cityStateLocation: string;
    nearByCities: any;
    cities: Array<any> = [];

    constructor(private _params: RouteParams, private _nearByCitiesService: NearByCitiesService) {}

    getData() {
        this.titleData =
            {
                imageURL : './app/public/placeholder-location.jpg',
                smallText1 : 'Monday, February 23, 2016',
                smallText2 : ''+ this.cityLocation + ', ' + this.stateLocation + '',
                heading1 : 'Nearby Cities',
                heading2 : '',
                heading3 : 'For the ' + this.cityLocation + ', ' + this.stateLocation + ' Area',
                heading4 : '',
                icon: 'fa fa-map-marker',
                hasHover: false
            };

        // Subscribe to getNearByCities in geo-location.service.ts
        this._nearByCitiesService.getNearByCities(this.stateLocation, this.cityLocation)
            .subscribe(
                nearByCities => { this.nearByCities = nearByCities },
                err => console.log(err),
                () => this.dataToArray()
        );
    }

    dataToArray() {
        for( var i in this.nearByCities ) {
            if (this.nearByCities.hasOwnProperty(i) && i != 'citiesCount') {
                this.nearByCities[i].counter = Number(i) + 1;
                this.nearByCities[i].distance = parseFloat(this.nearByCities[i].distance).toFixed(2);
                this.nearByCities[i].locationUrl = this.nearByCities[i].city + '_' + this.nearByCities[i].state;
                this.cities.push(this.nearByCities[i]);
            }
        }
    }

    ngOnInit() {
        // Get City & State from route params
        this.stateLocation = this._params.get('state');
        this.cityLocation = this._params.get('city');
        this.cityStateLocation = this.stateLocation + '_' + this.cityLocation;

        this.getData();
        console.log(this);
    }

}