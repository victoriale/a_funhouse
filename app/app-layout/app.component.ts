import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {ProfilePage} from "../webpages/profile-page/profile.page";
import {HomePage} from "../webpages/home-page/home.page";
import {ComponentPage} from "../webpages/component-page/component.page";
import {AboutUsPage} from "../webpages/aboutus-page/aboutus.page";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {HeroComponent} from "../components/hero/hero.component";
import {HeroSearchComponent} from "../components/hero/hero-search/hero-search.component";
import {ExploreTilesComponent} from "../components/explore-tiles/explore-tiles.component";
import {HeroBottomComponent} from "../components/hero/hero-bottom/hero-bottom.component";
@Component({
    selector: 'my-app',
    templateUrl: './app/app-layout/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ProfilePage, HomePage, ComponentPage, HeaderComponent, FooterComponent, HeroComponent, HeroSearchComponent, ExploreTilesComponent, HeroBottomComponent, AboutUsPage, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
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
        path: '/component',
        name: 'Component-page',
        component: ComponentPage,
    },
    {
        path: '/aboutus',
        name: 'Aboutus-page',
        component: AboutUsPage,
    }
])

export class AppComponent { }