import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class GeoLocationService {
    constructor(public http: Http) {}

    getGeoLocation(){
        //Geo location call (Returns city, state, zipcode)
        return this.http.get('http://w1.synapsys.us/listhuv/?action=get_remote_addr')
            .map(
                res => res.json()
            )
    }
}

@Injectable()

export class NearByCitiesService {

    constructor(public http: Http) {}

    getNearByCities(state, city){
        //Nearby Cities call (Returns city, state, distance)
        return this.http.get('http://api2.joyfulhome.com:280/nearbyCities/' + state + '/' + city)
            .map(
                res => res.json()
            )
            .map(
                data => {
                    return data.data;
                }
            )
    }
}