import {Component, OnInit, OnChanges, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'footer-component',
    templateUrl: './app/components/footer/footer.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['cityLocation', 'stateLocation', 'partnerID'],
    providers: [],
})

export class FooterComponent implements OnInit {

    cityLocation: string;
    stateLocation: string;

    public isMyHouseKit: boolean;
    partnerID: string;
    title: string = "National Real Estate";
    pageNumber: string = "1";
    listTitle: string = "listings-most-recent";
    currentUrl: any;

    ngOnInit() {
        // Get current URL for social sharing
        this.currentUrl = window.location.href;
        console.log('Current URL', this.currentUrl);

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

    states = [
        { "name": "Alabama", "abr": "AL" },
        { "name": "Alaska", "abr": "AK" },
        { "name": "Arizona", "abr": "AZ" },
        { "name": "Arkansas", "abr": "AR" },
        { "name": "California", "abr": "CA" },
        { "name": "Colorado", "abr": "CO" },
        { "name": "Connecticut", "abr": "CT" },
        { "name": "Delaware", "abr": "DE",},
        { "name": "Florida", "abr": "FL" },
        { "name": "Georgia", "abr": "GA" },
        { "name": "Hawaii", "abr": "HI" },
        { "name": "Idaho", "abr": "ID" },
        { "name": "Illinois", "abr": "IL" },
        { "name": "Indiana", "abr": "IN" },
        { "name": "Iowa", "abr": "IA" },
        { "name": "Kansas", "abr": "KS" },
        { "name": "Kentucky", "abr": "KY" },
        { "name": "Louisiana", "abr": "LA" },
        { "name": "Maine", "abr": "ME" },
        { "name": "Maryland", "abr": "MD" },
        { "name": "Massachusetts", "abr": "MA" },
        { "name": "Michigan", "abr": "MI" },
        { "name": "Minnesota", "abr": "MN" },
        { "name": "Mississippi", "abr": "MS" },
        { "name": "Missouri", "abr": "MI" },
        { "name": "Montana", "abr": "MT" },
        { "name": "Nebraska", "abr": "NE" },
        { "name": "Nevada", "abr": "NV" },
        { "name": "New Hampshire", "abr": "NH" },
        { "name": "New Jersey", "abr": "NJ" },
        { "name": "New Mexico", "abr": "NM" },
        { "name": "New York", "abr": "NY" },
        { "name": "North Carolina", "abr": "NC" },
        { "name": "North Dakota", "abr": "ND" },
        { "name": "Ohio", "abr": "OH" },
        { "name": "Oklahoma", "abr": "OK" },
        { "name": "Oregon", "abr": "OR" },
        { "name": "Pennsylvania", "abr": "PA" },
        { "name": "Rhode Island", "abr": "RI" },
        { "name": "South Carolina", "abr": "SC" },
        { "name": "South Dakota", "abr": "SD" },
        { "name": "Tennessee", "abr": "TN" },
        { "name": "Texas", "abr": "TX" },
        { "name": "Utah", "abr": "UT" },
        { "name": "Vermont", "abr": "VT" },
        { "name": "Virginia", "abr": "VA" },
        { "name": "Washington", "abr": "WA" },
        { "name": "West Virginia", "abr": "WV" },
        { "name": "Wisconsin", "abr": "WI" },
        { "name": "Wyoming", "abr": "WY" }
    ];

    cities = [
        { "name": "Atlanta", "state": "GA" },
        { "name": "Austin", "state": "TX" },
        { "name": "Boston", "state": "MA" },
        { "name": "Chicago", "state": "IL" },
        { "name": "Dallas", "state": "TX" },
        { "name": "Detroit", "state": "MI" },
        { "name": "Honolulu", "state": "HI" },
        { "name": "Houston", "state": "TX" },
        { "name": "Los Angeles", "state": "CA" },
        { "name": "Miami", "state": "FL" },
        { "name": "Minneapolis", "state": "MN" },
        { "name": "New York City", "state": "NY" },
        { "name": "Philadelphia", "state": "PA" },
        { "name": "Portland", "state": "OR" },
        { "name": "Sacramento", "state": "CA" },
        { "name": "San Diego", "state": "CA" },
        { "name": "San Francisco", "state": "CA" },
        { "name": "San Jose", "state": "CA" },
        { "name": "Seattle", "state": "WA" },
        { "name": "Washington, D.C", "state": "DC" },
        { "name": "More Cities...", "state": "#" }
    ];

}