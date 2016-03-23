/**
 * Created by Victoria on 3/8/2016.
 */
import {Component, OnInit, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';
import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {DetailedListComponent} from '../../components/detailed-list/detailed-list.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {DynamicWidgetCall} from '../../global/global-service';
import {GlobalFunctions} from "../../global/global-functions";
import {TitleComponent} from '../../components/title/title.component';
import {PaginationFooter} from "../../components/pagination-footer/pagination-footer.component";

@Component({
  selector: 'List-page',
  templateUrl: './app/webpages/dynamic-list-page/dynamic-list.page.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [PaginationFooter, TitleComponent, DetailedListComponent, ListViewCarousel, DropdownComponent, ListMenuComponent, WidgetModule],
  providers: [DynamicWidgetCall],
})

export class DynamicListPage implements OnInit {
  carouselData: any = [];
  listData:any = [];
  headerData: any;
  data: any;

  constructor(private _params: RouteParams, private _globalFunctions: GlobalFunctions, private dynamicWidget: DynamicWidgetCall) {
    // Scroll page to top to fix routerLink bug
    window.scrollTo(0, 0);
  }

  getDynamicList() {// GET DATA FROM GLOBAL SERVICE
    this.dynamicWidget.getWidgetData('1', 103, 'TAMPA')//EXAMPLE NEED TO MAKE IT DYNAMIC TO ACCEPT ANYTHING
      .subscribe(data => {
        this.data = this.transformData(data);
      });
  }

  transformData(data){// TRANSFORM DATA TO PLUG INTO COMPONENTS
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
    var carouselData = [];
    originalData.forEach(function(val, i){
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
          desc: val.desc,
      };
      newData['url'] = val.primary_url;

      var carData = {
        heading:val.title,
        image_url:val.img,
        listing_price:val.value,
        listing_area:val.tag,
        listing_addr1:val.list_sub.split(' | ')[0],
        listing_addr2:val.list_sub.split(' | ')[1],
      }
      carData['button_url'] = val.primary_url;

      carouselData.push(carData);
      listData.push(newData);
    })//END of forEach

    //set to listData
    this.listData = listData;
    this.carouselData = carouselData;

  }//END OF TRANSFORM FUNCTION

  ngOnInit() {
    this.getDynamicList();
  }

}
