import {Component} from 'angular2/core';
import {Router, RouteData, RouteConfig, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

import {AppComponent} from "../app-layout/app.component"
import {HomePage} from "../webpages/home-page/home.page";
import {PartnerHomePage} from "../webpages/partner-home-page/partner-home-page";
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
    selector: 'app-domain',
    templateUrl: './app/app-domain/app-domain.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AppComponent, PartnerHomePage, HomePage, FooterComponent, HeaderComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    // {
    //     path: '/...',
    //     name: 'Default-home',
    //     component: AppComponent,
    //     useAsDefault: true
    // },
    {
        path: '/:partner_id/...',
        name: 'Partner-home',
        component: AppComponent,
        useAsDefault: true
    }
])

export class AppDomain {
    cityStateLocation: string = "WICHITA_KS";
}
