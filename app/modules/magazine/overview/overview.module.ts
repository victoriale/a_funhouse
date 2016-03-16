import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams } from 'angular2/router';
import {MagCarouselModule} from "../mag-carousel/mag-carousel.module";
import {MagOverviewModule} from "../mag-overview/mag-overview.module";
import {NavRightComponent} from "../../../components/magazine/mag-nav-right/mag-nav-right.component";

@Component({
    selector: 'overview-module',
    templateUrl: './app/modules/magazine/overview/overview.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagCarouselModule, MagOverviewModule, NavRightComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
})

export class PropertyOverview {
    /*
    pagenum: string;
    id: string;
    constructor(params: RouteParams){
        this.pagenum = params.get('pagenum');
    }
    */
}