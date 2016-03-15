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
    public index: number;
    @Input() featuredListData: FeaturedListInterface;

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

        var max = this.featuredListData.featured_list.length - 1;

        if(this.index > 0){
            this.index -= 1;
            this.transformData();
        }else{
            this.index = max;
            this.transformData();
        }


    }
    right(){
        console.log('right - module');
        if(this.featuredListData === null){
            return false;
        }

        var max = this.featuredListData.featured_list.length - 1;

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
        //Initialize index value
        this.index = 0;

        this.setModuleTitle();
        //Set static data - Will remove when routes further defined
        this.tileData = {
            button_txt: 'Open Page',
            url1: '',
            icon1: 'fa-list-ul',
            title1: 'Trending Lists',
            desc1: '',
            url2: '',
            icon2: 'fa-trophy',
            title2: 'Top 10 Lists',
            desc2: '',
            url3: '',
            icon3: 'fa-th-large',
            title3: 'Similar Top 100 Lists',
            desc3: ''
        }

    }

    transformData(){
        var data = this.featuredListData;

        var listData = data.featured_list[this.index];

        this.listData = {
            header: 'Trending Real Estate',
            title: 'List Title',
            hding1: listData.address,
            hding2: listData.listingName + ' ' + listData.zipcode,
            detail1: 'Bedrooms: ' + listData.bedrooms + ' | Bathrooms: ' + listData.bathrooms,
            detail2: listData.listPrice === null ? '' : 'Asking Price: ',
            detail3: listData.listPrice === null ? '' : '$' + this.globalFunctions.commaSeparateNumber(listData.listPrice),
            imageUrl: listData.listingImage
        }
    }

    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentFeaturedListData = event.featuredListData.currentValue;
        //If the data input is valid run transform data function
        if(currentFeaturedListData !== null && currentFeaturedListData !== false) {
            this.transformData();
        }
    }
}