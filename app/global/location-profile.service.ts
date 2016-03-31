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

        return this.http.get(this.apiUrl + '/list/random/' + state + '/' + city, {
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
                    return data.data;
                }
            )
    }

    getCrime(city, state){
        //Configure HTTP Headers
        var headers = this.setToken();

        city = encodeURI(city);
        state = encodeURI(state);

        return this.http.get(this.apiUrl + '/location/crimeInLocation/' + state + '/' + city, {
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

    getRecentListings(city, state) {
        //Configure HTTP Headers
        var headers = this.setToken();

        city = encodeURI(city);
        state = encodeURI(state);

        return this.http.get(this.apiUrl + '/list/listingsMostRecent/' + state + '/' + city, {
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

      getSchoolData(city, state){
          //Configure HTTP Headers
          var headers = this.setToken();

          city = encodeURI(city);
          state = encodeURI(state);

          return this.http.get(this.apiUrl + '/location/schoolsInLocation/' + state + '/' + city, {
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
      getAmenitiesData(city, state){
          //Configure HTTP Headers
          var headers = this.setToken();

          city = encodeURI(city);
          state = encodeURI(state);

          return this.http.get(this.apiUrl + '/location/amenitiesInLocation/' + state + '/' + city, {
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
      getTrendingHomesData(city, state){
          //Configure HTTP Headers
          var headers = this.setToken();

          city = encodeURI(city);
          state = encodeURI(state);

          return this.http.get(this.apiUrl + '/list/trending/' + state + '/' + city, {
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
