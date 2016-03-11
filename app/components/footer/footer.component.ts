import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";

@Component({
    selector: 'footer-component',
    templateUrl: './app/components/footer/footer.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})

export class FooterComponent{
    isMyHouseKit: boolean = false;
    title = "National Real Estate";

    // Get current URL for social sharing
    currentUrl: string = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

    constructor() {
        console.log(this.currentUrl);
    }

    states = [
        { "name": "Alabama", "url": "#" },
        { "name": "Alaska", "url": "#" },
        { "name": "Arizona", "url": "#" },
        { "name": "Arkansas", "url": "#" },
        { "name": "California", "url": "#" },
        { "name": "Colorado", "url": "#" },
        { "name": "Connecticut", "url": "#" },
        { "name": "Delaware", "url": "#" },
        { "name": "Florida", "url": "#" },
        { "name": "Georgia", "url": "#" },
        { "name": "Hawaii", "url": "#" },
        { "name": "Idaho", "url": "#" },
        { "name": "Illinois", "url": "#" },
        { "name": "Indiana", "url": "#" },
        { "name": "Iowa", "url": "#" },
        { "name": "Kansas", "url": "#" },
        { "name": "Kentucky", "url": "#" },
        { "name": "Louisiana", "url": "#" },
        { "name": "Maine", "url": "#" },
        { "name": "Maryland", "url": "#" },
        { "name": "Massachusetts", "url": "#" },
        { "name": "Michigan", "url": "#" },
        { "name": "Minnesota", "url": "#" },
        { "name": "Mississippi", "url": "#" },
        { "name": "Missouri", "url": "#" },
        { "name": "Montana", "url": "#" },
        { "name": "Nebraska", "url": "#" },
        { "name": "Nevada", "url": "#" },
        { "name": "New Hampshire", "url": "#" },
        { "name": "New Jersey", "url": "#" },
        { "name": "New Mexico", "url": "#" },
        { "name": "New York", "url": "#" },
        { "name": "North Carolina", "url": "#" },
        { "name": "North Dakota", "url": "#" },
        { "name": "Ohio", "url": "#" },
        { "name": "Oklahoma", "url": "#" },
        { "name": "Oregon", "url": "#" },
        { "name": "Pennsylvania", "url": "#" },
        { "name": "Rhode Island", "url": "#" },
        { "name": "South Carolina", "url": "#" },
        { "name": "South Dakota", "url": "#" },
        { "name": "Tennessee", "url": "#" },
        { "name": "Texas", "url": "#" },
        { "name": "Utah", "url": "#" },
        { "name": "Vermont", "url": "#" },
        { "name": "Virginia", "url": "#" },
        { "name": "Washington", "url": "#" },
        { "name": "West Virginia", "url": "#" },
        { "name": "Wisconsin", "url": "#" },
        { "name": "Wyoming", "url": "#" }
    ];

    cities = [
        { "name": "Atlanta", "url": "#" },
        { "name": "Austin", "url": "#" },
        { "name": "Boston", "url": "#" },
        { "name": "Chicago", "url": "#" },
        { "name": "Dallas", "url": "#" },
        { "name": "Detroit", "url": "#" },
        { "name": "Honolulu", "url": "#" },
        { "name": "Houston", "url": "#" },
        { "name": "Los Angeles", "url": "#" },
        { "name": "Miami", "url": "#" },
        { "name": "Minneapolis", "url": "#" },
        { "name": "New York City", "url": "#" },
        { "name": "Philadelphia", "url": "#" },
        { "name": "Portland", "url": "#" },
        { "name": "Sacramento", "url": "#" },
        { "name": "San Diego", "url": "#" },
        { "name": "San Francisco", "url": "#" },
        { "name": "San Jose", "url": "#" },
        { "name": "Seattle", "url": "#" },
        { "name": "Washington, D.C", "url": "#" },
        { "name": "More Cities...", "url": "#" }
    ];


}