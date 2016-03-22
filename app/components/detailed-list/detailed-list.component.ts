import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'detailed-list',
    templateUrl: './app/components/detailed-list/detailed-list.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
    inputs: ['listData'],
})

export class DetailedListComponent implements OnInit{
    buttonName: string;
    infoList: any;
    listData: any;

    getData(){
      if(typeof this.listData == 'undefined'){
          this.listData =
          {
              imageURL : './app/public/joyfulhome_house.png',
              location : 'Wichita, KS',
              postal : ' 67260',
              livingarea : 'livingarea',
              address : '1234 joyfulhome data',
              subtype : 'subtype',
              numBed : 'numBed',
              numBath: 'numBath',
              date: 'Date',
              price: 'listPrice',
              buttonName: 'View Profile',
              icon: 'fa fa-map-marker',
              rank: 1,
          };
      }
    }

    ngOnInit(){
      this.getData();
    }
}
