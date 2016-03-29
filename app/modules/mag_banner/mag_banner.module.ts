import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'mag-banner-module',
    templateUrl: './app/modules/mag_banner/mag_banner.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    inputs:['listing']
})

export class magazineBanner {
  listing:string;
  data: any;

    constructor(
    ) { }

    ngOnInit() {
      this.data = {
        address: this.listing.replace(/-/g, ' '),
        url1: '../../Magazine',
        param: {addr: this.listing},
        url2: 'PropertyOverview',
      }
    }
}
