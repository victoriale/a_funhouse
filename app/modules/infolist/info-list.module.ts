import {Component, Input, OnInit} from 'angular2/core';

import {moduleHeader} from "../../components/module-header/module-header";
import {moduleFooter} from "../../components/module-footer/module-footer";
import {InfoListComponent} from "../../components/info-list/info-list.component";
import {GlobalFunctions} from "../../global/global-functions";

@Component({
    selector: 'info-list-module',
    templateUrl: './app/modules/infolist/info-list.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, moduleFooter, InfoListComponent],
    inputs: ['module_title', 'recentListingsData', 'locDisplay'],
    providers: [],
})

export class InfoListModule implements OnInit {
    module_title: string;
    infoList: any;
    recentListingsData: any;
    locDisplay: string;

    constructor(private _globalFunctions: GlobalFunctions){}

    dataTransform() {
        this.infoList = this.recentListingsData;
        var self = this;
        var counter = 1;
        this.recentListingsData.forEach(function(val) {
            // Format price
            val.list_price = self._globalFunctions.commaSeparateNumber(val.list_price);
            // Check for null, Grab date from date/timestamp
            if(val.listing_date === null || val.listing_date == 'undefined') {
                val.listing_date = "N/A";
            }else {
                val.listing_date = val.listing_date.split(' ')[0];
                // Pull out year
                val.listing_date_y = val.listing_date.split('-')[0];
                // Pull out month and day and remove leading zeros
                val.listing_date_m = val.listing_date.split('-')[1].replace(/\b0+/g, '');
                val.listing_date_d = val.listing_date.split('-')[2].replace(/\b0+/g, '');
                val.listing_date = val.listing_date_m + '/' + val.listing_date_d + '/' + val.listing_date_y;
            }
            // Counter for rank #
            val.counter = counter++;
            // Check if even or odd for BG color class
            if(counter % 2 == 0) {
                val.bgClass = "even";
            }else{
                val.bgClass = "odd";
            }
            // Check for no photos
            if(val.photos.length <= 0) {
                val.photos[0] = "app/public/no_photo_images/House_1.png";
            }
            // Check for 0's on # beds and # bath, display N/A's
            if(val.num_bathrooms == 0 || val.num_bathrooms == 'undefined' || val.num_bathrooms == null) {
                val.num_bathrooms = "N/A";
            }
            if(val.num_bedrooms == 0 || val.num_bedrooms == 'undefined' || val.num_bedrooms == null) {
                val.num_bedrooms = "N/A";
            }
            // Button text
            val.buttonName = "View Your Home";
        });
    }

    ngOnInit() {
        this.module_title = 'Recent Listings for ' + this.locDisplay;

        this.dataTransform();
        console.log(this);
    }
}
