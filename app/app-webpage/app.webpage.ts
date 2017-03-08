import {Component, OnInit, Injector, AfterContentChecked} from 'angular2/core';
import {RouteParams, Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy, RouterLink} from 'angular2/router';
import {ProfilePage} from "../webpages/profile-page/profile.page";
import {LocationPage} from "../webpages/location-page/location.page";
import {ListPage} from "../webpages/list-page/list.page";
import {ListOfListsPage} from "../webpages/list-of-lists-page/list-of-lists.page";
import {AmenitiesListPage} from "../webpages/amenities-lists/amenities-lists.page";
import {SchoolListsPage} from "../webpages/school-lists/school-lists.page";
import {HomePage} from "../webpages/home-page/home.page";
import {PartnerHomePage} from "../webpages/partner-home-page/partner-home-page";
import {ComponentPage} from "../webpages/component-page/component.page";
import {AboutUsPage} from "../webpages/aboutus-page/aboutus.page";
import {ErrorPage} from "../webpages/error-page/error-page.page";
import {ContactUsPage} from "../webpages/contactus-page/contactus.page";
import {DisclaimerPage} from "../webpages/disclaimer-page/disclaimer.page";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {HeroComponent} from "../components/hero/hero.component";
import {HeroSearchComponent} from "../components/hero/hero-search/hero-search.component";
import {ExploreTilesComponent} from "../components/explore-tiles/explore-tiles.component";
import {HeroBottomComponent} from "../components/hero/hero-bottom/hero-bottom.component";
import {ExploreButtonComponent} from "../components/buttons/explore-button/explore-button.component";
import {FeatureTilesComponent} from "../components/feature-tiles/feature-tiles.component";
import {DirectoryPage} from "../webpages/directory-page/directory.page";
import {SearchPage} from "../webpages/search-page/search.page";
import {DynamicListPage} from "../webpages/dynamic-list-page/dynamic-list.page";
import {NearByCitiesService} from "../global/geo-location.service";
import {GeoLocation} from "../global/global-service";

import {WebApp} from "../app-layout/app.layout";
import {PartnerHeader} from "../global/global-service";
import {GlobalSettings} from "../global/global-settings";
import {GlobalFunctions} from "../global/global-functions";
import {CityViewPage} from "../webpages/city-view-page/city-view.page";

@Component({
    selector: 'my-app',
    templateUrl: './app/app-webpage/app.webpage.html',

    directives: [PartnerHomePage, RouterOutlet, ProfilePage, HomePage, ExploreButtonComponent, ComponentPage, HeaderComponent, FooterComponent, HeroComponent, HeroSearchComponent, ExploreTilesComponent, HeroBottomComponent, FeatureTilesComponent, ListPage, ListOfListsPage, AmenitiesListPage, ROUTER_DIRECTIVES, DirectoryPage, SchoolListsPage],
    providers: [PartnerHeader, ROUTER_DIRECTIVES, NearByCitiesService, ErrorPage, GeoLocation],
})

@RouteConfig([
    {
       path: '/',
       name: 'Home-page',
       component: HomePage,
       useAsDefault: true,
    },
    {
        path: '/listing/:address',
        name: 'Profile-page',
        component: ProfilePage,
    },
    {
        path: '/location/:loc',
        name: 'Location-page',
        component: LocationPage,
    },
    {
        path: '/location',
        name: 'Empty-Location-page',
        component: LocationPage,
    },
    {
        path: '/:viewType/:listname/:state/:city/page/:page',
        name: 'List-page',
        component: ListPage,
    },
    {
        path: '/:viewType/:listname/:state/page/:page',
        name: 'List-page-state',
        component: ListPage,
    },
    {
        path: '/:viewType/:listname/:state/:city/:priceLowerBound/:priceUpperBound/:type/:bedrooms/:bathrooms/:squareFeet/:lotSize/:limit/:page',
        name: 'List-page-filter',
        component: ListPage,
    },
    {
        path: '/list-of-lists/:state/:city',
        name: 'List-of-lists-page',
        component: ListOfListsPage,
    },
    {
        path: '/list-of-lists/:state',
        name: 'List-of-lists-page-state',
        component: ListOfListsPage,
    },
    {
        path: '/amenities-lists-page/:listname/:state/:city',
        name: 'Amenities-lists-page',
        component: AmenitiesListPage,
    },
    {
        path: '/school-lists-page/:listname/:state/:city',
        name: 'School-lists-page',
        component: SchoolListsPage,
    },
    {
        path: '/component',
        name: 'Component-page',
        component: ComponentPage,
    },
    {
        path: '/aboutus',
        name: 'Aboutus-page',
        component: AboutUsPage,
    },
    {
        path: '/contactus',
        name: 'Contactus-page',
        component: ContactUsPage,
    },
    {
        path: '/disclaimer',
        name: 'Disclaimer-page',
        component: DisclaimerPage,
    },
    //National directory page
    {
        path: '/directory/:listTitle/page/:pageNumber',
        name: 'Directory-page',
        component: DirectoryPage
    },
    //State directory page
    {
        path: '/directory/:state/:listTitle/page/:pageNumber',
        name: 'Directory-page-state',
        component: DirectoryPage
    },
    //City directory page
    {
        path: '/directory/:state/:city/:listTitle/page/:pageNumber',
        name: 'Directory-page-city',
        component: DirectoryPage
    },
    //All Cities directory page
    //Currently Disabled: Currently No known way to pull router name to use this route. (This route conflicts with the Directory-page-state route. We can't differentiate in the code between this route and the state route) Query parameter is used instead for now
    //{
    //    path: '/directory/:state/all-cities/:listTitle/page/:pageNumber',
    //    name: 'Directory-page-all-cities',
    //    component: DirectoryPage
    //},
    //Zipcode directory page
    {
        path: '/directory/:state/:city/:zipcode/:listTitle/page/:pageNumber',
        name: 'Directory-page-zipcode',
        component: DirectoryPage
    },
    {
        path: '/search/:query',
        name: 'Search-page',
        component: SearchPage
    },
    {
        path: '/wlist/:query',
        name: 'Widget-page',
        component: DynamicListPage
    },
    {
        path: '/cityview/:state/:city',
        name: 'City-view-page',
        component: CityViewPage
    },
    {
        path: '/error',
        name: 'Error-page',
        component: ErrorPage
    }
])

export class AppComponent implements OnInit, AfterContentChecked {
    //declare variables to grab potential partner header
    geoData: any;
    public partnerID: string;
    public listTitle: string = 'homes-largest';
    public pageNumber: number = 1;
    public partnerScript:string;
    public cityStateLocation: string;
    public cityLocation: string;
    public stateLocation: string;
    private _activatedRoute: any;
    private partner_script: string;

    private scrollPadding:any = '100px';
    private headerAdjustment:any = '0px';

    public scrollTopPrev: number = 0;
    public scrollMenuUp: boolean = false;
    public headerTransitionAmount: number = 0;
    public pageHeader: any;
    public pageHeaderHeight: number = 0;
    public currentPageHeaderVal: number = 0;

    nearByCities: Object;

    constructor(
        private _injector: Injector,
        private _partnerData: PartnerHeader,
        private _params: RouteParams,
        private route: Router,
        private routeData: RouteData,
        private routerLink: RouterLink,
        private _globalFunctions: GlobalFunctions,
        private _nearByCitiesService: NearByCitiesService,
        private _geoLocation: GeoLocation) {}



    ngOnInit() {
      this.getPartnerData();
      this.getGeoLocation();
    }



    ngAfterContentChecked() {
        this.getHeaderHeight();
    }



    getPartnerData() {
      this.partnerID = GlobalSettings.storedPartnerId();
      this._geoLocation.grabLocation(this.partnerID).subscribe(geo => {
        if(geo['partner_id']){
          GlobalSettings.storedPartnerId(geo['partner_id']);
          this.partnerID = geo['partner_id'];
          this.cityLocation = this._globalFunctions.toTitleCase(decodeURI(geo['city']));
          this.stateLocation = decodeURI(geo['state']);
          this.cityStateLocation = this._globalFunctions.toLowerKebab(this.cityLocation) + '-' + this.stateLocation.toLowerCase();
        } else {
          this.cityLocation = geo['userCity'];
          this.stateLocation = geo['userState'];
          this.cityStateLocation = this._globalFunctions.toLowerKebab(this.cityLocation) + '-' + this.stateLocation.toLowerCase();
        }
        if(geo['partner_script']){
          this.partnerScript = geo['partner_script'];
        }
      },
      err => this.defaultCity()
      );
    }

    getGeoLocation() {
      this._geoLocation.getGeoLocation().subscribe(res => {
        if (res.userCity == null || res.userState == null){
          this.defaultCity();
        } else {
          this.geoData = {
            cityUrl          : this._globalFunctions.toLowerKebab(res.userCity),
            cityNameDisplay  : this._globalFunctions.toTitleCase(res.userCity.replace(/%20/g, ' ')),
            stateNameDisplay : this._globalFunctions.stateToAP(res.userState),
            stateUrl         : this._globalFunctions.toLowerKebab(res.userState),
            stateAPLocation  : this._globalFunctions.stateToAP(res.userState)
          }
        }
      },
      err => this.defaultCity()
      );
    }

    defaultCity() {
        // Set default city and state if geo location call fails
        this.stateLocation = "KS";
        this.cityLocation = "Wichita";
        this.cityStateLocation = this._globalFunctions.toLowerKebab(this.cityLocation) + '-' + this.stateLocation.toLowerCase();
        this.geoData = {
            cityUrl          : "wichita",
            cityNameDisplay  : "Wichita, Ks",
            stateNameDisplay : "Kansas",
            stateUrl         : "ks",
            stateAPLocation  : "Kan."
        }
    }



    // Page is being scrolled
    onScroll(event) {
        var headerBottomBar = document.getElementById('stickyHeader');
        var headerBottomBarHeight = 55;
        var scrollTop = event.srcElement ? event.srcElement.body.scrollTop : document.documentElement.scrollTop; //fallback for firefox scroll events
        var scrollPolarity = scrollTop - this.scrollTopPrev; //determines if user is scrolling up or down
        var headerHeight = this.pageHeaderHeight - headerBottomBarHeight;
        if (scrollPolarity > 0) {
            this.scrollMenuUp = true;
            if (this.headerTransitionAmount >= -headerHeight) {
                this.headerTransitionAmount = this.headerTransitionAmount - scrollPolarity;
                if (this.headerTransitionAmount < -headerHeight) { //if the value doesn't calculate quick enough based on scroll speed set it manually
                    this.headerTransitionAmount = -headerHeight;
                }
            }
        }
        else if (scrollPolarity < 0) {
            this.scrollMenuUp = false;
            this.headerTransitionAmount = 0;
        }
        // fix for 'page overscroll' in safari
        if (scrollTop == 0) {
            this.headerTransitionAmount = 0;
        }
        this.headerAdjustment = this.headerTransitionAmount;
        this.scrollTopPrev = scrollTop; //defines scrollPolarity
    } // onScroll



    getHeaderHeight() {
        var pageHeader = document.getElementById('header_container');
        this.pageHeaderHeight = pageHeader.offsetHeight;
        if ( this.pageHeaderHeight != this.currentPageHeaderVal ) {
            this.scrollPadding = this.pageHeaderHeight;
            this.currentPageHeaderVal = this.pageHeaderHeight;
        }
        return this.pageHeaderHeight;
    } //getHeaderHeight



    /* Navigates to top of page on navigation */
    routerOnDeactivate(){
        window.scrollTo(0,0);
    }
}
