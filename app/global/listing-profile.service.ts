import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()

export class ListingProfileService{
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

    //API to get featured list data
    getListingFeaturedList(address){
        //Configure HTTP Headers
        var headers = this.setToken();

        address = encodeURI(address);

        return this.http.get(this.apiUrl + '/list/randomByAddress/' + address, {
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

    //API for listing profile
    getListingProfile(address){
        //Configure HTTP Headers
        var headers = this.setToken();

        address = encodeURI(address);

        return this.http.get(this.apiUrl + '/listing/profileHeader/' + address, {
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

    //API for crime data
    getCrime(address){
        //Configure HTTP Headers
        var headers = this.setToken();

        address = encodeURI(address);

        return this.http.get(this.apiUrl + '/listing/crimeNearListing/' + address, {
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

    //API for map data
    getMap(address){
        //Configure HTTP Headers
        var headers = this.setToken();

        address = encodeURI(address);

        return this.http.get(this.apiUrl + '/listing/mapOfNearbyListings/' + address, {
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

    //API for Property Image and feature listing profile
    getPropertyListing(address){
        //Configure HTTP Headers
        var headers = this.setToken();

        address = encodeURI(address);
        console.log('Listing Property Image Input', address);

        return this.http.get(this.apiUrl + '/listing/propertyImagesForListing/' + address, {
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
    //API for Amenities Info for listing profile
    getAmenitiesNearListing(address){
        //Configure HTTP Headers
        var headers = this.setToken();

        address = encodeURI(address);
        console.log('Listing Amenities Nearby Input', address);

        return this.http.get(this.apiUrl + '/listing/amenitiesNearListing/' + address, {
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

    getTrendingHomesData(address){
        //Configure HTTP Headers
        var headers = this.setToken();

        address = encodeURI(address);

        return this.http.get(this.apiUrl + '/list/trendingByAddress/' + address, {
                headers: headers
            })
            .map(
                res => res.json()
            )
            .map(
                data => {
                    return data;
                }
            )
    }
}