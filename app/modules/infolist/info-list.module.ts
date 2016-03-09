import {Component, OnInit} from 'angular2/core';

import {moduleHeader} from "../../components/module-header/module-header";
import {moduleFooter} from "../../components/module-footer/module-footer";
import {InfoListComponent} from "../../components/info-list/info-list.component";

@Component({
    selector: 'info-list-module',
    templateUrl: './app/modules/infolist/info-list.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, moduleFooter, InfoListComponent],
    inputs: ['module_title'],
    providers: []
})

export class InfoListModule implements OnInit {
    module_title: string;
    infoList: Object;

    ngOnInit() {
        this.module_title = 'Recent Listings for [Listing Name]';
        this.infoList = [
            {
                'address': '[Listing Address1]',
                'type': '[Home Type1]: [#] Beds & [#] Baths',
                'date': '[MM/DD/YYYY1]',
                'price': '[$Value1]',
                'bigImage': './app/public/img_bckgnd.png',
                'location': '[City], [ST1] > [Zipcode]',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            },
            {
                'address': '[Listing Address2]',
                'type': '[Home Type2]: [#] Beds & [#] Baths',
                'date': '[MM/DD/YYYY2]',
                'price': '[$Value2]',
                'bigImage': './app/public/img_bckgnd.png',
                'location': '[City], [ST2] > [Zipcode]',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            },
            {
                'address': '[Listing Address3]',
                'type': '[Home Type3: [#] Beds & [#] Baths',
                'date': '[MM/DD/YYYY3]',
                'price': '[$Value3]',
                'bigImage': './app/public/img_bckgnd.png',
                'location': '[City], [ST3] > [Zipcode]',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            }
        ]
    }
}