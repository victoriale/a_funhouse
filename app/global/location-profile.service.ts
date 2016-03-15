import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()

export class LocationProfileService{

    constructor(public http: Http){

    }

    getLocationProfile(city, state){
        //Configure HTTP Headers
        var headers = new Headers();
        //headers.append('X-SNT-TOKEN', 'BApA7KEfj');

        console.log('Location Profile Service Input', city, state);

        return this.http.get('http://api2.joyfulhome.com:280/location/profileHeader/' + state + '/' + city, {
                headers: headers
            })
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