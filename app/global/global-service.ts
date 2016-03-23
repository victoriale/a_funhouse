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

  constructor(public http: Http) {

  }

  //API for listview page data
  getListData(listname, state, city, zip, limit, page) {
    var query = {
      listname: listname,
      state: state,
      city: city,
      zip: zip,
      limit: limit,
      page: page,
    };

    var fullUrl = this.protocolToUse + this.apiUrl +"/list";

    //list/homesAtLeast5YearsOld/KS/Wichita/empty/10/1
    for (var q in query) {
      console.log(q, query[q]);
      if (query[q] == null || query[q] == 'empty') {
        query[q] = '/empty';
      } else {
        query[q] = '/' + query[q];
      }
      if (query[q] == '' || typeof query[q] != 'undefined') {

      }
      fullUrl += query[q];
    }

    console.log('Grabbing List Data', listname, state, city, zip, limit, page);

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

/*@LOCATIONPROFILE*/

/*_@BATCH-1*/

@Injectable()
export class ListOfListPage {

  constructor(public http: Http) { }

  public apiUrl: string = 'http://api2.joyfulhome.com:280';

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

export class ListOfListService {
  getListOfList() {
    var Lol: List[] = [
      {
        'title': '[List Name Here1] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
        'bigImage': './app/public/img_bckgnd.png',
        'location': 'somewhere',
        'smallImage': [
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
        ]
      },
      {
        'title': '[List Name Here2] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
        'bigImage': './app/public/img_bckgnd.png',
        'location': 'someplace',
        'smallImage': [
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
        ]
      },
      {
        'title': '[List Name Here3] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
        'bigImage': './app/public/img_bckgnd.png',
        'location': 'something',
        'smallImage': [
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
        ]
      },
    ];
    return Promise.resolve(Lol);
  }
}

export class BatchOne {
  getBatchOne() {
    var BatchOne: List[] = [
      {
        'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
        'bigImage': './app/public/img_bckgnd.png',
        'location': 'somewhere',
        'smallImage': [
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
          './app/public/img_bckgnd.png',
        ]
      },
    ];
    return Promise.resolve(BatchOne);
  }
}

export class HomePageService {
  getHomePageService() {
    var HomePageData: HomePageData[] = [
      {
        'citylocation': 'Wichita',
        'statelocation': 'KS',
        'cityarea': [
          'Wichita',
          'Derby',
          'Haysville',
          'Valley Center',
          'Mulvane',
        ]
      },
    ];
    return Promise.resolve(HomePageData);
  }
}

export class MediaFeatureList {
  getBatchTwo() {
    var BatchTwo: List2[] = [
      {
        'bigImage': "http://photos.listhub.net/BCMLSIA/12787/1?lm=20160203T155029",
        'list_name': '[Listing Name] [Zip Code]',
        'list_addr': '[Listing Address]',
        'list_day': 'Days on the market: [##]',
        'detail1': '[#,###]',
        'unit1': 'SQ FT',
        'detail2': '[#,###]',
        'unit2': 'ACRES',
        'price': '$[###,###]',
        'price_name': 'SALE PRICE',
        'smallImage': [
          "http://photos.listhub.net/BCMLSIA/12787/1?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/2?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/3?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/4?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/5?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/6?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/7?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/8?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/9?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/10?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/11?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/12?lm=20160203T155029",
          "http://photos.listhub.net/BCMLSIA/12787/13?lm=20160203T155029"
        ],
      }
    ];
    return Promise.resolve(BatchTwo);
  }
}

@Injectable()

export class GlobalPage {
  public apiUrl: string = 'http://api2.joyfulhome.com:280';

  constructor(public http: Http) { }
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
    if (typeof (tw) == "undefined") {
      return {
        "success": false,
        "message": "Error: Trigger word is required"
      };
    }

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
