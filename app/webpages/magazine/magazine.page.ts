import {Component, OnInit} from 'angular2/core';

import {MagHeaderModule} from "../../modules/magazine/mag-header/mag-header.module";
import {MagCarouselModule} from "../../modules/magazine/mag-carousel/mag-carousel.module";
import {MagOverviewModule} from "../../modules/magazine/mag-overview/mag-overview.module";
import {FooterComponent} from "../../components/magazine/mag-footer/mag-footer.component";
import {NavRightComponent} from "../../components/magazine/mag-nav-right/mag-nav-right.component";

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/magazine/magazine.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagHeaderModule, MagCarouselModule, MagOverviewModule, FooterComponent, NavRightComponent],
    providers: [],
})

export class MagazinePage{

}