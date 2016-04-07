/**
 * Created by Victoria on 3/8/2016.
 */
import {Component, OnInit, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {DynamicListComponent} from '../../components/dynamic-list/dynamic-list.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {DynamicWidgetCall} from '../../global/global-service';
import {GlobalFunctions} from "../../global/global-functions";
import {TitleComponent} from '../../components/title/title.component';
import {PaginationFooter} from "../../components/pagination-footer/pagination-footer.component";
import {ErrorComponent} from "../../components/error/error.component";
import {BackTabComponent} from "../../components/backtab/backtab.component";
import {DynamicCarousel2} from "../../components/carousel/dynamic-carousel2/dynamic-carousel2";
import {Router} from "angular2/router";

@Component({
  selector: 'List-page',
  templateUrl: './app/webpages/dynamic-list-page/dynamic-list.page.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [PaginationFooter, TitleComponent, DynamicListComponent, DynamicCarousel2, DropdownComponent, ListMenuComponent, WidgetModule, ErrorComponent, BackTabComponent],
  providers: [DynamicWidgetCall],
})

export class DynamicListPage implements OnInit {
  carouselData: any = [];
  listData:any = [];
  headerData: any;
  data: any;
  tw: any;
  sw: any;
  input: any;
  isError: boolean = false;
  curRoute: any;
  partnerID: string;
  isMyHouseKit: any;


  constructor(private _params: RouteParams, private _globalFunctions: GlobalFunctions, private dynamicWidget: DynamicWidgetCall, public router: Router) {
    //parse out needed values from single param
      //this.dynamicWidget.getWidgetData('1', 103, 'TAMPA')//EXAMPLE NEED TO MAKE IT DYNAMIC TO ACCEPT ANYTHING
      //query USED TO look something like this "tw=1&sw=103&input=TAMPA";
      //query should look something like this "tw-1+sw-103+input-TAMPA";
      let query = this._params.get("query");
      //this.tw ="1";
      //this.sw ="103";
      //this.input ="TAMPA";

      // Setup this way in case we want to switch out null with some default values
      let twArr = query.match(/tw-(.*?)\+/);
          this.tw = twArr != null && twArr.length > 1 ? twArr[1] : null;
      let swArr = query.match(/sw-(.*?)\+/);
          this.sw = swArr != null && swArr.length > 1 ? swArr[1] : null;
      let inputArr = query.match(/input-(.*)/);
          this.input = inputArr != null &&  inputArr.length > 1 ? inputArr[1] : null;

    // Scroll page to top to fix routerLink bug
    window.scrollTo(0, 0);

    this.router.root
        .subscribe(
            route => {
                this.curRoute = route;
                var partnerID = this.curRoute.split('/');
                var hostname = window.location.hostname;
                var partnerIdExists = partnerID[0] != '' ? true : false;

                var myhousekit = /myhousekit/.test(hostname);
                //checks if partner ID exists
                if(!partnerIdExists){
                    this.partnerID = null;
                    this.isMyHouseKit = false;
                }else{
                    this.partnerID = partnerID[0];
                    this.isMyHouseKit = true;
                }
                this.getDynamicList();
            }
        )
  }


  getDynamicList() {// GET DATA FROM GLOBAL SERVICE
    //EXAMPLE
    //this.dynamicWidget.getWidgetData('1', 103, 'TAMPA')
    if( !this.tw || !this.sw || !this.input ){
      // Not enough parameter : display error message
      this.isError = true;
      return;
    }
    this.dynamicWidget.getWidgetData(this.tw, this.sw, this.input)
      .subscribe(data => {
        this.data = this.transformData(data);
      },
          err => {
              this.isError = true;
              console.log(err);
          }
      );
  }

  transformData(data){// TRANSFORM DATA TO PLUG INTO COMPONENTS
    if(!data) return false;
    //grab data for the header
    this.headerData = {
        // Old placeholder image:  http://www.myinvestkit.com/StateImages/Location_National.jpg
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
    var partnerID = this.partnerID;
    originalData.forEach(function(val, i){

      // format the url depending on if partner page or not
      let generatedUrl = partnerID.length ? val.partner_url.replace(/\{partner\}/, partnerID) : val.primary_url

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
          location: '',
          market:'',
          rank: val.rank,
          desc: val.desc,
          url: generatedUrl
      };

      var carData = {
        textDetails:    [
                        "<i class='fa fa-map-marker'></i> " + val.title,
                        "<small>"+val.list_sub+"</small>",
                        "&nbsp;",
                        val.value,
                        "<small>"+val.tag+"</small>"
                        ],
        callToAction:   "Want more detailed information?",
        buttonLabel:    "<span></span> <span>View Profile</span> <i class='fa fa-angle-right'></i>",
        index:          val.rank,
        imageUrl1:      val.img,
        linkUrl1:       generatedUrl
      }

      carouselData.push(carData);
      listData.push(newData);
    })//END of forEach

    //set to listData
    this.listData = listData;
    this.carouselData = carouselData;

  }//END OF TRANSFORM FUNCTION

  ngOnInit() {
  }

}
