import {Component} from 'angular2/core';
import {MyAppComponent} from "../app-webpage/app.mywebpage";
import {MagazinePage} from "../app-webpage/magazine.webpage";

import {RouteParams, Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

@Component({
    selector: 'web-app',
    templateUrl: './app/app-layout/app.layout.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagazinePage, MyAppComponent,RouterOutlet, ROUTER_DIRECTIVES],
    providers: [],
})

@RouteConfig([
    {
       path: '/...',
       name: 'Webpages',
       component: MyAppComponent,
       useAsDefault: true
    },
    {
      path: '/magazine/:addr/...',
      name: 'Magazine',
      component: MagazinePage
    },
])

export class MyWebApp {

  public partnerID: string;

  address:string = '1324-N-Manchester-CT-Wichita-KS';

  constructor(private _params: RouteParams){
    console.log("PARTNER PAGE!!!!!!!!!!!!!!!!!!");
    this.partnerID = this._params.get('partner_id');
  }
}
