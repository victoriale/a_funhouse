///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../node_modules/angular2/typings/es6-promise/es6-promise.d.ts"/>

import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router'
import {AppDomain} from './app-domain/app-domain'

// Needed for http map on observables
import 'rxjs/add/operator/map';

bootstrap(AppDomain,[ROUTER_PROVIDERS]);
