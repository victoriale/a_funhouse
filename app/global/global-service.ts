/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */

import {List} from './global-interface';
import {Injectable} from 'angular2/core';

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
