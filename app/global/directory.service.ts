import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {GlobalFunctions} from './global-functions';

@Injectable()

export class DirectoryService{
    public apiUrl: string = 'http://api2.joyfulhome.com:280';
    public apiToken: string = 'BApA7KEfj';
    public headerName: string = 'X-SNT-TOKEN';

    constructor(public http: Http, private globalFunctions: GlobalFunctions){

    }

    //Function to set custom headers
    setToken(){
        var headers = new Headers();
        //headers.append(this.headerName, this.apiToken);
        return headers;
    }

    //API to get state list
    getStateList(){
        var headers = this.setToken();

        return this.http.get(this.apiUrl + '/directory/states', {
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

    //API to get city list
    getCityList(state){
        var headers = this.setToken();

        return this.http.get(this.apiUrl + '/directory/cities/cityList/' + state + '/20/1', {
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

    //API to get cities list
    getAllCities(pageNumber, state){
        var skip = pageNumber;

        var headers = this.setToken();

        return this.http.get(this.apiUrl + '/directory/cities/cityList/'+ state + '/' + 20 + '/' + skip, {
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

    //API to get number of city listings
    getCityListingsNumber(state, city){
        var headers = this.setToken();

        return this.http.get(this.apiUrl + '/directory/cities/countListings/' + state + '/' + city, {
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

    //API to get number of zipcode listings
    getZipcodeListingNumber(zipcode){
        var headers = this.setToken();

        return this.http.get(this.apiUrl + '/directory/zip/countListings/' + zipcode, {
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

    //API to get directory listing data
    getDirectoryData(pageNumber, listTitle, state, city, zipcode){
        var limit = 20;
        //The skip parameter skips the limit amount starting at skip = 2 (skip = 1 is results 1-20, skip = 2 is results 21-40, etc.) Skip is really more like page number
        var skip = pageNumber;
        var path = '/directory';

        var headers = this.setToken();

        //Transform list title
        listTitle = listTitle.replace(/-/g, ' ');
        listTitle = this.globalFunctions.toTitleCase(listTitle);
        listTitle = listTitle.replace(/ /g, '');
        listTitle = listTitle[0].toLowerCase() + listTitle.slice(1);

        //Build path for url
        if(state === null && city === null && zipcode === null){
            //National api call
            var path = path + '/national/' + listTitle + '/' + limit + '/' + skip;
        }else if(state !== null && city === null && zipcode === null){
            //State api call
            var path = path + '/states/' + listTitle + '/' + state + '/' + limit + '/' + skip;
        }else if(state !== null && city !== null && zipcode === null){
            //City api call
            var path = path + '/cities/' + listTitle + '/' + state + '/' + city + '/' + limit + '/' + skip;
        }else if(state !== null && city !== null && zipcode !== null){
            //Zipcode api call
            var path = path + '/zip/' + listTitle + '/' + zipcode + '/' + limit + '/' + skip;
        }else{
            console.log('Error - Incorrect url parameters for getDirectoryData function');
        }

        return this.http.get(this.apiUrl + path, {
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