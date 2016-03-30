import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'mag-banner-module',
    templateUrl: './app/modules/mag_banner/mag_banner.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    inputs:['listingData']
})

export class magazineBanner {
  listingData:string;
  showMagazine: boolean = false; //will only show if it is a residential listing
  data: any;

    constructor(
    ) { }

    ngOnInit() {
      var address:string;
      if(this.listingData['propertyType'] == 'Residential'){
        this.showMagazine = true;
      }
      address = this.listingData['address'];
      this.data = {
        address: address.replace(/-/g, ' '),
        url1: '../../Magazine',
        param: {addr: address},
        url2: 'PropertyOverview',
      }
    }
}
