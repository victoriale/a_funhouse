import {Component, Input, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from "angular2/router";

import {HeaderSearchComponent} from "./header-search/header-search.component";
import {GlobalSettings} from "../../global/global-settings";
declare var jQuery: any;
declare var stButtons: any;
@Component({
    selector: 'header-component',
    templateUrl: './app/components/header/header.component.html',

    directives: [HeaderSearchComponent, ROUTER_DIRECTIVES],
    providers: [],
    inputs: ['partnerID', 'cityStateLocation'],
})

export class HeaderComponent implements OnInit{

    public isHomePage;
    public isMyHouseKit;
    partnerID: string;
    cityStateLocation: string;
    directoryVisible: boolean;
    isScrolling: boolean;
    pageNum: string = "1";
    curRoute: any;
    routeSub: any;
    partnerUrl: string;
    isSubdomain: boolean;

    constructor(public router: Router) {
       this.directoryVisible = false;

        this.router.root
            .subscribe(
                route => {
                    this.curRoute = route;
                    var partnerID = this.curRoute.split('/');
                    var hostname = window.location.hostname;
                    var partnerIdExists = partnerID[0] != '' ? true : false;
                    this.isSubdomain = GlobalSettings.getHomeInfo().isSubdomainPartner;

                    var myhousekit = /myhousekit/.test(hostname) || /localhost/.test(hostname);
                    //var myhousekit = /localhost/.test(hostname); //used for testing locally
                    // Check for subdomain
                    if(this.isSubdomain){
                      this.isMyHouseKit = true;
                      this.partnerUrl = '/';
                    // Checks if partner ID exists
                    }else if (!partnerIdExists){
                      this.partnerID = null;
                      this.isMyHouseKit = false;
                    } else {
                      this.partnerID = partnerID[0];
                      this.isMyHouseKit = true;
                      this.partnerUrl = '/'+this.partnerID+'/';
                    }

                    // Check to make sure if home page is being displayed
                    if( (partnerIdExists && myhousekit && partnerID.length == 1) || (partnerID.length == 1 && this.isSubdomain) ){
                      this.isHomePage = true;
                    }else if(!partnerIdExists && partnerID.length == 1){
                      this.isHomePage = true;
                    }else{
                      this.isHomePage = false;
                    }
                }
            )
    }

    directoryList = [
        { "listName": "Most expensive 2 bedroom homes", "listUrl": "homes-with-2-bedrooms-most-expensive" },
        { "listName": "Most expensive 3 bedroom homes", "listUrl": "homes-with-3-bedrooms-most-expensive" },
        { "listName": "Most expensive condos", "listUrl": "condos-most-expensive" },
        { "listName": "Least expensive homes with waterfront", "listUrl": "homes-with-waterfront-least-expensive" },
        { "listName": "Largest homes", "listUrl": "homes-largest" },
        { "listName": "Most expensive homes", "listUrl": "homes-most-expensive" },
        { "listName": "Least expensive homes", "listUrl": "homes-least-expensive" },
        { "listName": "Least expensive homes with a swimming pool", "listUrl": "homes-with-pool-least-expensive" },
        { "listName": "Least expensive brick houses", "listUrl": "homes-brick-least-expensive" },
        { "listName": "Homes less than 5 years old", "listUrl": "homes-less-than-5-years-old" },
        { "listName": "Listings with more than 5 photos", "listUrl": "listings-with-more-than-5-photos" },
        { "listName": "Homes with sprinkler system and deck", "listUrl": "homes-with-sprinkler-and-deck" },
        { "listName": "New traditional homes", "listUrl": "homes-new-traditional" },
        { "listName": "Homes with vaulted ceiling and security", "listUrl": "homes-with-vaulted-ceilings-and-security-system" },
        { "listName": "Homes at least 5 years old", "listUrl": "homes-at-least-5-years-old" },
        { "listName": "Listings with more than 10 photos", "listUrl": "listings-with-more-than-10-photos" },
        { "listName": "Listings with long descriptions", "listUrl": "listings-with-long-descriptions" }
    ];

    directoryToggle() {
        this.directoryVisible = !this.directoryVisible;
    }

    directoryClick() {
        this.directoryVisible = !this.directoryVisible;
    }

    // Page is being scrolled
    onScroll(event) {
        var scrollTop = jQuery(window).scrollTop();
        if ((55) > scrollTop) {
            this.isScrolling = false;
        }else{
            this.isScrolling = true;
        }
       //console.log('scroll event', event, scrollTop, this.isScrolling);
    }

    ngOnInit() {
    }
    locateShareThis() {
      stButtons.locateElements();
    }
}
