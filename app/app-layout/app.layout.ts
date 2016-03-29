import {Component} from 'angular2/core';
import {AppComponent} from "../app-webpage/app.webpage";
import {MagazinePage} from "../app-webpage/magazine.webpage";

import {RouteParams, Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

@Component({
    selector: 'web-app',
    templateUrl: './app/app-layout/app.layout.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagazinePage, AppComponent,RouterOutlet, ROUTER_DIRECTIVES],
    providers: [],
})

@RouteConfig([
    {
       path: '/...',
       name: 'Webpages',
       component: AppComponent,
    },
    {
      path: '/magazine/:addr/...',
      name: 'Magazine',
      component: MagazinePage
    },
])

export class WebApp {

  public partnerID: string;

  address:string = '1324-N-Manchester-CT-Wichita-KS';

  constructor(private _params: RouteParams){
    this.partnerID = this._params.get('partner_id');
  }
}
