import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {SearchService} from '../../global/search-service';
import {ROUTER_DIRECTIVES, RouteConfig, RouteParams, Router} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {LoadingComponent} from '../../components/loading/loading.component';
import {ErrorComponent} from '../../components/error/error.component';
import {GlobalFunctions} from '../../global/global-functions';

import {Observable} from 'rxjs/Rx';
import {Control} from 'angular2/common';

declare var jQuery: any;

@Component({
  selector: 'Search-page',
  templateUrl: './app/webpages/search-page/search.page.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [ROUTER_DIRECTIVES, BackTabComponent, WidgetModule, LoadingComponent, ErrorComponent],
  providers: [SearchService],
  inputs: ['searchResults', 'showResults']
})

export class SearchPage implements OnInit {
    searchImage: string = "./app/public/Image_Search.png";
    searchResults: any = {};
    showResults: boolean;
    tab: string = 'address';
    showTotal: number = 0;
    currentTotal: number = 0;
    displayData: {}; //this is what is being inputed into the DOM
    dataInput:string;

    //resultsFound determines if results page should be shown (through ngIfs)
    public resultsFound: boolean = false;
    //isError determines if error message should be displayed
    public isError: boolean = false;
    public term: any = new Control();
    httpSubscription: any;

    constructor(private _searchService: SearchService, private params: RouteParams, private _router:Router, private globalFunctions: GlobalFunctions) {
        var query = this.params.get('query');
        if(query !== null) {
            this.loadCall(query);
        }

        //Function chain to pull api data for search
        //.debounceTime - only fire following function calls after 400 milliseconds after user input is done
        //.distinctUntilChanged - Ensures that api is not hit twice with the same parameters. This could happen if a person types 'car' in the input -> gets a result -> types 'cart' -> backspaces to 'car' (before the debounce time), the previous parameter was zoo and the new parameter hasnt changed therefore no new api call is needed
        //.switchMap - Ensures that api calls are in order. If a new api call is fired before the previous call finishes, the previous call is cancelled. Also in this case if the input is of length 0 then the api call is ignored and undefined is passed to search results
        //.subscribe - Assign result data to variable
        this.httpSubscription = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap((term: string) => term.length > 0 ? this._searchService.getSearchResults(term, 'raw') : Observable.of(undefined))
            .subscribe(
                data => {
                    if(typeof data !== 'undefined'){
                        this.searchResults = this.dataModify(data);
                        this.showCurrentData();
                    }
                },
                err => {
                    console.log('Error - Search Page API: ', err);
                    this.isError = true;
                }
            )
    }

    //Function to tell search results component to show when input is focused
    focusResults(event) {
        this.showResults = true;
    }

    //Unused
    searchRedirect(){
        //this._router.navigate(['Search-page', {query: this.dataInput}]);
    }

    //USES JQUERY not angular2
    //used as a click event on tabs to grab selected tab
    tabTarget(event) {
        this.tab = event.target.id;
        jQuery('.search-tab').removeClass('active').find('i').removeClass('fa fa-circle');
        jQuery(event.target).addClass('active').find('i').addClass('fa fa-circle');
        this.showCurrentData();
    }

    //will run for every event that triggers, keystroke, click, tab changes and it will updated the page
    showCurrentData() {
        //check to make sure to only run correctly if data is being shown
        if (typeof this.searchResults !== 'undefined' && typeof this.searchResults[this.tab] !== 'undefined') {
            this.displayData = this.searchResults[this.tab];
            this.currentTotal = this.displayData['length'];
            return this.displayData;
        }
    }

    onSubmit(event){
        var value = this.term._value;
        if(typeof value === 'undefined' || value === ''){
            return false;
        }

        value = encodeURIComponent(value);

        //Cancel current http request
        this.httpSubscription.unsubscribe();
        //Navigate to search page with query string
        this._router.navigate(['Search-page', {query: value}]);
    }

    //with the keyup inside the html this function will make a search call on every keystroke
    //Unused - replaced with ngFormControl
    searchText(event) {
        //// console.log(event);
        //if(event.code == 'Enter'){
        //  this._router.navigate(['Search-page', {query: this.dataInput}]);
        //}
        //var input = event.target.value;
        //this.dataInput = input;
        ////makes sure the input is not empty and do an unneccesary call
        //if (input != '') {
        //  // console.log('Search page event', input);
        //  this.searchResults = this._searchService.getSearchResults(input, 'raw')
        //    .subscribe(
        //    data => {
        //      this.searchResults = this.dataModify(data);
        //      this.showCurrentData();
        //    }
        //    )
        // }//end if
    }

    //on page load
    loadCall(param) {
        var input = decodeURIComponent(param);
        this.term.updateValue(input);
        this.searchResults = this._searchService.getSearchResults(input, 'raw')
            .subscribe(
                data => {
                    this.searchResults = this.dataModify(data);
                    this.showCurrentData();
                    this.resultsFound = true;
                },
                err => {
                    console.log('Error: On Load Search Page API', err);
                    this.isError = true;
                }
            )
    }

    //below is for sorting out data

  dataModify(data) {
    var address = [];
    var location = [];
    var zipcode = [];
    var total: number = 0;

    var addrCount = 0;
    var zipCount = 0;
    var locCount = 0;

      var self = this;

    //group address's together, routerLink goes to Magazine
    if (typeof data.address !== 'undefined' && data.address !== null) {
      data.address.forEach(function(item, index) {
          var fullAddress = item.address_key.split('-');
          var tempArr = fullAddress.splice(-fullAddress.length, fullAddress.length - 2);
          var parsedAddress = tempArr.join(' ');

          var params: any = {};

          if(item.property_type === 'Residential'){
              var page = '../../Magazine';
              params.addr = item.address_key;
          }else{
              var page = 'Profile-page';
              params.address = item.address_key;
          }

          var dataAddr = {
              addr: item.address_key,
              page: page,
              params: params,
              display: self.globalFunctions.toTitleCase(parsedAddress) + " - " + item.city + ", " + item.state_or_province,
          };
        address.push(dataAddr);
        addrCount++;
        total++;
      });
    }

    //group city together, routerLink goes go Listing page
    if (typeof data.city !== 'undefined' && data.city !== null) {
      data.city.forEach(function(item, index) {
        for(var obj in item){
          if(item[obj] == null || typeof item[obj] == 'undefined'){
            item[obj] = 'N/A';
          }
        }
          var fullAddress = item.address_key.split('-');
          var tempArr = fullAddress.splice(-fullAddress.length, fullAddress.length - 2);
          var parsedAddress = tempArr.join(' ');

          var params: any = {};

          if(item.property_type === 'Residential'){
              var page = '../../Magazine';
              params.addr = item.address_key;
          }else{
              var page = 'Profile-page';
              params.address = item.address_key;
          }

          var dataAddr = {
            addr: item.address_key,
            page: page,
            params: params,
            display: self.globalFunctions.toTitleCase(parsedAddress) + " - " + self.globalFunctions.toTitleCase(item.city) + ", " + item.state_or_province,
          };
          address.push(dataAddr);
          addrCount++;
          total++;
      });
    }

    //group zipcodes && location together, routerLink links to city, state
    if (typeof data.zipcode !== 'undefined' && data.zipcode !== null) {
      data.zipcode.forEach(function(item, index) {
          if(typeof item.city === 'undefined' || item.city === null){
              return false;
          }

          var zip = {
            addr: item.address_key,
            'zipcode': item.zipcode,
            page: '../../Magazine',
            params: { addr: item.address_key },
            display: '[' + item.zipcode + '] - ' + self.globalFunctions.toTitleCase(item.city) + " " + item.state_or_province + " - " + item.address_key,
          };
          zipcode.push(zip);
          zipCount++;
          total++;
      });
    }

    if (typeof data.location_city !== 'undefined' && data.location_city !== null) {
      data.location_city.forEach(function(item, index) {
          if(typeof item.city === 'undefined' || item.city === null){
              return false;
          }

          var locationData = {
            page: 'Location-page',
            params: { loc: item.city + "_" + item.state_or_province },
            display: self.globalFunctions.toTitleCase(item.city) + " - " + item.state_or_province,
          };
          location.push(locationData);
          locCount++;
          total++;
      });
    }

    if(total == 1){
      if(zipcode.length == 1){
        this._router.navigate([zipcode[0].page, zipcode[0].params])
      }
      if(address.length == 1){
        this._router.navigate([address[0].page, address[0].params])
      }
      if(location.length == 1){
        this._router.navigate([location[0].page, location[0].params])
      }
    }

    this.showTotal = total;

    return {
      'address': address,
      'zipcode': zipcode,
      'location': location,
      'addrCount': addrCount,
      'zipCount': zipCount,
      'locCount': locCount,
      'total': total
    };
  }

    ngOnInit() {
        this.showCurrentData();
    }
}
