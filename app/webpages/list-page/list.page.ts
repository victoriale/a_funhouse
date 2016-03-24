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

@Component({
    selector: 'List-page',
    templateUrl: './app/webpages/list-page/list.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [PhotoListComponent, ROUTER_DIRECTIVES, DetailedListComponent, ListViewCarousel, DropdownComponent, ListMenuComponent, WidgetModule],
    providers: [listViewPage],
})

export class ListPage {
  carouselData: any = [];
  listData:any = [];
  headerData: any;
  data: any;
  view: string = 'list'; // set to default list view

  listName: string;
  //Filter params for FYH
  filterState: string;
  filterCity: string;
  filterLimit: string;
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
  ngOnChanges(event) {
    if(typeof this.carouselData == 'undefined' || typeof this.listData == 'undefined'){

    }
  }

  getListView() {// GET DATA FROM GLOBAL SERVICE

    // Get listname param to determine which API to call
    this.listName = this._params.get('listname');

    if(this.listName !== "filter") {
        //list/homesAtLeast5YearsOld/KS/Wichita/empty/10/1
        this.listViewData.getListData('homesAtLeast5YearsOld', 'KS', 'Wichita', 10, 1)
            .subscribe(
                data => {this.data = this.transformData(data);},
                err => console.log(err),
                () => console.log('List Page Data call success!')
            );
    }else {
        //Grab params for API call
        this.filterState = this._params.get('state');
        this.filterCity = this._params.get('city');
        this.filterLimit = this._params.get('limit');
        this.filterPage = this._params.get('page');
        this.filterMinPrice = this._params.get('filterMinPrice');
        this.filterMaxPrice = this._params.get('filterMaxPrice');
        this.filterBedrooms = this._params.get('filterBedrooms');
        this.filterBathrooms = this._params.get('filterBathrooms');
        this.filterSqFeet = this._params.get('filterSqFeet');
        this.filterLot = this._params.get('filterLot');
        this.filterType = this._params.get('filterType');

        console.log('FYH-Params-ListPage: ', this.filterMinPrice, this.filterMaxPrice, this.filterBedrooms, this.filterBathrooms, this.filterSqFeet, this.filterLot, this.filterType);

        // location/findYourHome/{state}/{city}/{priceLowerBound}/{priceUpperBound}/{type}/{bedrooms}/{bathrooms}/{squareFeet}/{lotSize}
        // types: Townhouse, Condominium, Apartment, and Single Family Attached
        // last 5 optional, pass string 'empty' if no option selected
        this.listViewData.getFindYourHome(this.filterState, this.filterCity, this.filterMinPrice, this.filterMaxPrice, this.filterType, this.filterBedrooms, this.filterBathrooms, this.filterSqFeet, this.filterLot)
            .subscribe(
                data => {this.data = this.transformData(data);},
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
    originalData.forEach(function(val, i){
      val.listPrice = globeFunc.commaSeparateNumber(val.listPrice);
      var newData = {
          img : val.photos[0],
          list_sub : val.propertyType + ": " + val.numBedrooms + " Beds & " + val.numBathrooms + " Baths",
          title : val.addressKey.replace(/-/g, ' '),
          numBed : val.numBedrooms + " Beds ",
          numBath: val.numBathrooms + " Baths ",
          date: val.modificationTimestamp,
          value: "$"+ val.listPrice,
          tag: val.livingArea + ' sqft',
          buttonName: 'View Profile',
          icon: 'fa fa-map-marker',
          location: val.loc + ' - ' + val.postalCode,
          market:'Built in ' + val.yearBuilt,
          rank: (i+1),
          desc: val.listingDescription,
          photos: val.photos,
      };
      newData['url1'] = "../../Magazine";
      newData['url2'] = {addr:val.addressKey};
      newData['url3'] = "PropertyOverview";
      // newData['url'] = "Home-page";

      var carData = {
        heading:val.addressKey.replace(/-/g, ' '),
        image_url:val.photos[0],
        listing_price: "$"+val.listPrice,
        listing_area:val.livingArea + "sqft",
        listing_addr1:val.modificationTimestamp.split(' ')[0],
        listing_addr2:val.loc + ' - ' + val.postalCode,
      };
      carData['button_url'] = '#';
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

  ngOnInit() {
    this.getListView();
  }
}
