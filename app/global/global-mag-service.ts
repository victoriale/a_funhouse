/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */
import {Injectable} from 'angular2/core';
import {MagOverview, MagData} from './global-interface';
import {HTTP_PROVIDERS, Http, Response, Headers} from "angular2/http";
import {Observable} from 'rxjs/Rx';

@Injectable()

export class MagazineDataService {
    cachedData : MagData;
    constructor(public http: Http) {};

    getMagazineData(address) {
        if ( this.cachedData ) {
            return Observable.of(this.cachedData);
        } else {
            return this.http.get('http://dev-realestate-ai.synapsys.us:280/' + address)
                .map(res => res.json())
                .do((data) => {
                    this.cachedData = data;
                });
        }
    }
}
