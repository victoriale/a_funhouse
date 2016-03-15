/**
 * Created by Victoria on 3/2/2016.
 */
import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";
import {PropertyImages} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'media-features-module',
    templateUrl: './app/modules/media_features/media_features.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, MediaImages],
    providers: [],
})

export class MediaFeatureModule implements OnInit{
    module_title: string;
    public trending: boolean;

    image_url = './app/public/placeholder_XL.png';
    featureHeading = "Features Of This Property";
    lastUpdate = "Last Updated: Thursday, March 03, 2016";
    details = "Price: $749,000";
    @Input() propertyImagesData: PropertyImages;
    transformData(){
        var data = this.propertyImagesData;
        //Sanitize city value
    }


    ngOnInit(){
        this.module_title = 'Property Images, Media & Features for [Profile Name]';
        this.trending = false;
    }
    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentPropertyImagesData= event.propertyImagesData.currentValue;
        //If the data input is valid run transform data function
        if(currentPropertyImagesData !== null && currentPropertyImagesData !== false){
            this.transformData();
        }
    }
}
