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
    public isMyHouseKit: boolean;
    partnerID: string;
    directoryVisible: boolean;
    isScrolling: boolean;
    pageNum: string = "1";
    curRoute: any;

    constructor(public router: Router) {
       this.directoryVisible = false;

        this.router.root
            .subscribe(
                route => {
                    this.curRoute = route;
                    //is blank and partner=true
                    if(this.curRoute == "/home"){
                        this.isHomePage = true;
                    }else if(this.partnerID != null){
                        if(this.curRoute == this.partnerID.replace('.','-') + "/home"){
                            this.isHomePage = true;
                        }else {
                            this.isHomePage = false;
                        }
                    }else {
                        this.isHomePage = false;
                    }
                    console.log('Current Route: ', route, 'isHomepage:', this.isHomePage, 'PID', this.partnerID)
                }
            )
    }

    directoryList = [
        { "listName": "Most expensive 2 bedroom homes", "listUrl": "Most-expensive-2-bedroom-homes" },
        { "listName": "Most expensive 3 bedroom homes", "listUrl": "Most-expensive-3-bedroom-homes" },
        { "listName": "Most expensive condos", "listUrl": "Most-expensive-condos" },
        { "listName": "Least expensive homes with waterfront", "listUrl": "Least-expensive-homes-with-waterfront" },
        { "listName": "Largest homes", "listUrl": "Largest-homes" },
        { "listName": "Most expensive homes", "listUrl": "Most-expensive-homes" },
        { "listName": "Cheapest Homes", "listUrl": "Cheapest-Homes" },
        { "listName": "Least expensive homes with a swimming pool", "listUrl": "Least-expensive-homes-with-a-swimming-pool" },
        { "listName": "Least expensive brick houses", "listUrl": "Least-expensive-brick-houses" },
        { "listName": "Homes less than 5 years old", "listUrl": "Homes-less-than-5-years-old" },
        { "listName": "Listings with more than 5 photos", "listUrl": "Listings-with-more-than-5-photos" },
        { "listName": "Listings with virtual tours", "listUrl": "Listings-with-virtual-tours" },
        { "listName": "Homes with sprinkler system and deck", "listUrl": "Homes-with-sprinkler-system-and-deck" },
        { "listName": "New traditional homes", "listUrl": "New-traditional-homes" },
        { "listName": "Homes with vaulted ceiling and security", "listUrl": "Homes-with-vaulted-ceiling-and-security" },
        { "listName": "Listings in wealthiest ZIP code in area", "listUrl": "Listings-in-wealthiest-ZIP-code-in-area" },
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
        //check for partner and hide search
        console.log('Partner ID:', this.partnerID);
        if(this.partnerID != null) {
            this.isMyHouseKit = true;
            //console.log('Housekit True');
        }else {
            this.isMyHouseKit = false;
            //console.log('Housekit False');
        }
    }

}