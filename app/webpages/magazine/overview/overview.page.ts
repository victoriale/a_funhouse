import {Component, OnInit} from 'angular2/core';

import {MagHeaderModule} from "../../../modules/magazine/mag-header/mag-header.module";
import {MagCarouselModule} from "../../../modules/magazine/mag-carousel/mag-carousel.module";
import {MagOverviewModule} from "../../../modules/magazine/mag-overview/mag-overview.module";
import {FooterComponent} from "../../../components/magazine/mag-footer/mag-footer.component";
import {NavRightComponent} from "../../../components/magazine/mag-nav-right/mag-nav-right.component";
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams } from 'angular2/router';

@Component({
    selector: 'overview-page',
    templateUrl: './app/webpages/magazine/overview/overview.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagHeaderModule, MagCarouselModule, MagOverviewModule, FooterComponent, NavRightComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})

export class OverviewPage {
    pagenum: string;
    pagenum = '1';
    //constructor(params: RouteParams){
    //    this.pagenum = params.get('pagenum');
    //}
}