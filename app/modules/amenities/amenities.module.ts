/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {AmenitiesComponent} from '../../components/amenities/amenities.component';
import {AmenitiesNearListingInterface} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'amenities-module',
    templateUrl: './app/modules/amenities/amenities.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, AmenitiesComponent],
    providers: []
})
export class AmenitiesModule implements OnInit{
    public hasFooterButton: boolean;
    public moduleTitle: string;
    public profileType: string;
    public listData: Object;
    public tileData: Object;
    public index: number = 0;

    listView: Object;
    provider_logo = './app/public/amenities_yelp.png';

    @Input() amenitiesData: any;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
    }

    left(){
        console.log('left - module', this.index);
        if(this.amenitiesData === null){
            return false;
        }

        var max = this.amenitiesData.listData.length - 1;

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
        if(this.amenitiesData === null){
            return false;
        }

        var max = this.amenitiesData.listData.length - 1;

        if(this.index < max){
            this.index += 1;
            this.dataFormatter();
        }else{
            this.index = 0;
            this.dataFormatter();
        }
    }
    //Build Module Title
    setModuleTitle(){
        if(this.profileType === 'LocationPage'){
            //Location Crime Module
            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(paramLocation.split('_')[0]);
            var paramState: string = paramLocation.split('_')[1];
            this.moduleTitle = 'Top Rated Amenities In and Around ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Crime Module
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');
            this.moduleTitle = 'Top Rated Amenities In and Around ' + address + ' ' + paramCity + ', ' + paramState;
        }
    }
    dataFormatter(){
      var data = this.amenitiesData;
      console.log(data);
      this.listData = {

      }
    }
    ngOnInit(){
        this.hasFooterButton = true;
        this.setModuleTitle();
        this.tileData = {
            button_txt: 'Open Page',
            url1: 'Aboutus-page',
            icon1: 'fa-cutlery',
            title1: 'Nearby Restaurants',
            desc1: '',
            url2: 'Contactus-page',
            icon2: 'fa-shopping-cart',
            title2: 'Nearby Groceries',
            desc2: '',
            url3: 'Disclaimer-page',
            icon3: ' fa-dollar',
            title3: 'Nearby Banks',
            desc3: ''
        }
    }
    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentAmenitiesData = event.amenitiesData.currentValue;
        //If the data input is valid run transform data function
        if(currentAmenitiesData !== null && currentAmenitiesData !== false) {

            //Perform try catch to make sure module doesnt break page
            // try{
            //     //If featured list data has no list data (length of 0) throw error to hide module
            //     if(this.amenitiesData.listData.length === 0){
            //         throw 'No Data available for Amenities list - hiding module';
            //     }
            //
            //     this.dataFormatter();
            // }catch(e){
            //     console.log('Error - Amenities List Module ', e);
            //     this.amenitiesData = undefined;
            // }
            this.dataFormatter();
        }
    }
}
