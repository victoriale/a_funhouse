import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {ProfilePage} from "../webpages/profile-page/profile.page";
import {LocationPage} from "../webpages/location-page/location.page";
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

@Component({
    selector: 'my-app',
    templateUrl: './app/app-layout/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ProfilePage, HomePage, ExploreButtonComponent, ComponentPage, HeaderComponent, FooterComponent, HeroComponent, HeroSearchComponent, ExploreTilesComponent, HeroBottomComponent, FeatureTilesComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home-page',
        component: HomePage,
        useAsDefault: true,
    },
    //{
    //    // Redirects all unrecognized url's to home page
    //    path: '/**',
    //    redirectTo: ['Home-page'],
    //},
    {
        path: '/profile',
        name: 'Profile-page',
        component: ProfilePage,
    },
    {
        path: '/location',
        name: 'Location-page',
        component: LocationPage,
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
    }
])

export class AppComponent {

    constructor(public router: Router){
        console.log('RN', this.router);
    }
}
