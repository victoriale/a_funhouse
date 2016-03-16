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
    infoList = {
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
      }

    infoList: Object;

    ngOnInit(){
        console.log(this);
    }
}
