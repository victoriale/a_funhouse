import {Component, Input, OnInit} from 'angular2/core';
import {HeaderSearchComponent} from "./header-search/header-search.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router";
declare var jQuery: any;

@Component({
    selector: 'header-component',
    templateUrl: './app/components/header/header.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderSearchComponent, ROUTER_DIRECTIVES],
    providers: [],
    inputs: ['partnerID'],
})

export class HeaderComponent implements OnInit{

    public isHomePage: boolean = false;
    public isMyHouseKit: boolean = true;
    partnerID: string;
    directoryVisible: boolean;
    isScrolling: boolean;
    pageNum: string = "1";
    curRoute: any;

    constructor(public router: Router, private window:Window) {
       this.directoryVisible = false;

        this.router.root
            .subscribe(
                route => {
                    this.curRoute = route;
                    var partnerID = this.curRoute.split('/');
                    var hostname = this.window.location.hostname;
                    var partnerIdExists = partnerID[0] != '' ? true : false;

                    var result = /myhousekit/.test(hostname);
                    //checks if partner ID exists and declare that it is myhousekit
                    if(!partnerIdExists){
                      this.partnerID = null;
                      this.isMyHouseKit = false;
                    }else{
                      this.partnerID = partnerID[0];
                      this.isMyHouseKit = true;
                    }

                    //check to make sure if home page is being displayed
                    if(partnerIdExists && result && partnerID.length == 1){
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
        { "listName": "Most expensive 2 bedroom homes", "listUrl": "Homes-with-2-bedrooms-most-expensive" },
        { "listName": "Most expensive 3 bedroom homes", "listUrl": "Homes-with-3-bedrooms-most-expensive" },
        { "listName": "Most expensive condos", "listUrl": "Condos-most-expensive" },
        { "listName": "Least expensive homes with waterfront", "listUrl": "Homes-with-waterfront-least-expensive" },
        { "listName": "Largest homes", "listUrl": "Homes-largest" },
        { "listName": "Most expensive homes", "listUrl": "Homes-most-expensive" },
        { "listName": "Least Expensive Homes", "listUrl": "Homes-least-expensive" },
        { "listName": "Least expensive homes with a swimming pool", "listUrl": "Homes-with-pool-least-expensive" },
        { "listName": "Least expensive brick houses", "listUrl": "Homes-brick-least-expensive" },
        { "listName": "Homes less than 5 years old", "listUrl": "Homes-less-than-5-years-old" },
        { "listName": "Listings with more than 5 photos", "listUrl": "Listings-with-more-than-5-photos" },
        { "listName": "Homes with sprinkler system and deck", "listUrl": "Homes-with-sprinkler-and-deck" },
        { "listName": "New traditional homes", "listUrl": "Homes-new-traditional" },
        { "listName": "Homes with vaulted ceiling and security", "listUrl": "Homes-with-vaulted-ceilings-and-security-system" },
        { "listName": "Homes at least 5 years old", "listUrl": "Homes-at-least-5-years-old" },
        { "listName": "Listings with more than 10 photos", "listUrl": "Listings-with-more-than-10-photos" },
        { "listName": "Listings with long descriptions", "listUrl": "Listings-with-long-descriptions" }
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
}
