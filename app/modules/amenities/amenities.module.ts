/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {AmenitiesComponent} from '../../components/amenities/amenities.component';
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
    tile_data: Object;
    amenitiesData: Object;
    listView: Object;
    provider_logo = './app/public/amenities_yelp.png';
    left(){
        console.log('left - module');
    }
    right(){
        console.log('right - module');
    }
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
    ngOnInit(){
        this.hasFooterButton = true;
        this.setModuleTitle();
        this.tile_data = {
            button_txt: 'Open Page',
            url1: '',
            icon1: 'fa-cutlery',
            title1: 'Nearby Restaurants',
            desc1: '',
            url2: '',
            icon2: 'fa-shopping-cart',
            title2: 'Nearby Groceries',
            desc2: '',
            url3: '',
            icon3: ' fa-dollar',
            title3: 'Nearby Banks',
            desc3: ''
        }
        this.amenitiesData = {
          header: "What's the highest rated restaurant in this area?",
          name: '[Listing Name]',
          establishment: '[Establishment]',
          address: '[Listing Name] [Zip Code]',
          location: '[Location]'
        }
    }
}
