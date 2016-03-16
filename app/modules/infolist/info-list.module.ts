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
                'counter': '1',
                'bgClass': 'odd',
                'address': '[Listing Address]',
                'type': '[Home Type]: [#] Beds & [#] Baths',
                'line1': 'On The Market Since',
                'line2': '[MM/DD/YYYY]',
                'line3': 'Asking Price: [$Value]',
                'bigImage': './app/public/img_bckgnd.png',
                'location1': '[City], [ST]',
                'location2': '[Zip Code]',
                'question': 'Want more information about this listing?',
                'buttonName': 'View Your Home'
            },
            {
                'counter': '2',
                'bgClass': 'even',
                'address': '[Listing Address]',
                'type': '[Home Type]: [#] Beds & [#] Baths',
                'line1': 'On The Market Since',
                'line2': '[MM/DD/YYYY]',
                'line3': 'Asking Price: [$Value]',
                'bigImage': './app/public/img_bckgnd.png',
                'location1': '[City], [ST]',
                'location2': '[Zip Code]',
                'question': 'Want more information about this listing?',
                'buttonName': 'View Your Home'
            },
            {
                'counter': '3',
                'bgClass': 'odd',
                'address': '[Listing Address]',
                'type': '[Home Type]: [#] Beds & [#] Baths',
                'line1': 'On The Market Since',
                'line2': '[MM/DD/YYYY]',
                'line3': 'Asking Price: [$Value]',
                'bigImage': './app/public/img_bckgnd.png',
                'location1': '[City], [ST]',
                'location2': '[Zip Code]',
                'question': 'Want more information about this listing?',
                'buttonName': 'View Your Home'
            }
        ]
    }
}