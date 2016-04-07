/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit, OnChanges} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";
import {LocationProfileService} from '../../global/location-profile.service';
import {LoadingComponent} from '../../components/loading/loading.component';
import {ErrorComponent} from '../../components/error/error.component';
import {BackTabComponent} from "../../components/backtab/backtab.component";
import {DynamicCarousel2} from "../../components/carousel/dynamic-carousel2/dynamic-carousel2";
import {TitleComponent} from '../../components/title/title.component';
declare var moment: any;

@Component({
    selector: 'School-list-page',
    templateUrl: './app/webpages/school-lists/school-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, HeroListComponent, ROUTER_DIRECTIVES, LoadingComponent, ErrorComponent, BackTabComponent, DynamicCarousel2, TitleComponent],
    providers: [LocationProfileService]
})

export class SchoolListsPage implements OnInit{
  imageUrl: string;
  moduleTitle: string;
  public location: string;
  public locCity: string;
  public locState: string;
  public profileType: string;
  public category: string;
  private schoolData: any;
  public titleComponentData: {};
  carouselData: any = [];
  public isError: boolean = false;

  @Input() schoolDataInput: any;

  constructor(private _params: RouteParams, private router: Router, private globalFunctions: GlobalFunctions, private _locationService: LocationProfileService, params: RouteParams){
      this.category = params.params['listname'];
      window.scrollTo(0, 0);
  }

  getData(){
      this._locationService.getSchoolData(this.locCity, this.locState)
          .subscribe(
              schoolData => {
                this.schoolData = this.dataFormatter(schoolData);
              },
              err => {
                  console.log('Error: School Page API', err);
                  this.isError = true;
              }
          );
  }
  getSchoolImages() {
    let images:string[];
     var newImage: string;
     if (this.category != null) {
         switch (this.category) {
             case 'elementary':
                 images = ['Elementary_1_stock_mag.jpg', 'Elementary_2_stock_mag.jpg'];
                 break;
             case 'middle':
                 images = ['Middle_School_1_stock_mag.jpg', 'Middle_School_2_stock_mag.jpg', 'Middle_School_3_stock_mag.jpg', 'Middle_School_4_stock_mag.jpg'];
                 break;
             case 'high':
                 images = ['High_School_1_stock_mag.jpg', 'High_School_2_stock_mag.jpg', 'High_School_3_stock_mag.jpg', 'High_School_4_stock_mag.jpg'];
                 break;
             default:
                 images = ['High_School_2_stock_mag.jpg'];
         }
     }
     return images;//returns an array of random images per category
  }

  dataFormatter(data){
   //get data based on category
   var counter = 1;
   var globeFunc = this.globalFunctions;
   if(!data) return false;
   var dataLists = data[this.category];
   var categoryName = globeFunc.toTitleCase(this.category);
   console.log(categoryName);
   var metaData = data['meta'];
   var schoolImage = this.getSchoolImages();
   this.titleComponentData = {
       imageURL: './app/public/joyfulhome_house.png',
       smallText1: 'Last Updated: ' + moment(new Date()).format('dddd, MMMM Do, YYYY'),
       smallText2: decodeURI(this._params.get('city')) + ', ' + decodeURI(this._params.get('state')),
       heading1: this.globalFunctions.toTitleCase(this.category) + ' schools in and around ' + decodeURI(this._params.get('city')) + ', ' + decodeURI(this._params.get('state')),
       icon: 'fa fa-map-marker',
       hasHover: false
  }//end data input for title component
  var carouselData = [];

   dataLists.forEach(function(val, i){
     var num = Math.floor(Math.random() * schoolImage.length); //randomize array of images
     val.imageUrl = './app/public/mag_stock_img/schools_banks_grocery/' + schoolImage[num];//with path and random image, will generate random imageUrl
     val.rank = i+1;
     val.rank = counter++;
     val.categoryName = categoryName;
     // Check if even or odd for BG color class
     if(counter % 2 == 0) {
         val.bgClass = "even";
     }else{
         val.bgClass = "odd";
     }
     if(val.city == '' || val.state_or_province == '' || val.postal_code == "NA" || val.postal_code == '' || val.full_street_address == ''){
       val.location_address  = 'N/A';
       val.location_city = globeFunc.toTitleCase(metaData.city);
       val.location_state = metaData.state;
       val.zipCode =  "";
       val.locationUrl = {loc: metaData.city + '_' + metaData.state};
     } else {
       val.location_city = globeFunc.toTitleCase(val['city']);
       val.locationUrl = {loc: globeFunc.toTitleCase(val['city']) + '_' + val['state_or_province']};
       val.location_address = globeFunc.toTitleCase(val['full_street_address']);
       val.location_state = val['state_or_province'];
       val.zipCode = val['postal_code'];
     }
     val.school_name = globeFunc.toTitleCase(val['school_name']);
     var carData = {
       textDetails:    [
                       val.school_name,
                       "<small><i class='fa fa-map-marker'></i> " + val.location_city + ", " + val.location_state + "</small>",
                       "&nbsp;",
                       val.type,
                       "<small>"+categoryName+"</small>"
                       ],
       callToAction:   "Interested in discovering more about this area?",
       buttonLabel:    "<span></span> <span>View Homes In This Area</span> <i class='fa fa-angle-right'></i>",
       index:          val.rank,
       imageUrl1:      val.imageUrl
     }
     carData['linkUrl1'] = "/location/" +  globeFunc.toTitleCase(val['city']) + '_' + val['state_or_province'];
     carouselData.push(carData);
   })//end forEach
   this.carouselData = carouselData;
   return dataLists;
  }//end dataFormatter

  ngOnInit(){
    this.locState = decodeURI(this._params.get('state'));
    this.locCity = decodeURI(this._params.get('city'));
    this.location = this.globalFunctions.toTitleCase(this.locCity) + ', ' + this.globalFunctions.stateToAP(this.locState);
    this.moduleTitle = "Schools in and Around " + this.location;
    this.getData();
  }

  // On Change Call
  ngOnChanges(event) {
    //Get changed input
    var currentSchoolDataInput = event.schoolDataInput.currentValue;
    //If the data input is valid run transform data function
    if (currentSchoolDataInput !== null && currentSchoolDataInput!== false) {
      this.getData();
    }
  }
}
