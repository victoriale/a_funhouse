import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';
import {GlobalFunctions} from '../../global/global-functions';
import {DirectoryService} from '../../global/directory.service';

@Component({
    selector: 'Directory-page',
    templateUrl: './app/webpages/directory-page/directory.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [DirectoryService],
})

export class DirectoryPage {
    public navigationLinks: Array<Object>;
    public listingItems: Array<Object>;

    public listingsLimit: number = 20;
    //linkTitle determines title of the link navigation section
    //linkListDisplayed determines if the link navigation section is displayed at all
    public linkTitle: string;
    public linkListDisplayed: boolean;
    //displayListTitle is the list title without hyphens
    public displayListTitle: string;
    //Parameters
    public paramListTitle: string;
    public paramPageNumber: string;
    public paramState: string;
    public paramCity: string;
    public paramZipcode: string;
    //Variable to determine what type of directory page is displaying
    public pageType: string;
    //fullState is the full name for the state parameter defined in the url
    public fullState: string;
    //pageName is the name of the route
    //nextParams are parameters used by the next buttons
    //backParams are parameters used by the back buttons
    public pageName: string;
    public nextParams: Object;
    public backParams: Object;
    //rangeDisplay is what results range is displayed (ex. 1-20)
    public rangeDisplay: string;
    //totalListings number amount of listings that are available based on parameters
    //totalListingsDisplayed display value (with commas) of total listings amount
    public totalListings: number;
    public totalListingsDisplayed: string;
    //Determines if more cities link should be displayed
    public moreCitiesAvailable: boolean = false;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions, private _directoryService: DirectoryService){//Grab static parameters
        router.subscribe(
            url => {
                router.recognize(url).then(instruction => console.log('Lutz - page', instruction))
            }
        );
        this.paramListTitle = this._params.get('listTitle');
        this.paramPageNumber = this._params.get('pageNumber');
        //Determine what type of page the directory is display (options are national, state city, or zipcode)
        if(this._params.get('zipcode') !== null){
            this.pageType = 'zipcode';
            //Grab dynamic parameters
            this.paramState = this._params.get('state');
            this.paramCity = this._params.get('city');
            this.paramZipcode = this._params.get('zipcode');
        }else if(this._params.get('city') !== null){
            this.pageType = 'city';
            //Grab dynamic parameters
            this.paramState = this._params.get('state');
            this.paramCity = this._params.get('city');
        }else if(this._params.get('state') !== null){
            this.pageType = 'state';
            //Grab dynamic parameters
            this.paramState = this._params.get('state');
        }else{
            this.pageType = 'national';
        }
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    //Function to set static data on the page
    setStaticData(){
        //If state parameter is not undefined, get the full state name
        if(typeof this.paramState !== 'undefined'){
            this.fullState = this.globalFunctions.fullstate(this.paramState);
        }
        //Get readable list title
        this.displayListTitle = this.paramListTitle.replace(/-/g, ' ');

        switch(this.pageType){
            case 'national':
                this.linkTitle = 'State Sub Directory';
                this.linkListDisplayed = true;
                this.pageName = 'Directory-page';
                break;
            case 'state':
                this.linkTitle = 'City Sub Directory';
                this.linkListDisplayed = true;
                this.pageName = 'Directory-page-state';
                break;
            case 'city':
                //No link list displayed
                this.linkTitle = '';
                this.linkListDisplayed = false;
                this.pageName = 'Directory-page-city';
                break;
            case 'zipcode':
                //No link list displayed
                this.linkTitle = '';
                this.linkListDisplayed = false;
                this.pageName = 'Directory-page-zipcode';
                break;
        }
    }

    //Function get data from api calls
    getDirectoryData(){
        var self = this;

        //Make data calls here
        switch(this.pageType){
            case 'national':
                //Make data calls for national directory page
                this._directoryService.getStateList()
                    .subscribe(
                        data => {
                            var navigationArray = [];

                            this.totalListings = Number(data.totalListings);
                            this.totalListingsDisplayed = this.globalFunctions.commaSeparateNumber(this.totalListings);

                            this.getPaginationParameters();

                            //Build states array for navigation links
                            data.states.forEach(function(item, index){
                                navigationArray.push({
                                    title: self.globalFunctions.fullstate(item),
                                    page: 'Directory-page-state',
                                    params: {
                                        state: item,
                                        listTitle: self.paramListTitle,
                                        pageNumber: 1
                                    }
                                })
                            });

                            self.navigationLinks = navigationArray;
                        }
                    );

                this._directoryService.getDirectoryData(this.paramPageNumber, this.paramListTitle, null, null, null)
                    .subscribe(
                        data => {
                            this.listingItems = this.formatList(data);
                        }
                    );

                //Build back and next button parameters
                this.nextParams = {
                    listTitle: this.paramListTitle,
                    pageNumber: Number(this.paramPageNumber) + 1
                };
                break;
            case 'state':
                //Make data calls for state directory page
                this._directoryService.getCityList(this.paramState)
                    .subscribe(
                        data => {
                            var navigationArray = [];

                            this.totalListings = Number(data.totalListings);

                            //If there are 26 cities returned (There are more than 25 cities) display more cities link
                            if(data.cities.length === 26){
                                this.moreCitiesAvailable = true;
                            }

                            //Build cities array for navigation links
                            data.cities.forEach(function(item, index){
                                navigationArray.push({
                                    title: item,
                                    page: 'Directory-page-city',
                                    params : {
                                        state: self.paramState,
                                        city: item,
                                        listTitle: self.paramListTitle,
                                        pageNumber: 1
                                    }
                                })
                            });

                            self.navigationLinks = navigationArray;
                        }
                    );

                this._directoryService.getDirectoryData(this.paramPageNumber, this.paramListTitle, this.paramState, null, null)
                    .subscribe(
                        data => {
                            this.listingItems = this.formatList(data);
                        }
                    );

                //Build back and next button parameters
                this.nextParams = {
                    state: this.paramState,
                    listTitle: this.paramListTitle,
                    pageNumber: Number(this.paramPageNumber) + 1
                };
                break;
            case 'city':
                //Make data call for city directory page
                this._directoryService.getDirectoryData(this.paramPageNumber, this.paramListTitle, this.paramState, this.paramCity, null)
                    .subscribe(
                        data => {
                            this.listingItems = this.formatList(data);
                        }
                    );

                //Build back and next button parameters
                this.nextParams = {
                    state: this.paramState,
                    city: this.paramCity,
                    listTitle: this.paramListTitle,
                    pageNumber: Number(this.paramPageNumber) + 1
                };
                break;
            case 'zipcode':
                //Make data call for zipcode directory page
                this._directoryService.getDirectoryData(this.paramPageNumber, this.paramListTitle, this.paramState, this.paramCity, this.paramZipcode)
                    .subscribe(
                        data => {
                            this.listingItems = this.formatList(data);
                        }
                    );

                //Build back and next button parameters
                this.nextParams = {
                    state: this.paramState,
                    city: this.paramCity,
                    zipcode: this.paramZipcode,
                    listTitle: this.paramListTitle,
                    pageNumber: Number(this.paramPageNumber) + 1
                };
                break;
        }
    }

    //Function to format list data sent from the api for display
    formatList(data){
        var self = this;

        var returnArray = [];
        //If input is empty exit function
        if(data.length === 0){
            return data;
        }

        data.forEach(function(item, index){
            var listing = {};

            listing['lastUpdated'] = item.listingDate === null ? null : 'Last Updated: ' + item.listingDate;
            listing['addressKey'] = item.addressKey;
            listing['address'] = item.fullStreetAddress;
            listing['city'] = item.city;
            listing['state'] = item.stateOrProvince;
            listing['zipcode'] = item.postalCode;
            listing['squareFeet'] = item.livingArea === null ? null : self.globalFunctions.commaSeparateNumber(item.livingArea) + ' sq. ft';

            if(item.numBedrooms === null || item.numBedrooms === '0'){
                listing['bedrooms'] = null;
            }else if(item.numBedrooms === '1'){
                listing['bedrooms'] = '1 Bedroom';
            }else{
                listing['bedrooms'] = item.numBedrooms + ' Bedrooms';
            }

            if(item.numBathrooms === null || item.numBathrooms === '0'){
                listing['bathrooms'] = null;
            }else if(item.numBathrooms === '1'){
                listing['bathrooms'] = '1 Bathroom';
            }else{
                listing['bathrooms'] = item.numBedrooms + ' Bathrooms';
            }

            returnArray.push(listing);
        });

        //console.log('Lutz - Directory return array', returnArray);

        return returnArray;
    }

    //Function to determine pagination parameters
    getPaginationParameters(){
        var pageNum = Number(this.paramPageNumber);

        if(pageNum * this.listingsLimit <= this.totalListings){
            this.rangeDisplay = ((pageNum - 1) * this.listingsLimit + 1) + '-' + (pageNum * this.listingsLimit);
        }else{
            this.rangeDisplay = ((pageNum - 1) * this.listingsLimit + 1) + '-' + (this.totalListings);
        }
    }

    ngOnInit(){
        this.setStaticData();
        this.getDirectoryData();
    }
}