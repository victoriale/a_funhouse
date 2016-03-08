/**
 * Created by Victoria on 3/2/2016.
 */
import {Component, OnInit, Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";

@Component({
    selector: 'media-features-module',
    templateUrl: './app/modules/media_features/media_features.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, MediaImages],
    providers: [],
    inputs: ['feature_type']
})

export class MediaFeatureModule implements OnInit{
    module_title: string;
    image_url = './app/public/placeholder_XL.png';
    featureHeading = "Features Of This Property";
    lastUpdate = "Last Updated: Thursday, March 03, 2016";
    details = "Price: $749,000";
    ngOnInit(){
        this.module_title = 'Property Images, Media & Features for [Profile Name]';
    }
}

