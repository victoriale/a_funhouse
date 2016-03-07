import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy} from 'angular2/router';

import {ProfilePage} from "../webpages/profile-page/profile.page";
import {LocationPage} from "../webpages/location-page/location.page";
import {ListPage} from "../webpages/list-page/list.page";
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
import {RangeSliderComponent} from "../components/range-slider/range-slider.component";

@Component({
    selector: 'my-app',
    templateUrl: './app/app-layout/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ProfilePage, HomePage, ExploreButtonComponent, ComponentPage, HeaderComponent, FooterComponent, HeroComponent, HeroSearchComponent, ExploreTilesComponent, HeroBottomComponent, FeatureTilesComponent, ListPage, RangeSliderComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/',
        name: 'Home-page',
        component: HomePage,
        useAsDefault: true,
    },
    {
        path: '/profile',
        name: 'Profile-page',
        component: ProfilePage,
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
    cityStateLocation: string = "WICHITA_KS";
}
