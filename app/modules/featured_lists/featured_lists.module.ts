import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {FeatureComponent} from '../../components/feature-list/feature-list.component';
import {FeaturedListInterface} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'featured-lists-module',
    templateUrl: './app/modules/featured_lists/featured_lists.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, FeatureComponent],
    providers: []
})

export class FeaturedListsModule implements OnInit{
    public profileType: string;
    public moduleTitle: string;
    public tileData: Object;
    public listData: Object;
    public index: number = 0;
    @Input() featuredListData: any;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
    }

    //Build Module Title
    setModuleTitle(){
        if(this.profileType === 'LocationPage'){
            //Location Featured List Module

            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(paramLocation.split('_')[0]);
            var paramState: string = paramLocation.split('_')[1];

            this.moduleTitle = 'Featured Lists for ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Crime Module
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');

            this.moduleTitle = 'Featured List for ' + address + ' ' + paramCity + ', ' + paramState;
        }
    }

    left(){
        console.log('left - module', this.index);
        if(this.featuredListData === null){
            return false;
        }

        var max = this.featuredListData.listData.length - 1;

        if(this.index > 0){
            this.index -= 1;
            this.transformData();
        }else{
            this.index = max;
            this.transformData();
        }


    }
    right(){
        console.log('right - module', this.index);
        if(this.featuredListData === null){
            return false;
        }

        var max = this.featuredListData.listData.length - 1;

        if(this.index < max){
            this.index += 1;
            this.transformData();
        }else{
            this.index = 0;
            this.transformData();
        }
    }

    //Initialization Call
    ngOnInit(){
        this.setModuleTitle();
        //Set static data - Will remove when routes further defined
        this.tileData = {
            button_txt: 'Open Page',
            url1: 'Aboutus-page', // this will need to be change
            icon1: 'fa-list-ul',
            title1: 'Real Estate Trending Lists',
            desc1: '',
            url2: 'Aboutus-page',// this will need to be change
            icon2: 'fa-trophy',
            title2: 'Top 10 Lists',
            desc2: '',
            url3: 'Aboutus-page',// this will need to be change
            icon3: 'fa-th-large',
            title3: 'Similar Top 10 Lists',
            desc3: ''
        }

    }

    transformData(){
        var data = this.featuredListData;

        // Exit function if no list data is found
        if(data.listData.length === 0){
            return false;
        }

        var listData = data.listData[this.index];

        //Build heading 2 description
        if((listData.num_bedrooms === null || listData.num_bedrooms === 0) && (listData.num_bathrooms === null || listData.num_bedrooms === 0)){
            //No bedrooms or bathrooms defined
            var heading2 = '';
        }else if((listData.num_bedrooms !== null && listData.num_bedrooms !== 0) && (listData.num_bathrooms === null || listData.num_bathrooms === 0)){
            //Bedrooms defined, bathrooms undefined
            var heading2 = 'Bedrooms: ' + listData.num_bedrooms;
        }else if((listData.num_bedrooms === null || listData.num_bedrooms === 0) && (listData.num_bedrooms !== null && listData.num_bedrooms !== 0)){
            //Bedrooms undefined, bathrooms defined
            var heading2 = 'Bathrooms: ' + listData.num_bathrooms;
        }else if((listData.num_bedrooms !== null && listData.num_bedrooms !== 0) && (listData.num_bedrooms !== null && listData.num_bathrooms !== 0)){
            //Bedrooms and bathrooms defined
            var heading2 = 'Bedrooms: ' + listData.num_bedrooms + ' | Bathrooms: ' + listData.num_bathrooms;
        }

        //Used for both location and listing profile
        this.listData = {
            header: 'Trending Real Estate',
            title: this.globalFunctions.camelCaseToRegularCase(data.listName),
            hding1: listData.full_street_address,
            hding2: listData.city + ', ' + listData.state_or_province + ' ' + listData.postal_code,
            detail1: heading2,
            detail2: listData.listPrice === null ? '' : 'Asking Price: ',
            detail3: listData.list_price === null ? '' : '$' + this.globalFunctions.commaSeparateNumber(listData.list_price),
            imageUrl: listData.photos === null ? null : listData.photos[0]
        }
    }

    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentFeaturedListData = event.featuredListData.currentValue;
        //If the data input is valid run transform data function
        if(currentFeaturedListData !== null && currentFeaturedListData !== false) {
            //Perform try catch to make sure module doesnt break page
            try{
                this.transformData();
            }catch(e){
                console.log('Error - Featured List Module ', e);
                this.featuredListData = undefined;
            }
        }
    }
}
