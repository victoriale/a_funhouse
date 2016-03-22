import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {imageHeader} from "../../components/image-header/image-header";
import {propertyType} from "../../components/property-type/property-type";
import {RangeSliderComponent} from "../../components/range-slider/range-slider.component";

@Component({
    selector: 'find-your-home-module',
    templateUrl: './app/modules/find-your-home/find-your-home.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, imageHeader, propertyType, RangeSliderComponent],
    providers: [],
})

export class FindYourHomeModule {
    public module_title: string;
    public image_url: string;

    ngOnInit() {
        this.module_title = "Find Your Next Joyful Home";
        this.image_url = "app/public/filter_background.jpg";
    }

}