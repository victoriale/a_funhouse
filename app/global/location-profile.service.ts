import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()

export class LocationProfileService{
    public apiUrl: string = 'http://api2.joyfulhome.com:280';
    public apiToken: string = 'BApA7KEfj';
    public headerName: string = 'X-SNT-TOKEN';

    constructor(public http: Http){

    }

    //Function to set custom headers
    setToken(){
        var headers = new Headers();
        //headers.append(this.headerName, this.apiToken);
        return headers;
    }

    getLocationFeaturedList(city, state){
        //Configure HTTP Headers
        var headers = this.setToken();

        city = encodeURI(city);
        state = encodeURI(state);

        return this.http.get(this.apiUrl + '/location/featuredListsInLocation/' + state + '/' + city, {
                headers: headers
            })
            .map(
                res => res.json()
            )
            .map(
                data => {
                    //console.log('Lutz - featured list output', data);
                    return data.data;
                }
            )
    }

    getLocationProfile(city, state){
        //Configure HTTP Headers
        var headers = this.setToken();

        city = encodeURI(city);
        state = encodeURI(state);

        return this.http.get(this.apiUrl + '/location/profileHeader/' + state + '/' + city, {
                headers: headers
            })
            .map(
                res => res.json()
            )
            .map(
                data => {
                    //console.log('Lutz - profile header output', data);
                    return data.data;
                }
            )
    }

    getRecentListings(city, state) {

        city = encodeURI(city);
        state = encodeURI(state);

        return this.http.get(this.apiUrl + '/list/listingsMostRecent/' + state + '/' + city)
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