import {Component, OnInit, OnChanges, Input} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {GlobalSettings} from "../../global/global-settings";

declare var jQuery:any;

@Component({
    selector: 'footer-component',
    templateUrl: './app/components/footer/footer.component.html',

    directives: [ROUTER_DIRECTIVES],
    inputs: ['cityLocation', 'stateLocation', 'partnerID', 'geoData'],
    providers: [],
})

export class FooterComponent implements OnInit {

    cityLocation: string;
    stateLocation: string;
    geoData: any;

    public isMyHouseKit: boolean = true;
    public isHomePage: boolean = false;
    partnerID: string;
    title: string = "National Real Estate";
    pageNumber: string = "1";
    listTitle: string = "listings-most-recent";
    currentUrl: any;
    curRoute: any;
    isSubdomain: boolean;

    constructor(public router: Router){
      this.router.root
          .subscribe(
              route => {
                  this.curRoute = route;
                  var partnerID = this.curRoute.split('/');
                  var hostname = window.location.hostname;
                  var partnerIdExists = partnerID[0] != '' ? true : false;
                  this.isSubdomain = GlobalSettings.getHomeInfo().isSubdomainPartner;

                  var myhousekit = /myhousekit/.test(hostname);
                  //var myhousekit = /localhost/.test(hostname); //used for testing locally
                  // Check for subdomain
                  if(this.isSubdomain){
                    this.isMyHouseKit = true;
                  // Checks if partner ID exists
                  }else if (!partnerIdExists){
                    this.partnerID = null;
                    this.isMyHouseKit = false;
                  } else {
                    this.partnerID = partnerID[0];
                    this.isMyHouseKit = true;
                  }

                  // Check to make sure if home page is being displayed
                  if( (partnerIdExists && myhousekit && partnerID.length == 1)  || (partnerID.length == 1 && this.isSubdomain) ){
                    this.isHomePage = true;
                  }else if(!partnerIdExists && partnerID.length == 1){
                    this.isHomePage = true;
                  }else{
                    this.isHomePage = false;
                  }
              }
          )
    }
    ngOnInit() {
        //set min-width to prevent responsiveness
        jQuery('body').css("min-width", "1044px");
        this.cityLocation = this.geoData.cityNameDisplay;
        this.stateLocation = this.geoData.stateUrl.toUpperCase();
        // Get current URL for social sharing
        this.currentUrl = window.location.href;
    }

    states = [
        { "name": "Alabama", "abr": "al" },
        { "name": "Alaska", "abr": "ak" },
        { "name": "Arizona", "abr": "az" },
        { "name": "Arkansas", "abr": "ar" },
        { "name": "California", "abr": "ca" },
        { "name": "Colorado", "abr": "co" },
        { "name": "Connecticut", "abr": "ct" },
        { "name": "Delaware", "abr": "de",},
        { "name": "Florida", "abr": "fl" },
        { "name": "Georgia", "abr": "ga" },
        { "name": "Hawaii", "abr": "hi" },
        { "name": "Idaho", "abr": "id" },
        { "name": "Illinois", "abr": "il" },
        { "name": "Indiana", "abr": "in" },
        { "name": "Iowa", "abr": "ia" },
        { "name": "Kansas", "abr": "ks" },
        { "name": "Kentucky", "abr": "ky" },
        { "name": "Louisiana", "abr": "la" },
        { "name": "Maine", "abr": "me" },
        { "name": "Maryland", "abr": "md" },
        { "name": "Massachusetts", "abr": "ma" },
        { "name": "Michigan", "abr": "mi" },
        { "name": "Minnesota", "abr": "mn" },
        { "name": "Mississippi", "abr": "ms" },
        { "name": "Missouri", "abr": "mo" },
        { "name": "Montana", "abr": "mt" },
        { "name": "Nebraska", "abr": "ne" },
        { "name": "Nevada", "abr": "nv" },
        { "name": "New Hampshire", "abr": "nh" },
        { "name": "New Jersey", "abr": "nj" },
        { "name": "New Mexico", "abr": "nm" },
        { "name": "New York", "abr": "ny" },
        { "name": "North Carolina", "abr": "nc" },
        { "name": "North Dakota", "abr": "nd" },
        { "name": "Ohio", "abr": "oh" },
        { "name": "Oklahoma", "abr": "ok" },
        { "name": "Oregon", "abr": "or" },
        { "name": "Pennsylvania", "abr": "pa" },
        { "name": "Rhode Island", "abr": "ri" },
        { "name": "South Carolina", "abr": "sc" },
        { "name": "South Dakota", "abr": "sd" },
        { "name": "Tennessee", "abr": "tn" },
        { "name": "Texas", "abr": "tx" },
        { "name": "Utah", "abr": "ut" },
        { "name": "Vermont", "abr": "vt" },
        { "name": "Virginia", "abr": "va" },
        { "name": "Washington", "abr": "wa" },
        { "name": "West Virginia", "abr": "wv" },
        { "name": "Wisconsin", "abr": "wi" },
        { "name": "Wyoming", "abr": "wy" }
    ];

    cities = [
        { "name": "Atlanta", nameUrl: "atlanta", "state": "ga" },
        { "name": "Austin", nameUrl: "austin", "state": "tx" },
        { "name": "Boston", nameUrl: "boston", "state": "ma" },
        { "name": "Chicago", nameUrl: "chicago", "state": "il" },
        { "name": "Dallas", nameUrl: "dallas", "state": "tx" },
        { "name": "Detroit", nameUrl: "detroit", "state": "mi" },
        { "name": "Honolulu", nameUrl: "honolulu", "state": "hi" },
        { "name": "Houston", nameUrl: "houston", "state": "tx" },
        { "name": "Los Angeles", nameUrl: "los-angeles", "state": "ca" },
        { "name": "Miami", nameUrl: "miami", "state": "fl" },
        { "name": "Minneapolis", nameUrl: "minneapolis", "state": "mn" },
        { "name": "New York City", nameUrl: "new-york-city", "state": "ny" },
        { "name": "Philadelphia", nameUrl: "philadelphia", "state": "pa" },
        { "name": "Portland", nameUrl: "portland", "state": "or" },
        { "name": "Sacramento", nameUrl: "sacramento", "state": "ca" },
        { "name": "San Diego", nameUrl: "san-diego", "state": "ca" },
        { "name": "San Francisco", nameUrl: "san-francisco", "state": "ca" },
        { "name": "San Jose", nameUrl: "san-jose", "state": "ca" },
        { "name": "Seattle", nameUrl: "seattle", "state": "wa" },
        { "name": "Washington, D.C.", nameUrl: "washington", "state": "dc" }
    ];

}
