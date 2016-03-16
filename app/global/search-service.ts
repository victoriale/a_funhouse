import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

@Injectable()

export class SearchService{
    result: Array<Object>;
    constructor(public http: Http){

    }

    //API for search bar
    getSearchResults(input, type){
        //Configure HTTP Headers
        var headers = new Headers();
        //headers.append('X-SNT-TOKEN', 'BApA7KEfj');

        input = encodeURI(input);

        return this.http.get('http://api2.joyfulhome.com:280/search/' + input, {
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
        var maxCount = 10;
        var searchArray = [];

        //If addresses are not null in api return iterate through addresses
        if(typeof data.address !== 'undefined' && data.address !== null) {
            data.address.forEach(function (item, index) {
                searchArray.push({
                    title: item.address_key.replace(/-/g, ' '),
                    page: 'Profile-page',
                    params: {
                        address: item.address_key
                    }
                });
                //Increment counter to ensure only 10 results are displayed
                count++;
            });
        }

        //If location cities are not null in api return iterate through cities
        if(typeof data.location_city !== 'undefined' && data.location_city !== null) {
            data.location_city.forEach(function (item, index) {
                searchArray.push({
                    title: item.city + ', ' + item.state_or_province,
                    page: 'Location-page',
                    params: {
                        loc: item.city + '_' + item.state_or_province
                    }
                });
                //Increment count to ensure only 10 results are displayed
                count++;
            });
        }

        //If zipcodes are not null in api return iterate through zipcodes
        if(typeof data.zipcode !== 'undefined' && data.zipcode !== null && count < 10){
            data.zipcode.forEach(function(item, index){
                //If count is 10 skip over remaining zipcodes
                if(count < maxCount) {
                    searchArray.push({
                        title: item.city + ', ' + item.state_or_province,
                        page: 'Location-page',
                        params: {
                            loc: item.city + '_' + item.state_or_province
                        }
                    });
                    //Increment count to ensure only 10 results are displayed
                    count++;
                }
            })
        }

        return searchArray;
    }

}