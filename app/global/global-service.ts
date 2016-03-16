/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */

import {List, List2} from './global-interface';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {HomePageData} from "./global-interface";
import {Http, Headers} from 'angular2/http';

@Injectable()

export class PartnerHeader{
    public protocolToUse: string = (location.protocol == "https:") ? "https" : "http";
    public apiUrl: string = 'apireal.synapsys.us/listhuv/?action=get_partner_data&domain=';

    constructor(public http: Http){

    }

    //API for listing profile
    getPartnerData(partner_id){

        console.log('Grabbing Partner Data', partner_id);

        var fullUrl = this.protocolToUse + '://' + this.apiUrl + partner_id;
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
export class ListOfListService {
    getListOfList() {
        var Lol: List[] = [
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
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
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
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
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

export class MediaFeatureList{
    getBatchTwo() {
        var BatchTwo: List2[] = [
            {
                'bigImage': './app/public/placeholder_XL.png',
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
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ],
            }
        ];
        return Promise.resolve(BatchTwo);
    }
}
