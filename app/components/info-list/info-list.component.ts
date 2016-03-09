import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'info-list',
    templateUrl: './app/components/info-list/info-list.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
    inputs: ['infoList'],
})

export class InfoListComponent{
    moduleTitle: string;
    infoList: Object;

    ngOnInit(){

        if(typeof this.infoList === 'undefined'){
            this.infoList =
            {
                'address': '[Listing Address]',
                'type': '[Home Type]: [#] Beds & [#] Baths',
                'date': '[MM/DD/YYYY]',
                'price': '[$Value]',
                'bigImage': './app/public/img_bckgnd.png',
                'location': '[City], [ST] > [Zipcode]',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            }
        }

        console.log(this);
    }
}