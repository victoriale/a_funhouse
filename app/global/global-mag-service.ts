/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */
import {Injectable, Injector} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams } from 'angular2/router';
import {MagOverview, MagData} from './global-interface';
import {HTTP_PROVIDERS, Http, Response, Headers} from "angular2/http";
import {Observable} from 'rxjs/Rx';
import {WebApp} from "../app-layout/app.layout";

@Injectable()

export class MagazineDataService {
    cachedData : MagData;
    public partnerID: string;
    constructor( private _injector: Injector, public http: Http) {
        let partnerParam = this._injector.get(WebApp);
        this.partnerID = partnerParam.partnerID;
    };

    getMagazineData(address) {
        if ( this.cachedData ) {
            return Observable.of(this.cachedData);
        } else {
            if (this.partnerID == null) {
                return this.http.get('http://dev-realestate-ai.synapsys.us:280/' + address)
                    .map(res => res.json())
                    .do((data) => {
                        this.cachedData = data;
                    });
            } else {
                return this.http.get('http://dev-realestate-ai.synapsys.us:280/' + address + '?partner=' + this.partnerID)
                    .map(res => res.json())
                    .do((data) => {
                        this.cachedData = data;
                    });
            }
        }
    }
}
