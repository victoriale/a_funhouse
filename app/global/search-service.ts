import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from "rxjs/Observable";


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

        //If input parameter is blank, send back empty array observable. This is used by the search results component to delete search results
        if(input === ''){
            return Observable([]);
        }

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
        var searchArray = [];

        data.address.forEach(function(item, index){
            searchArray.push({
                title: item.address_key.replace(/-/g, ' '),
                page: 'Profile-page',
                params: {
                    address: item.address_key
                }
            });
            count++;
        });

        data.city.forEach(function(item, index){
            searchArray.push({
                title: item.city + ', ' + item.state_or_province,
                page: 'Location-page',
                params: {
                    loc: item.city + '_' + item.state_or_province
                }
            });
            count++;
        });

        if(typeof data.zipcode !== 'undefined' && count < 10){
            data.zipcode.forEach(function(item, index){
                searchArray.push({
                    title: item.city + ', ' + item.state_or_province,
                    page: 'Location-page',
                    params: {
                        loc: item.city + '_' + item.state_or_province
                    }
                })
            })
        }

        return searchArray;
    }

}