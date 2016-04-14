import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {GlobalFunctions} from "./global-functions";

@Injectable()

export class SearchService{
    result: Array<Object>;
    constructor(public http: Http, private _globalFunctions: GlobalFunctions){}

    //API for search bar
    getSearchResults(input, type){
        //Configure HTTP Headers
        var headers = new Headers();
        //headers.append('X-SNT-TOKEN', 'BApA7KEfj');

        input = encodeURIComponent(input);
        if(input === ''){
            //return new Observable.return([]);
        }

        return this.http.get('http://api2.joyfulhome.com/search/' + input, {
                headers: headers
            })
            .map(
                res => res.json()
            )
            .map(
                data => {
                    data = data.data;

                    //If type is set to list, extract array out of data
                    if(type === 'list') {
                        data = this.dataToLink(data);
                    }

                    return data;
                }
            );

    }

    //API to transform data to link
    dataToLink(data){
        var count = 0;
        var addressCount = 0;
        var cityCount = 0;
        var zipcodeCount = 0;
        var maxCount = 10;
        var searchArray = [];

        //If addresses are not null in api return iterate through addresses
        if(typeof data.address !== 'undefined' && data.address !== null) {
            data.address.forEach(function (item, index) {
                if(addressCount < 5 && count < maxCount){
                    //Pass property_type and address_key so individual search components can build the magazine route (This is needed because the search components are on different levels of the router
                    searchArray.push({
                        property_type: item.property_type,
                        title: item.address_key.replace(/-/g, ' '),
                        //Default page and route params
                        page: 'Profile-page',
                        params: {
                            address: item.address_key
                        },
                        address_key: item.address_key
                    });
                    //Increment counter to ensure only 10 results total are displayed and 5 address results are displayed
                    addressCount++;
                    count++;
                 }
            });
        }

        //If location cities are not null in api return iterate through cities
        if(typeof data.location_city !== 'undefined' && data.location_city !== null) {
            data.location_city.forEach(function (item, index) {
                if(cityCount < 5 && count < maxCount) {
                    searchArray.push({
                        title: item.city + ', ' + item.state_or_province,
                        page: 'Location-page',
                        params: {
                            loc: this._globalFunctions.toLowerKebab(item.city) + '-' + item.state_or_province.toLowerCase()
                        }
                    });
                    //Increment count to ensure only 10 results are displayed and 5 city results are displayed
                    cityCount++;
                    count++;
                }
            });
        }

        //If zipcodes are not null in api return iterate through zipcodes
        if(typeof data.zipcode !== 'undefined' && data.zipcode !== null && count < 10){
            data.zipcode.forEach(function(item, index){
                //If count is 10 skip over remaining zipcodes
                if(zipcodeCount < 5 && count < maxCount) {
                    searchArray.push({
                        title: item.zipcode + ' - ' + item.full_street_address + ', ' + item.city + ', ' + item.state_or_province,
                        page: 'Location-page',
                        params: {
                            loc: this._globalFunctions.toLowerKebab(item.city) + '-' + item.state_or_province.toLowerCase()
                        }
                    });
                    //Increment count to ensure only 10 results are displayed and 5 zipcode results are displayed
                    zipcodeCount++;
                    count++;
                }
            })
        }

        return searchArray;
    }

}
