import {Component, Input, OnInit} from 'angular2/core';

import {moduleHeader} from "../../components/module-header/module-header";
import {moduleFooter} from "../../components/module-footer/module-footer";
import {InfoListComponent} from "../../components/info-list/info-list.component";
import {GlobalFunctions} from "../../global/global-functions";
import {PaginationFooter} from "../../components/pagination-footer/pagination-footer.component";

@Component({
    selector: 'info-list-module',
    templateUrl: './app/modules/infolist/info-list.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, moduleFooter, InfoListComponent, PaginationFooter],
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
            // Format address to Title Case
            if(val.fullStreetAddress === null || val.fullStreetAddress == 'undefined') {
                val.fullStreetAddress = "N/A";
            }else {
                val.fullStreetAddress = self._globalFunctions.toTitleCase(val.fullStreetAddress);
            }
            // Format price
            val.listPrice = self._globalFunctions.commaSeparateNumber(val.listPrice);
            // Check for no data, if data Grab date from date/timestamp
            if(val.listingDate === null || val.listingDate == 'undefined') {
                val.listingDate = "N/A";
            }else {
                val.listingDate = val.listingDate.split(' ')[0];
                // Pull out year
                val.listingDateY = val.listingDate.split('-')[0];
                // Pull out month and day and remove leading zeros
                val.listingDateM = val.listingDate.split('-')[1].replace(/\b0+/g, '');
                val.listingDateD = val.listingDate.split('-')[2].replace(/\b0+/g, '');
                val.listingDate = val.listingDateM + '/' + val.listingDateD + '/' + val.listingDateY;
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
            if(val.numBathrooms == 0 || val.numBathrooms == 'undefined' || val.numBathrooms == null) {
                val.numBathrooms = "N/A";
            }
            if(val.numBedrooms == 0 || val.numBedrooms == 'undefined' || val.numBedrooms == null) {
                val.numBedrooms = "N/A";
            }
            // Button text
            val.buttonName = "View Your Home";
        });
    }

    public paginationParameters: Object = {
        index: 5,
        max: 20,
        paginationType: 'module',

        viewAllPage: 'List-page',
        viewAllParams: {
            listname: 'listingsMostRecent',
            city: 'Wichita',
            state: 'KS',
            page: 1
        }
    };

    testEvent(event){
        console.log('Lutz - Pagination Footer New Index', event);
    }

    ngOnInit() {
        this.module_title = 'Recent Listings for ' + this.locDisplay;

        this.dataTransform();
        console.log(this);
    }
}
