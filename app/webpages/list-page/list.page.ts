/**
 * Created by Victoria on 3/8/2016.
 */
import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';
import {DetailedListComponent} from '../../components/detailed-list/detailed-list.component';
import {PhotoListComponent} from '../../components/photo-list/photo-list.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";
import {TitleComponent} from '../../components/title/title.component';
import {PaginationFooter} from "../../components/pagination-footer/pagination-footer.component";
import {listViewPage} from '../../global/global-service';
import {LoadingComponent} from '../../components/loading/loading.component';
import {ErrorComponent} from '../../components/error/error.component';
import {MapComponent} from '../../components/map/map.component';

declare var moment: any;

@Component({
    selector: 'List-page',
    templateUrl: './app/webpages/list-page/list.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [PhotoListComponent, ROUTER_DIRECTIVES, DetailedListComponent, ListViewCarousel, WidgetModule, PaginationFooter, LoadingComponent, ErrorComponent, MapComponent],
    providers: [listViewPage],
})

export class ListPage {
    carouselData: any = [];
    listData: any;
    data: any;
    public view: string = 'list'; // set to default list view
    //Parameters for the pagination footer
    public paginationParameters: Object;

    public listName: string;
    public listState: string;
    public listCity: string;
    public listLimit: string = "20";
    public listPage: string;

    //Sort is the sort query parameter. sortType is the type of sort (price, living area, etc). sortDirection is the direction of the sort (high to low or low to high)
    public sort: string;
    public sortType: string;
    public sortDirection: string;
    public viewType: string;
    public listNameDisplay: string;
    public totalListings: string;
    public isError: boolean = false;
    //Data sent to map component
    public mapData: any;
    //Menu params
    public menuListParams: any;
    public menuPhotoParams: any;
    public menuMapParams: any;
    public listPageName: any;

    public geoExists: boolean = false;

    //Filter params for FYH
    filterState: string;
    filterCity: string;
    filterPage: string;
    filterMinPrice: string;
    filterMaxPrice: string;
    filterBedrooms: string;
    filterBathrooms: string;
    filterSqFeet: string;
    filterLot: string;
    filterType: string;

    constructor(private _router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions, private listViewData: listViewPage) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    sortChange(event){
        var sortOption = event.target.value;
        console.log(sortOption);
        var self = this;
        var params: any = {
            viewType: self.viewType,
            listname: self.listName,
            state: self.listState,
            city: self.listCity,
            page: self.listPage
        };

        if(sortOption !== 'none'){
            params.sort = sortOption;
        }

        this._router.navigate(['List-page', params]);
    }

    setPaginationParams(input) {
        var data = input.data;

        if(this.listName !== 'filter') {
            //Normal Listing
            var listLimit = Number(this.listLimit);
            var pageNumber = Number(this.listPage);
            //Find max amount of pages to send to pagination footer
            var max = Math.ceil(Number(data[0].totalListings) / listLimit);

            //Define base navigation parameters
            var navigationParams: any = {
                listname: this.listName,
                state: this.listState,
                city: this.listCity,
                viewType: this.viewType
            };

            //If sort parameter exists use in navigation parameters
            if(this.sort !== null){
                navigationParams.sort = this.sort;
            }

            this.paginationParameters = {
                index: pageNumber,
                max: max,
                paginationType: 'page',
                navigationPage: 'List-page',
                navigationParams: navigationParams,
                indexKey: 'page'
            };
        }else {
            //Filter Listing
            var listLimit = Number(this.listLimit);
            var pageNumber = Number(this.listPage);
            //Find max amount of pages to send to pagination footer
            var max = Math.ceil(Number(data[0].totalListings) / listLimit);

            this.paginationParameters = {
                index: pageNumber,
                max: max,
                paginationType: 'page',
                navigationPage: 'List-page-filter',
                navigationParams: {
                    listname: this.listName,
                    state: this._params.get('state'),
                    city: this._params.get('city'),
                    priceLowerBound: this._params.get('priceLowerBound'),
                    priceUpperBound: this._params.get('priceUpperBound'),
                    bedrooms: this._params.get('bedrooms'),
                    bathrooms: this._params.get('bathrooms'),
                    squareFeet: this._params.get('squareFeet'),
                    lotSize: this._params.get('lotSize'),
                    type: this._params.get('type'),
                    limit: this.listLimit,
                    page: this._params.get('page'),
                    viewType: this.viewType
                },
                indexKey: 'page'
            };
        }
    }

    //Defines link parameters for view type buttons
    setMenuParams() {
        if(this.listName !== 'filter') {
            //Normal Listing
            //Define parameters for the 3 view type buttons (list/photo/map)
            var menuListParams:any = {
                viewType: 'list',
                listname: this.listName,
                state: this.listState,
                city: this.listCity,
                page: this.listPage
            };
            var menuPhotoParams:any = {
                viewType: 'photo',
                listname: this.listName,
                state: this.listState,
                city: this.listCity,
                page: this.listPage
            };
            var menuMapParams:any = {
                viewType: 'map',
                listname: this.listName,
                state: this.listState,
                city: this.listCity,
                page: this.listPage
            };
            //If sort query parameter is defined add to menu button paramters
            if (this.sort !== null) {
                menuListParams.sort = this.sort;
                menuPhotoParams.sort = this.sort;
                menuMapParams.sort = this.sort;
            }
            //Assign parameters to use in routerLink
            this.menuListParams = menuListParams;
            this.menuPhotoParams = menuPhotoParams;
            this.menuMapParams = menuMapParams;
            this.listPageName = 'List-page';
        }else{
            //Filter Listing
            var menuListParams:any = {
                viewType: 'list',
                listname: this.listName,
                state: this._params.get('state'),
                city: this._params.get('city'),
                priceLowerBound: this._params.get('priceLowerBound'),
                priceUpperBound: this._params.get('priceUpperBound'),
                bedrooms: this._params.get('bedrooms'),
                bathrooms: this._params.get('bathrooms'),
                squareFeet: this._params.get('squareFeet'),
                lotSize: this._params.get('lotSize'),
                type: this._params.get('type'),
                limit: this.listLimit,
                page: this.listPage
            };
            var menuPhotoParams:any = {
                viewType: 'photo',
                listname: this.listName,
                state: this._params.get('state'),
                city: this._params.get('city'),
                priceLowerBound: this._params.get('priceLowerBound'),
                priceUpperBound: this._params.get('priceUpperBound'),
                bedrooms: this._params.get('bedrooms'),
                bathrooms: this._params.get('bathrooms'),
                squareFeet: this._params.get('squareFeet'),
                lotSize: this._params.get('lotSize'),
                type: this._params.get('type'),
                limit: this.listLimit,
                page: this.listPage
            };
            var menuMapParams:any = {
                viewType: 'map',
                listname: this.listName,
                state: this._params.get('state'),
                city: this._params.get('city'),
                priceLowerBound: this._params.get('priceLowerBound'),
                priceUpperBound: this._params.get('priceUpperBound'),
                bedrooms: this._params.get('bedrooms'),
                bathrooms: this._params.get('bathrooms'),
                squareFeet: this._params.get('squareFeet'),
                lotSize: this._params.get('lotSize'),
                type: this._params.get('type'),
                limit: this.listLimit,
                page: this.listPage
            };

            this.menuListParams = menuListParams;
            this.menuPhotoParams = menuPhotoParams;
            this.menuMapParams = menuMapParams;
            this.listPageName = 'List-page-filter';
        }

    }

    getListView() {// GET DATA FROM GLOBAL SERVICE

        // Get listname param to determine which API to call
        this.listName = this._params.get('listname');
        this.viewType = this._params.get('viewType');

        if(this.listName !== "filter"){
            //Normal Listing
            this.sort = this._params.get('sort');

            //Determine sort display for tooltip
            if(this.sort !== null){
                switch(this.sort){
                    case 'priceHighToLow':
                        this.sortType = 'price';
                        this.sortDirection = 'high to low';
                        break;
                    case 'priceLowToHigh':
                        this.sortType = 'price';
                        this.sortDirection = 'low to high';
                        break;
                    case 'areaHighToLow':
                        this.sortType = 'living area';
                        this.sortDirection = 'high to low';
                        break;
                    case 'areaLowToHigh':
                        this.sortType = 'living area';
                        this.sortDirection = 'low to high';
                        break;
                }
            }

            this.listState = this._params.get('state');
            this.listCity = this._params.get('city');
            this.listCity = this.globalFunctions.toTitleCase(this.listCity);
            this.listPage = this._params.get('page');

            //list/homesAtLeast5YearsOld/KS/Wichita/empty/10/1
            this.listViewData.getListData(this.listName, this.listState, this.listCity, this.listLimit, this.listPage, this.sort)
                .subscribe(
                    data => {
                        //Transform returned data
                        this.transformData(data);
                        //Define parameters for pagination footer
                        this.setPaginationParams(data);
                        //Define parameters for view type buttons
                        this.setMenuParams();
                    },
                    err => {
                        console.log('Error: Non Filter List API: ', err);
                        this.isError = true;
                    }
                );
        }else{
            //Filter Listing

            //Grab params for API call
            this.filterState = this._params.get('state');
            this.filterCity = this._params.get('city');
            this.filterMinPrice = this._params.get('priceLowerBound');
            this.filterMaxPrice = this._params.get('priceUpperBound');
            this.filterBedrooms = this._params.get('bedrooms');
            this.filterBathrooms = this._params.get('bathrooms');
            this.filterSqFeet = this._params.get('squareFeet');
            this.filterLot = this._params.get('lotSize');
            this.filterType = this._params.get('type');
            this.listPage = this._params.get('page');

            console.log('FYH-Params-ListPage: ', this.filterMinPrice, this.filterMaxPrice, this.filterBedrooms, this.filterBathrooms, this.filterSqFeet, this.filterLot, this.filterType);

            // location/findYourHome/{state}/{city}/{priceLowerBound}/{priceUpperBound}/{type}/{bedrooms}/{bathrooms}/{squareFeet}/{lotSize}/{limit}/{page}
            // types: Townhouse, Condominium, Apartment, and Single Family Attached
            // last 5 optional, pass string 'empty' if no option selected
            this.listViewData.getFindYourHome(this.filterState, this.filterCity, this.filterMinPrice, this.filterMaxPrice, this.filterType, this.filterBedrooms, this.filterBathrooms, this.filterSqFeet, this.filterLot, this.listLimit, this.listPage)
                .subscribe(
                    data => {
                        this.transformData(data);
                        this.setPaginationParams(data);
                        this.setMenuParams();
                    },
                    err => {
                        console.log('Error: Filter List API: ', err);
                        this.isError = true;
                    },
                    () => console.log('FYH Data call success!')

                );
        }

    }

  transformData(data){
    //grab data for the list
    var originalData = data.data;
    var listData = [];
    var carouselData = [];
    var globeFunc = this.globalFunctions;
        //Assign data to send to map component
      this.mapData = data.data;
      var self = this;

      //Determine the index at which the list should start (based on page parameter. ex. page = 2, indexStart = 21)
      var indexStart = ((Number(this.listPage) - 1) * Number(this.listLimit)) + 1;
      // Counter for filter

      originalData.forEach(function(val, i){
          if(val.latitude !== null && val.longitude !== null){
              self.geoExists = true;
          }

        //below are variables that are converted using global functions to a readable state
      val.listPrice = globeFunc.commaSeparateNumber(val.listPrice);
      var formattedDate = moment(val.modificationTimestamp.split(' ')[0], 'YYYY-MM-DD').format("dddd, MMMM Do, YYYY");
          if(val.livingArea === null){
              val.livingArea = "N/A";
          }
      var livingArea = globeFunc.commaSeparateNumber(val.livingArea);
      var newData = {
          img : val.photos[0],
          list_sub : val.propertyType + ": " + val.numBedrooms + " Beds & " + val.numBathrooms + " Baths",
          title : val.addressKey.replace(/-/g, ' '),
          numBed : val.numBedrooms + " Beds ",
          numBath: val.numBathrooms + " Baths ",
          date: formattedDate,
          value: "$"+ val.listPrice,
          listPrice: val.listPrice,
          livingArea: val.livingArea,
          tag: livingArea + ' sqft',
          buttonName: 'View Profile',
          icon: 'fa fa-map-marker',
          location: val.loc + ' - ' + val.postalCode,
          market:'Built in ' + val.yearBuilt,
          rank: (indexStart + i),
          desc: val.listingDescription,
          photos: val.photos,
          totalListings: val.totalListings
      };
      newData['url1'] = "../../Magazine";
      newData['url2'] = {addr:val.addressKey};
      newData['url3'] = "PropertyOverview";

      var carData = {
        heading:'Featured Listing',
        image_url:val.photos[0],
        listing_price: "$"+val.listPrice,
        listing_area: livingArea + " sqft",
        listing_addr1: val.fullStreetAddress + ' ',
        listing_addr2:val.loc + ' ' + val.postalCode,
      };
      carData['url1'] = "../../Magazine";
      carData['url2'] = {addr:val.addressKey};
      carData['url3'] = "PropertyOverview";

      carouselData.push(carData);
      listData.push(newData);
    });//END of forEach

      //Fetch total Listings
      if(listData.length !== 0){
          this.totalListings = this.globalFunctions.commaSeparateNumber(listData[0].totalListings);
          this.listNameDisplay = this.globalFunctions.convertListName(this.listName);
      }

    //set to listData
    this.listData = listData;
    this.carouselData = carouselData;

    //console.log('ListData', this.listData);
    // console.log('carouselData', this.carouselData);
  }//END OF TRANSFORM FUNCTION

  ngOnInit() {
    this.getListView();
  }
}
