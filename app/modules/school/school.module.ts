/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {GlobalFunctions} from '../../global/global-functions';
import {SchoolDataInterface} from '../../global/global-interface';

import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {AmenitiesComponent} from '../../components/amenities/amenities.component';

@Component({
    selector: 'school-module',
    templateUrl: './app/modules/school/school.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, AmenitiesComponent],
    providers: [],
    inputs:['locData']
})
export class SchoolModule implements OnInit{
    public locData:any;
    public hasFooterButton: boolean;
    public listData: Object;
    public listView: Object;
    public tileData: Object;
    public index: number = 0;
    public moduleTitle: string;
    public profileType: string;

    @Input() schoolData: any;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
      this.profileType = this.router.hostComponent.name;
    }

    left(){
        if(this.schoolData === null){
            return false;
        }

        var max = this.schoolData.elementary.length - 1;

        if(this.index > 0){
            this.index -= 1;
            this.dataFormatter();
        }else{
            this.index = max;
            this.dataFormatter();
        }
    }
    right(){
        if(this.schoolData === null){
            return false;
        }

        var max = this.schoolData.elementary.length - 1;

        if(this.index < max){
            this.index += 1;
            this.dataFormatter();
        }else{
            this.index = 0;
            this.dataFormatter();
        }
    }

    dataFormatter(){
      var data = this.schoolData;
      if(data.elementary.length === 0){
          return false;
      }
      var schoolData = data['meta'];
      var elementaryData = data.elementary[this.index];
      var schoolName =  this.globalFunctions.toTitleCase(elementaryData.school_name);
      schoolName = schoolName.replace("Elementary", "Elem");
      schoolName = schoolName.replace("Elem", "Elementary");
      this.listData = {
        hasHoverNoSubImg: false,
        header: "What Schools are in the Area?",
        name: schoolData.city + ', ' + schoolData.state,
        establishment: schoolName,
        address: elementaryData.type,
        imageUrl: schoolData.locationImage,
        url: 'School-lists-page',
        paramOptions: {
                    listname: 'elementary',
                    city: schoolData.city,
                    state: schoolData.state
                  },
        listView: [
          {
            icons: 'fa-pencil',
            category: "Elementary Schools",
            count: schoolData.elementaryCount + " near this listing",
            url: 'School-lists-page',
            paramOptions: {
                        listname: 'elementary',
                        city: schoolData.city,
                        state: schoolData.state
                      },
            viewMore: "See All"
          },
          {
            icons: 'fa-child',
            category: "Middle Schools",
            count: schoolData.middleCount + " near this listing",
            url: 'School-lists-page',
            paramOptions: {
                        listname: 'middle',
                        city: schoolData.city,
                        state: schoolData.state
                      },
            viewMore: "See All"
          },
          {
            icons: 'fa-graduation-cap',
            category: "High Schools",
            count: schoolData.highCount + " near this listing",
            url: 'School-lists-page',
            paramOptions: {
                        listname: 'high',
                        city: schoolData.city,
                        state: schoolData.state
                      },
            viewMore: "See All"
          }
        ]
      }//listData ends
      // get data for tiles
      this.tileData = {
          button_txt: 'Open Page',
          url1: 'School-lists-page',
          paramOptions1: {
                      listname: 'elementary',
                      city: schoolData.city,
                      state: schoolData.state
                    },
          icon1: 'fa-pencil',
          title1: 'Elementary Schools',
          desc1: '',

          url2: 'School-lists-page',
          paramOptions2: {
                      listname: 'middle',
                      city: schoolData.city,
                      state: schoolData.state
                    },
          icon2: 'fa-child',
          title2: 'Middle Schools',
          desc2: '',

          url3: 'School-lists-page',
          paramOptions3: {
                      listname: 'high',
                      city: schoolData.city,
                      state: schoolData.state
                    },
          icon3: 'fa-graduation-cap',
          title3: 'High Schools',
          desc3: ''
      }

    }//dataFormatter ends

    //Build Module Title
    setModuleTitle(){
        if(this.profileType === 'LocationPage'){
            //Location Crime Module
            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(this.locData.city);
            paramCity = this.globalFunctions.toTitleCase(paramCity.replace(/%20/g, " "));
            var paramState: string = this.locData.state;
            this.moduleTitle = 'Schools in ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Crime Module
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');
            this.moduleTitle = 'Schools in ' + address + ' ' + paramCity + ', ' + paramState;
        }
    }

    ngOnInit(){
      this.setModuleTitle();
      this.hasFooterButton = false;
    }// end ngOnInit

    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentSchoolData = event.schoolData.currentValue;
        //If the data input is valid run transform data function
        if(currentSchoolData !== null && currentSchoolData !== false){
          // Perform try catch to make sure module doesnt break page
          try{
              //If featured list data has no list data (length of 0) throw error to hide module
              if(this.schoolData.elementary.length === 0){
                  throw 'No Data available for school list - hiding module';
              }

              this.dataFormatter();
          }catch(e){
              console.log('Error - School List Module ', e);
              this.schoolData = undefined;
          }
          this.dataFormatter();
       }
    }// end On Change Call
}
