import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()

export class GeoLocationService {
    constructor(public http: Http){

    }

    getGeoLocation(){
        //Geo location call (Returns city, state, zipcode)
        return this.http.get('http://w1.synapsys.us/listhuv/?action=get_remote_addr')
            .map(
                res => res.json()
            )
    }
}