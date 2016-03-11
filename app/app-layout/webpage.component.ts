import {Component} from 'angular2/core';
import {AppComponent} from "../app-webpage/app.component";
import {MagazinePage} from "../app-webpage/magazine.page";

import {Router, RouteData, RouteConfig, RouterOutlet, ROUTER_DIRECTIVES, LocationStrategy} from 'angular2/router';

@Component({
    selector: 'web-app',
    templateUrl: './app/app-layout/webpage.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagazinePage, AppComponent,RouterOutlet, ROUTER_DIRECTIVES],
    providers: [ROUTER_DIRECTIVES],
})

@RouteConfig([
    {
       path: '/...',
       name: 'Webpages',
       component: AppComponent,
    },
    {//magazine merge from LynchTest
      path: '/magazine/:addr/...',
      name: 'Magazine',
      component: MagazinePage
    },
])

export class WebApp {
  address:string = '1324-N-Manchester-CT-Wichita-KS';
}
