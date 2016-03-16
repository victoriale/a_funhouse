import {Component, OnInit, Injector} from 'angular2/core';
import {RouteParams, Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';
import {ProfilePage} from "../webpages/profile-page/profile.page";
import {LocationPage} from "../webpages/location-page/location.page";
import {ListPage} from "../webpages/list-page/list.page";
import {ListOfListsPage} from "../webpages/list-of-lists-page/list-of-lists.page";
import {AmenitiesListPage} from "../webpages/amenities-lists/amenities-lists.page";
import {HomePage} from "../webpages/home-page/home.page";
import {ComponentPage} from "../webpages/component-page/component.page";
import {AboutUsPage} from "../webpages/aboutus-page/aboutus.page";
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

import {WebApp} from "../app-layout/app.layout";
import {PartnerHeader} from "../global/global-service";

@Component({
    selector: 'my-app',
    templateUrl: './app/app-webpage/app.webpage.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [RouterOutlet, ProfilePage, HomePage, ExploreButtonComponent, ComponentPage, HeaderComponent, FooterComponent, HeroComponent, HeroSearchComponent, ExploreTilesComponent, HeroBottomComponent, FeatureTilesComponent, ListPage, ListOfListsPage, AmenitiesListPage, ROUTER_DIRECTIVES, DirectoryPage],
    providers: [PartnerHeader, ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
       path: '/',
       name: 'Home-page',
       component: HomePage,
       useAsDefault: true,
    },
    {
        path: '/profile/:address',
        name: 'Profile-page',
        component: ProfilePage,
        // useAsDefault: true,
    },
    {
        path: '/location/:loc',
        name: 'Location-page',
        component: LocationPage,
    },
    {
        path: '/list',
        name: 'List-page',
        component: ListPage,
    },
    {
        path: '/list-of-lists',
        name: 'List-of-lists-page',
        component: ListOfListsPage,
    },
    {
        path: '/amenities-lists-page',
        name: 'Amenities-lists-page',
        component: AmenitiesListPage,
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
    {
        path: '/directory',
        name: 'Directory-page',
        component: DirectoryPage
    }
])

export class AppComponent {

    //declare variables to grab potential partner header
    public partnerID: string;
    public partnerData: Object;
    public partnerScript:string;
    cityStateLocation: string = "Wichita_KS";
    address: string = "503-C-Avenue-Vinton-IA";

    constructor(private _injector: Injector,private _partnerData: PartnerHeader, private _params: RouteParams){
      var parentParams = this._injector.get(WebApp);
      console.log(parentParams);
      if(typeof parentParams.partnerID != 'undefined'){
        this.partnerID = parentParams.partnerID;
      }
    }

    getPartnerHeader(){
      console.log(this);
      this.partnerID = this.partnerID.replace('-','.');
      console.log(this.partnerID);

      this._partnerData.getPartnerData(this.partnerID).subscribe(
          partnerScript => this.partnerData = partnerScript
      );
    }

    ngOnInit(){
      if (this.partnerID != null){
        this.getPartnerHeader();
      }
    }
}
