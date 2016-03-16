/**
 * Created by Victoria on 3/2/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";
import {PropertyListingInterface} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'media-features-module',
    templateUrl: './app/modules/media_features/media_features.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, MediaImages],
    providers: [],
})

export class MediaFeatureModule implements OnInit{
    public moduleTitle: string;
    public trending: boolean;
    public prop_features: any;
    public profileType: string;
    image_url = './app/public/placeholder_XL.png';
    featureHeading = "Features Of This Property";
    lastUpdate = "Last Updated: Thursday, March 03, 2016";

    @Input() propertyListingData: PropertyListingInterface;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
    }

    getData(){
      var data = this.propertyListingData;
      console.log('media feature data: ', data);
    }

    //Build Module Title
    setModuleTitle(){

        if(this.profileType === 'LocationPage'){
            //Location Crime Module
            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(paramLocation.split('_')[0]);
            var paramState: string = paramLocation.split('_')[1];

            this.moduleTitle = 'Property Images, Media & Features for ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Crime Module
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');

            this.moduleTitle = 'Property Images, Media & Features for ' + address + ' ' + paramCity + ', ' + paramState;
        }
    }
    ngOnInit(){
      this.setModuleTitle();
        this.trending = false;
        this.getData();
        this.prop_features = [
          {
            details: "Price: $749,000"
          }
        ];
    }

    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentPropertyListingData = event.propertyListingData.currentValue;
        //If the data input is valid run transform data function
        if(currentPropertyListingData !== null && currentPropertyListingData !== false){
            this.getData();
        }
    }
}
