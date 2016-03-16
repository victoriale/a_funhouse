import {Component} from 'angular2/core';
import {HeaderSearchComponent} from "./header-search/header-search.component";
declare var jQuery: any;

@Component({
    selector: 'header-component',
    templateUrl: './app/components/header/header.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderSearchComponent],
    providers: [],
})

export class HeaderComponent{

    public isHomePage: boolean = false;
    public isMyHouseKit: boolean = false;
    directoryVisible: boolean;
    isScrolling: boolean = false;

    constructor() {
       this.directoryVisible = false;
    }

    directoryList = [
        "Most expensive 2 bedroom homes",
        "Most expensive 3 bedroom homes",
        "Most expensive condos",
        "Least expensive homes with waterfront",
        "Largest homes",
        "Most expensive homes",
        "Cheapest Homes",
        "Least expensive homes with a swimming pool",
        "Least expensive brick houses",
        "Homes less than 5 years old",
        "Listings with more than 5 photos",
        "Listings with virtual tours",
        "Homes with sprinkler system and deck",
        "New traditional homes",
        "Homes with vaulted ceiling and security",
        "Listings in wealthiest ZIP code in area",
        "Homes at least 5 years old",
        "Listings with more than 10 photos",
        "Listings with long descriptions",
    ];

    directoryToggle() {
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


        console.log('scroll event', event, scrollTop, this.isScrolling);
    }

}