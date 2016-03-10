import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()

export class ListingProfileService{
    result: Object;
    constructor(public http: Http){

    }

    //API for listing profile
    getListingProfile(input){
        //Configure HTTP Headers
        var headers = new Headers();
        headers.append('X-SNT-TOKEN', 'BApA7KEfj');

        console.log('Listing Profile Service Input', input);

        this.http.get('./app/public/dummy-profile-header.json', {
               headers: headers
            })
            .map(
                res => res.json()
            )
            .subscribe(
                data => this.result = data,
                err => console.log('There was an error', err),
                () => console.log('Listing Profile API - complete', this.result)
            );

        return Promise.resolve(this.result);
    }
}