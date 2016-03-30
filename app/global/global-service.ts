/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */
import {List, List2} from './global-interface';
import {Injectable} from 'angular2/core';
import {HomePageData} from "./global-interface";
import {Http, Headers} from 'angular2/http';

@Injectable()

export class PartnerHeader {
  public protocolToUse: string = (location.protocol == "https:") ? "https" : "http";
  public apiUrl: string = '://apireal.synapsys.us/listhuv/?action=get_partner_data&domain=';

  constructor(public http: Http) {

  }

  //API for listing profile
  getPartnerData(partner_id) {

    console.log('Grabbing Partner Data', partner_id);

    var fullUrl = this.protocolToUse + this.apiUrl + partner_id;
    console.log(fullUrl);
    return this.http.get(fullUrl, {
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

@Injectable()

export class listViewPage {
  public protocolToUse: string = (location.protocol == "https:") ? "https" : "http";
  public apiUrl: string = '://api2.joyfulhome.com:280';

  constructor(public http: Http) {}

  //API for listview page data
  getListData(listname, state, city, limit, page) {
    var query = {
      listname: listname,
      state: state,
      city: city,
      zip: 'empty',
      limit: limit,
      page: page,
    };

    var fullUrl = this.protocolToUse + this.apiUrl +"/list";

    //list/homesAtLeast5YearsOld/KS/Wichita/empty/10/1
    for (var q in query) {
      if (query[q] == null || query[q] == 'empty') {
        query[q] = '/empty';
      } else {
        query[q] = '/' + query[q];
      }
      if (query[q] == '' || typeof query[q] != 'undefined') {

      }
      fullUrl += query[q];
    }

    return this.http.get(fullUrl, {
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

  //API for Find Your Home filtered call
  getFindYourHome(state, city, priceLowerBound, priceUpperBound, type, bedrooms, bathrooms, squareFeet, lotSize) {

    city = encodeURI(city);
    state = encodeURI(state);

    var fullUrl = this.protocolToUse + this.apiUrl

    // location/findYourHome/{state}/{city}/{priceLowerBound}/{priceUpperBound}/{type}/{bedrooms}/{bathrooms}/{squareFeet}/{lotSize}
    // types: Townhouse, Condominium, Apartment, and Single Family Attached
    // last 5 optional, pass string 'empty' if no option selected
    return this.http.get(fullUrl + '/location/findYourHome/' + state + '/' + city + '/' + priceLowerBound + '/' + priceUpperBound + '/'  + type + '/' + bedrooms + '/' + bathrooms + '/' + squareFeet + '/' + lotSize)
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

@Injectable()
export class ListOfListPage {

  constructor(public http: Http) { }

  public apiUrl: string = 'http://api2.joyfulhome.com:280';

  getAddressListOfListPage(address){
    address = encodeURIComponent(address);

    return this.http.get(this.apiUrl + '/list/listOfListsAddressKey/' + address)
      .map(
          res => res.json()
      )
    .map(
        data => {
          return data.data;
        }
    )
  }

  getListOfListPage(state, city) {
    //Nearby Cities call (Returns city, state, distance)
    return this.http.get(this.apiUrl + '/list/listOfLists/' + state + '/' + city)
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

@Injectable()

export class GlobalPage {
  public apiUrl: string = 'http://api2.joyfulhome.com:280';

  constructor(public http: Http){}
  //Function to set custom headers

  getAboutUsData() {
    return this.http.get(this.apiUrl + '/aboutUs')
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

@Injectable()

export class DynamicWidgetCall {
  public apiUrl: string = "http://dw.synapsys.us/list_creator_api.php";

  constructor(public http: Http) { }
  //Function to set custom headers

  // Method to get data for the list for the dynamic widget
  getWidgetData(tw, sw, input) {
    // Inputs: tw - trigger word, sw - sort parameter, input - input value
    // If value is not needed, pass -1

    // Return error if no tw
    // if (typeof (tw) == "undefined") {
    //   return {
    //     "success": false,
    //     "message": "Error: Trigger word is required"
    //   };
    // }

    // Set defaults
    if (typeof (sw) == "undefined") {
      sw = -1;
    }
    if (typeof (input) == "undefined") {
      input = -1;
    }

    // Build the URL
    var url = this.apiUrl + "?tw=" + tw + "&sw=" + sw + "&input=" + input;

    // Build a key for logging
    var key = tw + ":" + sw + ":" + input;

    // Options array (unzip gzip response)
    var opts = {
      npmRequestOptions: {
        gzip: true
      }
    };

    return this.http.get(url, {
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
