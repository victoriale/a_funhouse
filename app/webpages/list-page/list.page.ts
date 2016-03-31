/**
 * Created by Victoria on 3/8/2016.
 */
import {Component, OnChanges} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';
import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {DetailedListComponent} from '../../components/detailed-list/detailed-list.component';
import {PhotoListComponent} from '../../components/photo-list/photo-list.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";
import {TitleComponent} from '../../components/title/title.component';
import {PaginationFooter} from "../../components/pagination-footer/pagination-footer.component";
import {listViewPage} from '../../global/global-service';
declare var moment: any;
declare var jQuery: any;

@Component({
    selector: 'List-page',
    templateUrl: './app/webpages/list-page/list.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [PhotoListComponent, ROUTER_DIRECTIVES, DetailedListComponent, ListViewCarousel, DropdownComponent, ListMenuComponent, WidgetModule, PaginationFooter],
    providers: [listViewPage],
})

export class ListPage {
    carouselData: any = [];
    listData: any = [];
    headerData: any;
    data: any;
    public view: string = 'list'; // set to default list view
    //Parameters for the pagination footer
    public paginationParameters: Object;

    public listName: string;
    public listState: string;
    public listCity: string;
    public listLimit: string = "20";
    public listPage: string;

    showFilters: boolean = false;

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

    constructor(private _params: RouteParams, private globalFunctions: GlobalFunctions, private listViewData: listViewPage) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    viewType(menu){
        this.view = menu;
    }

    // On Change Call
    ngOnChanges(event){
        if(typeof this.carouselData == 'undefined' || typeof this.listData == 'undefined'){

        }
    }

        setPaginationParams(input) {
            var data = input.data;

            if(this.listName !== 'filter') {
                var listLimit = Number(this.listLimit);
                var pageNumber = Number(this.listPage);
                //Find max amount of pages to send to pagination footer
                var max = Math.ceil(Number(data[0].totalListings) / listLimit);

                this.paginationParameters = {
                    index: pageNumber,
                    max: max,
                    paginationType: 'page',
                    navigationPage: 'List-page',
                    navigationParams: {
                        listname: this.listName,
                        state: this.listState,
                        city: this.listCity
                    },
                    indexKey: 'page'
                };
            }else {
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
                        bedrooms: this.filterBedrooms,
                        bathrooms: this.filterBathrooms,
                        squareFeet: this.filterSqFeet,
                        lotSize: this.filterLot,
                        type: this._params.get('type'),
                        limit: this.listLimit,
                        page: this._params.get('page'),
                    },
                    indexKey: 'page'
                };
            }
            console.log(this.paginationParameters);
        }

  getListView() {// GET DATA FROM GLOBAL SERVICE

    // Get listname param to determine which API to call
    this.listName = this._params.get('listname');

    if(this.listName !== "filter") {
        this.listState = this._params.get('state');
        this.listCity = this._params.get('city');
        this.listPage = this._params.get('page');

        //list/homesAtLeast5YearsOld/KS/Wichita/empty/10/1
        this.listViewData.getListData(this.listName, this.listState, this.listCity, this.listLimit, this.listPage)
            .subscribe(
                data => {
                    this.transformData(data);
                    this.setPaginationParams(data);
                },
                err => console.log(err),
                () => console.log('List Page Data call success!')
            );
    }else {
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
                },
                err => console.log(err),
                () => console.log('FYH Data call success!')
            );
    }

  }

  transformData(data){// TRANSFORM DATA TO PLUG INTO COMPONENTS
    //grab data for the header
    this.headerData = {
        imageURL : './app/public/joyfulhome_house.png',
        smallText1 : data.date,
        smallText2 : ' United States of America',
        heading1 : data.title,
        heading2 : '',
        heading3 : '',
        heading4 : '',
        icon: 'fa fa-map-marker',
        hasHover: true
    };

    //grab data for the list
    var originalData = data.data;
    var listData = [];
    var carouselData = [];
    var globeFunc = this.globalFunctions;

      //Determine the index at which the list should start (based on page parameter. ex. page = 2, indexStart = 21)
      var indexStart = ((Number(this.listPage) - 1) * Number(this.listLimit)) + 1;
      // Counter for filter

      originalData.forEach(function(val, i){

        //below are variables that are converted using global functions to a readable state
      val.listPrice = globeFunc.commaSeparateNumber(val.listPrice);
      var formattedDate = moment(val.modificationTimestamp.split(' ')[0], 'YYYY-MM-DD').format("dddd, MMMM Do, YYYY");
          if(val.livingArea === null) {
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
          tag: livingArea + ' sqft',
          buttonName: 'View Profile',
          icon: 'fa fa-map-marker',
          location: val.loc + ' - ' + val.postalCode,
          market:'Built in ' + val.yearBuilt,
          rank: (indexStart + i),
          desc: val.listingDescription,
          photos: val.photos
      };
      newData['url1'] = "../../Magazine";
      newData['url2'] = {addr:val.addressKey};
      newData['url3'] = "PropertyOverview";

      var carData = {
        heading:'Featured Listing',
        image_url:val.photos[0],
        listing_price: "$"+val.listPrice,
        listing_area: livingArea + " sqft",
        listing_addr1: val.addressKey.replace(/-/g, ' '),
        listing_addr2:val.loc + ' - ' + val.postalCode,
      };
      carData['url1'] = "../../Magazine";
      carData['url2'] = {addr:val.addressKey};
      carData['url3'] = "PropertyOverview";

      carouselData.push(carData);
      listData.push(newData);
    });//END of forEach

    //set to listData
    this.listData = listData;
    this.carouselData = carouselData;

    // console.log('ListData', this.listData);
    // console.log('carouselData', this.carouselData);
  }//END OF TRANSFORM FUNCTION

    // Get selected select value for number bedrooms
    onSelectBedrooms() {
        this.filterBedrooms = jQuery('#select-bedrooms').val();
        this.getListView();
        //console.log(this.filterBedrooms);
    }

    // Get selected select value for number bathrooms
    onSelectBathrooms() {
        this.filterBathrooms = jQuery('#select-bathrooms').val();
        this.getListView();
        //console.log(this.filterBathrooms);
    }

    // Get selected select value for Sq Feet
    onSelectSqFeet() {
        this.filterSqFeet = jQuery('#select-square-feet').val();
        this.getListView();
        //console.log(this.filterSqFeet);
    }

    // Get selected select value for number bathrooms
    onSelectLotSize() {
        this.filterLot = jQuery('#select-lot-size').val();
        this.getListView();
        //console.log(this.filterLot);
    }

  ngOnInit() {
    this.getListView();
      if(this.listName == "filter") {
          this.showFilters = true;
      }

      console.log(this);
  }
}
