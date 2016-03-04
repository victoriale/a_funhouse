///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../node_modules/angular2/typings/es6-promise/es6-promise.d.ts"/>

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app-layout/app.component'
//import {
//    ANGULAR2_GOOGLE_MAPS_DIRECTIVES,
//    ANGULAR2_GOOGLE_MAPS_PROVIDERS
//} from 'angular2-google-maps/core';

// Needed for http map on observables
import 'rxjs/add/operator/map';

bootstrap(AppComponent);