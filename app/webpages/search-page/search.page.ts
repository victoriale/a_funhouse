import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {SearchService} from '../../global/search-service';
import {Observable} from "rxjs/Observable";
import {ROUTER_DIRECTIVES, RouteConfig, RouteParams, Router} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";

declare var jQuery: any;

@Component({
  selector: 'Search-page',
  templateUrl: './app/webpages/search-page/search.page.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [ROUTER_DIRECTIVES, BackTabComponent, WidgetModule],
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
  displayData: {}; //this is what is being inputed into the DOM
  dataInput:string;
  constructor(private _searchService: SearchService, private params: RouteParams, private _router:Router) {
    this.loadCall(params['params']['query']);
  }

  //Function to tell search results component to show when input is focused
  focusResults(event) {
    this.showResults = true;
  }

  searchRedirect(){
    this._router.navigate(['Search-page', {query: this.dataInput}]);
  }
  //USES JQUERY not angular2
  //used as a click event on tabs to grab selected tab
  tabTarget(event) {
    this.tab = event.target.id;
    var icon = "<i class='fa fa-circle'></i>";
    jQuery('.search-tab').removeClass('active').find('i').removeClass('fa fa-circle');
    jQuery(event.target).addClass('active').find('i').addClass('fa fa-circle');
    this.showCurrentData();
  }

  //will run for every event that triggers, keystroke, click, tab changes and it will updated the page
  showCurrentData() {
    //check to make sure to only run correctly if data is being shown
    if (typeof this.searchResults[this.tab] !== 'undefined') {
      this.displayData = this.searchResults[this.tab];
      this.currentTotal = this.displayData['length'];
      // console.log(this.tab," => ",this.displayData);
      // console.log("Results => ",this.searchResults);
      return this.displayData;
    }
  }

  //with the keyup inside the html this function will make a search call on every keystroke
  searchText(event) {
    // console.log(event);
    if(event.code == 'Enter'){
      this._router.navigate(['Search-page', {query: this.dataInput}]);
    }
    var input = event.target.value;
    this.dataInput = input;
    //makes sure the input is not empty and do an unneccesary call
    if (input != '') {
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

  //on page load
  loadCall(param) {
    var input = param;
    // console.log('Search page event', input);
    this.searchResults = this._searchService.getSearchResults(input, 'raw')
      .subscribe(
      data => {
        this.searchResults = this.dataModify(data);
        this.showCurrentData();
      }
      )
  }

  //below is for sorting out data

  dataModify(data) {
    var address = [];
    var location = [];
    var zipcode = [];
    var total: number = 0;
    var showLimit: number = 10;
    var tab: string;

    var addrCount = 0;
    var zipCount = 0;
    var locCount = 0;

    //group address's together, routerLink goes to Magazine
    if (typeof data.address !== 'undefined' && data.address !== null) {
      data.address.forEach(function(item, index) {
        var dataAddr = {
          addr: item.address_key,
          page: 'Profile-page',
          params: { address: item.address_key },
          display: item.address_key + " - " + item.city + " " + item.state_or_province,
        }
        address.push(dataAddr);
        addrCount++;
        total++;
      });
    }

    //group city together, routerLink goes go Listing page
    if (typeof data.city !== 'undefined' && data.city !== null) {
      data.city.forEach(function(item, index) {
        var dataAddr = {
          addr: item.address_key,
          page: 'Profile-page',
          params: { address: item.address_key },
          display: item.address_key + " - " + item.city + " " + item.state_or_province,
        }
        address.push(dataAddr);
        addrCount++;
        total++;
      });
    }

    //group zipcodes && location together, routerLink links to city, state
    if (typeof data.zipcode !== 'undefined' && data.zipcode !== null) {
      data.zipcode.forEach(function(item, index) {
        var zip = {
          addr: item.address_key,
          'zipcode': item.zipcode,
          page: 'Profile-page',
          params: { address: item.address_key },
          display: '[' + item.zipcode + '] - ' + item.city + " " + item.state_or_province + " - " + item.address_key,
        };
        zipcode.push(zip);
        zipCount++;
        total++;
      });
    }
    if (typeof data.location_city !== 'undefined' && data.location_city !== null) {
      data.location_city.forEach(function(item, index) {
        var locationData = {
          page: 'Location-page',
          params: { loc: item.city + "_" + item.state_or_province },
          display: item.city + " - " + item.state_or_province,
        }
        location.push(locationData);
        locCount++;
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
