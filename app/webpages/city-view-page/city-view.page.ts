import {Component, OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {WidgetModule} from "../../modules/widget/widget.module";
import {TitleComponent} from "../../components/title/title.component";
import {CityViewService} from "../../global/geo-location.service";
import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";
import {GlobalFunctions} from "../../global/global-functions";
import {DynamicCarousel2} from "../../components/carousel/dynamic-carousel2/dynamic-carousel2";

declare var moment: any;

@Component({
    selector: 'city-view-page',
    templateUrl: './app/webpages/city-view-page/city-view.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, TitleComponent, HeroListComponent, DynamicCarousel2, ROUTER_DIRECTIVES],
    providers: [CityViewService, GlobalFunctions],
})

export class CityViewPage implements OnInit{
    public titleData: any;
    stateLocation: string;
    cityLocation: string;
    cityStateLocation: string;
    cityView: any;
    cities: Array<any> = [];
    carouselData: any = [];

    constructor(private _params: RouteParams, private _cityViewService: CityViewService, private _globalFunctions: GlobalFunctions) {}

    getData() {
        // Subscribe to getNearByCities in geo-location.service.ts
        this._cityViewService.getCityView(this.stateLocation, this.cityLocation)
            .subscribe(
                cityView => { this.cityView = cityView },
                err => console.log(err),
                () => this.dataToArray()
        );
    }

    dataToArray() {
        this.titleData =
          {
              imageURL : './app/public/joyfulhome_house.png',
              smallText1 : 'Last Updated: ' + moment(new Date()).format('dddd, MMMM Do, YYYY'),
              smallText2 : ''+ this.cityLocation + ', ' + this._globalFunctions.stateToAP(this.stateLocation) + '',
              heading1 : 'Nearby Cities',
              heading2 : '',
              heading3 : 'For the ' + this.cityLocation + ', ' + this._globalFunctions.stateToAP(this.stateLocation) + ' Area',
              heading4 : '',
              icon: 'fa fa-map-marker',
              hasHover: false
          };
        var carouselData = [];
        for( var i in this.cityView ) {
            if (this.cityView.hasOwnProperty(i) && i != 'citiesCount') {
                this.cityView[i].stateAP = this._globalFunctions.stateToAP(this.cityView[i].state);
                this.cityView[i].rank = Number(i) + 1;
                this.cityView[i].distance = parseFloat(this.cityView[i].distance).toFixed(2);
                this.cityView[i].locationUrl = this.cityView[i].city + '_' + this.cityView[i].state;
                if(this.cityView[i].rank % 2 == 0) {
                    this.cityView[i].bgClass = "even";
                }else{
                    this.cityView[i].bgClass = "odd";
                }
                this.cities.push(this.cityView[i]);

                var carData = {
                  textDetails:    [
                                  this.cityView[i].city+", "+this.cityView[i].stateAP,
                                  "<small><i class='fa fa-map-marker'></i> "+this.cityView[i].city+", "+this.cityView[i].stateAP+" | <i class='fa fa-car'></i> " + this.cityView[i].distance + "</small>",
                                  "&nbsp;",
                                  this.cityView[i].totalListings,
                                  "<small>Total Listed Homes</small>"
                                  ],
                  index:          this.cityView[i].rank,
                  image_url1:     this.cityView[i].locationImage
                }// carousel data ends
            }

            //need to double check about the route set up in dynamic carousel component
            carData['button_url'] = "/location/"+this.cityView[i].locationUrl;

            carouselData.push(carData);
        }
        this.carouselData = carouselData;
    }

    ngOnInit() {
        // Get City & State from route params
        this.stateLocation = decodeURI(this._params.get('state'));
        this.cityLocation = decodeURI(this._params.get('city'));
        this.cityStateLocation = this.stateLocation + '_' + this.cityLocation;
        this.getData();
    }

}
