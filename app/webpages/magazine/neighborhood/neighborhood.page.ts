import {Component, OnInit} from 'angular2/core';

import {MagHeaderModule} from "../../../modules/magazine/mag-header/mag-header.module";
import {FooterComponent} from "../../../components/magazine/mag-footer/mag-footer.component";
import {NavRightComponent} from "../../../components/magazine/mag-nav-right/mag-nav-right.component";
import {MagNeighborhoodModule} from "../../../modules/magazine/mag-neighborhood/mag-neighborhood.module";

@Component({
    selector: 'neighborhood-page',
    templateUrl: './app/webpages/magazine/neighborhood/neighborhood.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagHeaderModule, MagNeighborhoodModule, FooterComponent, NavRightComponent],
    providers: [],
})

export class NeighborhoodPage {}