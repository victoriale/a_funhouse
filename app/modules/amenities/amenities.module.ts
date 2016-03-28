/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {AmenitiesComponent} from '../../components/amenities/amenities.component';
import {AmenitiesNearListingInterface} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'amenities-module',
    templateUrl: './app/modules/amenities/amenities.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, AmenitiesComponent, ROUTER_DIRECTIVES],
})
export class AmenitiesModule implements OnInit{
    public hasFooterButton: boolean;
    public moduleTitle: string;
    public profileType: string;

    public listData: Object;
    public tileData: Object;
    public index: number = 0;

    provider_logo = './app/public/amenities_yelp.png';

    @Input() amenitiesData: any;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
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

    left(){
        if(this.amenitiesData === null){
            return false;
        }
        var data = this.amenitiesData;
        var dataLists = data['restaurant']['businesses'];
        var max = dataLists.length - 1;

        if(this.index > 0){
            this.index -= 1;
            this.dataFormatter();
        }else{
            this.index = max;
            this.dataFormatter();
        }
    }
    right(){
        if(this.amenitiesData === null){
            return false;
        }
        var data = this.amenitiesData;
        var dataLists = data['restaurant']['businesses'];
        var max = dataLists.length - 1;
        if(this.index < max){
            this.index += 1;
            this.dataFormatter();
        }else{
            this.index = 0;
            this.dataFormatter();
        }
    }

    dataFormatter(){
      var data = this.amenitiesData;
      if(data.restaurant.length === 0){
          return false;
      }
      var dataLists = data['restaurant']['businesses'];
      var listData = dataLists[this.index];
      var loc = listData['location']['city'] + ', ' + listData['location']['state_code'] + ' ' + listData['location']['postal_code'];
      var address = listData['location']['address'];
      var imageURL = dataLists[this.index].image_url;

      this.listData = {
        hasHoverNoSubImg: true,
        header: "What's the Highest Rated Restaurant in this area?",
        name: loc,
        establishment: listData.name,
        imageUrl: listData.image_url,
        address: address[0],
        location: loc,
        originalUrl: listData.url,
        url: 'Amenities-lists-page',//for the see the list button
        paramOptions:
                  {
                    listname: 'restaurant',
                    city: listData['location'].city,
                    state: listData['location'].state_code
                  },
        listView: [//data for amenities component tiles
            {
              icons: 'fa-cutlery',
              category: "Restaurants",
              count: data['restaurant'].total + " near this listing",
              url: 'Amenities-lists-page',
              paramOptions:
                        {
                          listname: 'restaurant',
                          city: listData['location'].city,
                          state: listData['location'].state_code
                        },
              viewMore: "See All"
            },
            {
              icons: 'fa-shopping-cart',
              category: "Groceries Stores",
              count: data['grocers'].total + " near this listing",
              url: 'Amenities-lists-page',
              paramOptions:
                        {
                          listname: 'grocers',
                          city: listData['location'].city,
                          state: listData['location'].state_code
                        },
              viewMore: "See All"
            },
            {
              icons: 'fa-dollar',
              category: "Banks",
              count: data['banks'].total + " near this listing",
              url: 'Amenities-lists-page',
              paramOptions:
                        {
                          listname: 'banks',
                          city: listData['location'].city,
                          state: listData['location'].state_code
                        },
              viewMore: "See All"
            }
          ]
      }//end data for listData
      // get data for tiles
      this.tileData = {
          button_txt: 'Open Page',
          url1: 'Amenities-lists-page',
          paramOptions1: {
                      listname: 'restaurant',
                      city: listData['location'].city,
                      state: listData['location'].state_code
                    },
          icon1: 'fa-cutlery',
          title1: 'Nearby Restaurants',
          desc1: '',

          url2: 'Amenities-lists-page',
          paramOptions2: {
                      listname: 'grocers',
                      city: listData['location'].city,
                      state: listData['location'].state_code
                    },
          icon2: 'fa-shopping-cart',
          title2: 'Nearby Groceries',
          desc2: '',

          url3: 'Amenities-lists-page',
          paramOptions3: {
                      listname: 'banks',
                      city: listData['location'].city,
                      state: listData['location'].state_code
                    },
          icon3: 'fa-dollar',
          title3: 'Nearby Banks',
          desc3: ''
      }
    }

    ngOnInit(){
        this.hasFooterButton = false;
        this.setModuleTitle();
    }
    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentAmenitiesData = event.amenitiesData.currentValue;
        //If the data input is valid run transform data function
        if(currentAmenitiesData !== null && currentAmenitiesData !== false) {

            // Perform try catch to make sure module doesnt break page
            try{
                //If featured list data has no list data (length of 0) throw error to hide module
                if(this.amenitiesData.restaurant.businesses.length === 0){
                    throw 'No Data available for Amenities list - hiding module';
                }

                this.dataFormatter();
            }catch(e){
                console.log('Error - Amenities List Module ', e);
                this.amenitiesData = undefined;
            }
            this.dataFormatter();
        }
    }
}
