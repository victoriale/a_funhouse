import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {imageHeader} from "../../components/image-header/image-header";
declare var jQuery: any;

@Component({
    selector: 'find-your-home-module',
    templateUrl: './app/modules/find-your-home/find-your-home.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, imageHeader],
    providers: [],
})

export class FindYourHomeModule {
    public module_title: string;
    public image_url: string;

    ngOnInit() {
        this.module_title = "Find Your Next Joyful Home";
        this.image_url = "app/public/filter_background.jpg";
    }

    // Make sure user can only select one option
    onClick() {
        jQuery('input[type="checkbox"]').on('change', function() {
            jQuery('input[name="' + this.name + '"]').not(this).prop('checked', false);
        });
    }

}