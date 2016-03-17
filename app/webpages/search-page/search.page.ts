import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {SearchService} from '../../global/search-service';
import {Observable} from "rxjs/Observable";
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
declare var jQuery: any;

@Component({
  selector: 'Search-page',
  templateUrl: './app/webpages/search-page/search.page.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [ROUTER_DIRECTIVES, BackTabComponent],
  providers: [SearchService],
  inputs: ['searchResults', 'showResults']
})

export class SearchPage implements OnInit {
  searchImage: string = "./app/public/Image_Search.png";
  searchResults: any;
  showResults: boolean;
  tab: string = 'address';
  showTotal: number = 0;
  currentTotal: number = 0;
  displayData : {}; //this is what is being inputed into the DOM
  constructor(private _searchService: SearchService) {

  }

  //Function to tell search results component to show when input is focused
  focusResults(event) {
    this.showResults = true;
  }

  //used as a click event on tabs to grab selected tab
  tabTarget(event){
    this.tab = event.target.id;
    var icon = "<i class='fa fa-circle'></i>";
    jQuery('.search-tab').removeClass('active').find('i').removeClass('fa fa-circle');
    jQuery(event.target).addClass('active').find('i').addClass('fa fa-circle');
    this.showCurrentData();
  }

  //will run for every event that triggers, keystroke, click, tab changes and it will updated the page
  showCurrentData(){
    //check to make sure to only run correctly if data is being shown
    if(typeof this.searchResults !== 'undefined'){
      this.displayData = this.searchResults[this.tab];
      this.currentTotal = this.displayData['length'];

      // console.log(this.tab," => ",this.displayData);
      return this.displayData;
    }
  }

  //with the keyup inside the html this function will make a search call on every keystroke
  searchText(event) {
    var input = event.target.value;
    //makes sure the input is not empty and do an unneccesary call
    if(input != ''){
      // console.log('Search page event', input);
      this.searchResults = this._searchService.getSearchResults(input, 'raw')
      .subscribe(
        data => {
          this.searchResults = this.dataModify(data);
          this.showCurrentData();
        }
      )
    }//end if

  }

  //below is for sorting out data


  dataModify(data){
    var address = [];
    var location = [];
    var zipcode = [];
    var total: number = 0;
    var showLimit: number = 10;
    var tab: string;

    //group zipcodes together, routerLink links to city, state
    if(typeof data.zipcode !=='undefined'){
      data.zipcode.forEach(function(item, index){
        var zip = {
          addr : item.address_key,
          page: 'Location-page',
          params: {loc: item.city + "_" + item.state_or_province},
          display: '[' + item.zipcode + '] - ' + item.city + " " + item.state_or_province,
        };
        zipcode.push(zip);
        total++;
      });
    }

    //group address's together, routerLink goes to Magazine
    if(typeof data.address !=='undefined'){
      data.address.forEach(function(item, index){
        var dataAddr = {
          addr: item.address_key,
          page: 'Profile-page',
          params: {address: item.address_key},
          display: item.address_key + " - " + item.city + " " + item.state_or_province,
        }
        address.push(dataAddr);
        total++;
      });
    }

    //group location together, routerLink goes go location page
    if(typeof data.city !=='undefined'){
      data.city.forEach(function(item, index){
        var locationData = {
          page: 'Location-page',
          params: {loc: item.city + "_" + item.state_or_province},
          display: item.city + " - " + item.state_or_province,
        }
        location.push(locationData);
        total++;
      });
    }
    if(typeof data.location_city !=='undefined'){
      data.location_city.forEach(function(item, index){
        var locationData = {
          page: 'Location-page',
          params: {loc: item.city + "_" + item.state_or_province},
          display: item.city + " - " + item.state_or_province,
        }
        location.push(locationData);
        total++;
      });
    }

    // console.log('ZIP CODE', zipcode);
    // console.log('ADDRESS', address);
    // console.log('LOCATION', location);
    // console.log('TOTAL: ', total);

    this.showTotal = total;

    return {
      'address': address,
      'zipcode': zipcode,
      'location': location,
      'total': total
    };
  }

  ngOnChanges(event) {
    // console.log('search changes', event);
    //this.showResults = true;
    if (typeof event.searchResults !== 'undefined') {
      var currentValue = event.searchResults.currentValue;
      var previousValue = event.searchResults.previousValue;

      if (currentValue === []) {
        // console.log('No results found');
      }

      if (JSON.stringify(currentValue) !== JSON.stringify(previousValue) && this.showResults !== false) {
        this.showResults = true;
      }
    }
  }
  ngOnInit() {
    this.showCurrentData();
  }
}
