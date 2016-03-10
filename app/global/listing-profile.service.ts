import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()

export class ListingProfileService{
    result: Object;
    constructor(public http: Http){

    }

    //API for listing profile
    getListingProfile(address){
        //Configure HTTP Headers
        var headers = new Headers();
        //headers.append('X-SNT-TOKEN', 'BApA7KEfj');

        console.log('Listing Profile Service Input', address);

        return this.http.get('http://api2.joyfulhome.com:280/listing/profileHeader/' + address, {
            headers: headers
        })
        .map(
            res => res.json()
        )
    }
}