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
    providers: []
})
export class SchoolModule implements OnInit{
    public hasFooterButton: boolean;
    public listData: Object;
    public tileData: Object;
    public index: number = 0;
    public moduleTitle: string;

    @Input() schoolData: any;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){}

    left(){
        console.log('left - module', this.index);
        if(this.schoolData === null){
            return false;
        }

        var max = this.schoolData.listData.length - 1;

        if(this.index > 0){
            this.index -= 1;
            this.dataFormatter();
        }else{
            this.index = max;
            this.dataFormatter();
        }
    }
    right(){
        console.log('right - module', this.index);
        if(this.schoolData === null){
            return false;
        }

        var max = this.schoolData.listData.length - 1;

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
      console.log(data);
    }

    //Build Module Title
    setModuleTitle(){
      var paramLocation: string = this._params.get('loc');
      var paramCity: string = this.globalFunctions.toTitleCase(paramLocation.split('_')[0]);
      var paramState: string = paramLocation.split('_')[1];
      this.moduleTitle = 'Schools in ' + paramCity + ', ' + paramState;
    }

    ngOnInit(){
      this.setModuleTitle();
      this.hasFooterButton = false;
      this.tileData = {
          button_txt: 'Open Page',
          url1: 'Aboutus-page', //THIS WILL NEED TO BE CHANGE
          icon1: 'fa-pencil',
          title1: 'Elementary Schools',
          desc1: '',
          url2: 'Aboutus-page',//THIS WILL NEED TO BE CHANGE
          icon2: 'fa-child',
          title2: 'Middle Schools',
          desc2: '',
          url3: 'Aboutus-page',//THIS WILL NEED TO BE CHANGE
          icon3: 'fa-graduation-cap',
          title3: 'High Schools',
          desc3: ''
      }
    }

    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentSchoolData = event.schoolData.currentValue;
        //If the data input is valid run transform data function
        if(currentSchoolData !== null && currentSchoolData !== false){
            this.dataFormatter();
        }
    }
}
