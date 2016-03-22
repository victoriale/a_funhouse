/**
 * Created by Victoria on 3/8/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';
import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {DetailedListComponent} from '../../components/detailed-list/detailed-list.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {LocationProfileService} from '../../global/location-profile.service';
import {DynamicWidgetCall} from '../../global/global-service';
import {GlobalFunctions} from "../../global/global-functions";
import {TitleComponent} from '../../components/title/title.component';

@Component({
  selector: 'List-page',
  templateUrl: './app/webpages/dynamic-list-page/dynamic-list.page.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [TitleComponent, DetailedListComponent, ListViewCarousel, DropdownComponent, ListMenuComponent, WidgetModule],
  providers: [LocationProfileService, DynamicWidgetCall],
})

export class DynamicListPage implements OnInit {
  carouselData: any;
  listData:any = [];
  headerData: any;
  data: any;

  constructor(private _params: RouteParams, private _locationProfileService: LocationProfileService, private _globalFunctions: GlobalFunctions, private dynamicWidget: DynamicWidgetCall) {
    // Scroll page to top to fix routerLink bug
    window.scrollTo(0, 0);
  }

  getDynamicList() {
    this.dynamicWidget.getWidgetData('1', 103, 'TAMPA')
      .subscribe(data => {
      this.data = this.transformData(data);
    },
      () => console.log('Dyncamic Data Acquired!')
      );
  }

  transformData(data){
    console.log('Grab HeaderData',data);
    //grab data for the header
    this.headerData = {
        imageURL : './app/public/joyfulhome_house.png',
        smallText1 : data.date,
        smallText2 : ' United States of America',
        heading1 : data.title,
        heading2 : '',
        heading3 : '',
        heading4 : '',
        icon: 'fa fa-map-marker',
        hasHover: true
    };

    //grab data for the list
    var originalData = data.data;
    var listData = [];
    originalData.forEach(function(val, i){
      console.log(i, val);
      var newData = {
          img : val.img,
          list_sub : val.list_sub,
          title : val.title,
          subtype : val.tag,
          numBed : '',
          numBath: '',
          date: 'Date',
          value: val.value,
          tag: val.tag,
          buttonName: 'View Profile',
          icon: '',
          rank: val.rank,
      };
      newData['url'] = val.primary_url;

      listData.push(newData);
    })

    //set to listData
    this.listData = listData;

    console.log('New HeaderData',this.headerData);
    console.log('newListData', listData);
  }

  ngOnInit() {
    this.getDynamicList();
  }

}
