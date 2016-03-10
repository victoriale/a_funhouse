import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import {ContactModule} from "../../modules/magazine/contact/contact.module";
import {NeighborhoodModule} from "../../modules/magazine/neighborhood/neighborhood.module";
import {OverviewModule} from "../../modules/magazine/overview/overview.module";
import {RecommendationsModule} from "../../modules/magazine/recommendations/recommendations.module";
import {RouteParams} from "angular2/router";
import {MagHeaderModule} from "../../modules/magazine/mag-header/mag-header.module";
import {FooterComponent} from "../../components/magazine/mag-footer/mag-footer.component";

@Component({
    selector: 'magazine-page',
    templateUrl: './app/webpages/magazine/magazine.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ContactModule, NeighborhoodModule, OverviewModule, RecommendationsModule, MagHeaderModule, FooterComponent, ROUTER_DIRECTIVES],
    //providers: [ROUTER_PROVIDERS],
})

@RouteConfig([
    {
        path: '/overview',
        name: 'Overview-module',
        component: OverviewModule,
    },
    {
        path: '/neighborhood',
        name: 'Neighborhood-module',
        component: NeighborhoodModule,
    },
    {
        path: '/recommendations',
        name: 'Recommendation-module',
        component: RecommendationsModule,
    },
    {
        path: '/contact',
        name: 'Contact-module',
        component: ContactModule,
    },
])

export class MagazinePage {
    //address: string;
    //constructor(private _params: RouteParams){
    //    this.address = _params.get('addr');
    //    console.log(this.address);
    //}
}