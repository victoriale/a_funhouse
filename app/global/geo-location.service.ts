import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()

export class GeoLocationService {
    cachedGeoLocation: any;
    constructor(public http:Http) {}

    getGeoLocation() {

        //Geo location call (Returns city, state, zipcode)
        if (this.cachedGeoLocation) {
            return Observable.of(this.cachedGeoLocation);
        } else {
            return this.http.get('http://w1.synapsys.us/listhuv/?action=get_remote_addr')
                .map(
                    res => res.json()
                )
                .do((data) => {
                    this.cachedGeoLocation = data;
                });
        }
    }

}

@Injectable()

export class NearByCitiesService {
    cachedNearByCities: any;

    constructor(public http:Http) {}

    getNearByCities(state, city) {
        //Nearby Cities call (Returns city, state, distance)
        if (this.cachedNearByCities) {
            return Observable.of(this.cachedNearByCities);
        } else {
            return this.http.get('http://api2.joyfulhome.com:280/nearbyCities/' + state + '/' + city)
                .map(
                    res => res.json()
                )
                .do((data) => {
                    this.cachedNearByCities = data;
                })
                .map(
                    data => {
                        return data.data;
                    }
                )
        }
    }
}