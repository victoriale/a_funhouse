/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit, OnChanges} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";
import {moduleHeader} from "../../components/module-header/module-header";
import {LocationProfileService} from '../../global/location-profile.service';
import {LoadingComponent} from '../../components/loading/loading.component';
import {ErrorComponent} from '../../components/error/error.component';

@Component({
    selector: 'School-list-page',
    templateUrl: './app/webpages/school-lists/school-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, moduleHeader, HeroListComponent, ROUTER_DIRECTIVES, LoadingComponent, ErrorComponent],
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
   var dataLists = data[this.category];
   var metaData = data['meta'];
   var globeFunc = this.globalFunctions;
   var schoolImage = this.getSchoolImages();
   dataLists.forEach(function(val, i){
     var num = Math.floor(Math.random() * schoolImage.length); //randomize array of images
     val.imageUrl = './app/public/mag_stock_img/schools_banks_grocery/' + schoolImage[num];//with path and random image, will generate random imageUrl
     val.rank = i+1;
     if(val.city == '' || val.state_or_province == '' || val.postal_code == "NA" || val.postal_code == '' || val.full_street_address == ''){
       val.location_address  = 'N/A';
       val.location_city = globeFunc.toTitleCase(metaData.city);
       val.location_state = metaData.state;
       val.zipCode ==  "";
       val.locationUrl = {loc: metaData.city + '_' + metaData.state};
     } else {
       val.location_city = globeFunc.toTitleCase(val['city']);
       val.locationUrl = {loc: globeFunc.toTitleCase(val['city']) + '_' + val['state_or_province']};
       val.location_address = globeFunc.toTitleCase(val['full_street_address']);
       val.location_state = val['state_or_province'];
       val.zipCode = val['postal_code'];
     }
     val.school_name = globeFunc.toTitleCase(val['school_name']);

   })
   return dataLists;
  }

  ngOnInit(){
    this.locState = decodeURI(this._params.get('state'));
    this.locCity = decodeURI(this._params.get('city'));
    this.location = this.globalFunctions.toTitleCase(this.locCity) + ', ' + this.locState;
    this.moduleTitle = "Schools In and Around " + this.location;
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
