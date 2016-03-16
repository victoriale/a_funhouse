import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'info-list',
    templateUrl: './app/components/info-list/info-list.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
    inputs: ['infoList'],
})

export class InfoListComponent implements OnInit{
    infoList: Object;
    dummyData() {
        if (typeof this.infoList == 'undefined') {
            this.infoList = [
                {
                    'counter': '1',
                    'bgClass': 'odd',
                    'type': '[Home Type1]: [#] Beds & [#] Baths',
                    'date': '[MM/DD/YYYY]',
                    'price': '[$Value1]',
                    'bigImage': './app/public/img_bckgnd.png',
                    'address': '[Listing Address]',
                    'line1': 'On The Market Since',
                    'line2': '[MM/DD/YYYY]',
                    'line3': 'Asking Price: [$Value]',
                    'location1': '[City], [ST]',
                    'location2': '[Zip Code]',
                    'question': 'Want more information about this listing?',
                    'buttonName': 'View Your Home'
                }
            ]
        }
    }

    ngOnInit(){
        this.dummyData();
        console.log(this);
    }
}
