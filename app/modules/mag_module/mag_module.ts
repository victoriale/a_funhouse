import {Component, OnInit, Input} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {GlobalFunctions} from "../../global/global-functions";

@Component({
    selector: 'mag-module',
    templateUrl: './app/modules/mag_module/mag_module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, ROUTER_DIRECTIVES],
    providers: [],
    inputs:['listingData', 'magImg']
})

export class magazineModule {
  module_title:string = "Property Listing Digital Story";
  magImg:string = "./app/public/mag_module_bg.png";
  listingData:string;
  showMagazine: boolean = false; //will only show if it is a residential listing
  data: any;

    constructor(private globalFunctions: GlobalFunctions) { }

    ngOnInit() {
      var address:string;
      if(this.listingData['propertyType'] === "Residential"){
        this.showMagazine = true;
      }
      var globeFunc = this.globalFunctions;
      this.magImg = this.listingData['listingImage'];
      address = this.listingData['paramAddress'];
      this.data = {
        address: globeFunc.toTitleCase(address.replace(/-/g, ' ')),
        url1: '../../Magazine',
        param: {addr: address},
        url2: 'PropertyOverview',
      }
    }
}
