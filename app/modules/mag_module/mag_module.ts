import {Component, OnInit, Input} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'mag-module',
    templateUrl: './app/modules/mag_module/mag_module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, ROUTER_DIRECTIVES],
    providers: [],
    inputs:['listing', 'magImg']
})

export class magazineModule {
  module_title:string = "Property Listing Digital Story";
  magImg:string = "./app/public/mag_module_bg.png";
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
