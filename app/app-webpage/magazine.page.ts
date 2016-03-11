import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Contact} from "../modules/magazine/contact/contact.module";
import {Neighborhood} from "../modules/magazine/neighborhood/neighborhood.module";
import {PropertyOverview} from "../modules/magazine/overview/overview.module";
import {Recommendations} from "../modules/magazine/recommendations/recommendations.module";
import {RouteParams} from "angular2/router";
import {MagHeaderModule} from "../modules/magazine/mag-header/mag-header.module";
import {FooterComponent} from "../components/magazine/mag-footer/mag-footer.component";

@Component({
    selector: 'magazine-page',
    templateUrl: './app/app-webpage/magazine.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Contact, Neighborhood, PropertyOverview, Recommendations, MagHeaderModule, FooterComponent, ROUTER_DIRECTIVES],
    //providers: [ROUTER_PROVIDERS],
})

@RouteConfig([
    {
        path: '/overview',
        name: 'PropertyOverview',
        component: PropertyOverview,
    },
    {
        path: '/neighborhood',
        name: 'Neighborhood',
        component: Neighborhood,
    },
    {
        path: '/recommendations',
        name: 'Recommendations',
        component: Recommendations,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
])

export class MagazinePage {
    address: string;
    constructor(private _params: RouteParams){
       this.address = _params.get('addr');
       console.log(this.address);
    }
}
