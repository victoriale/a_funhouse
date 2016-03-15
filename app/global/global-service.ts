/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */

import {List, List2} from './global-interface';
import {Injectable} from 'angular2/core';
import {HomePageData} from "./global-interface";

@Injectable()

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
