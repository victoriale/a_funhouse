/**
 * Created by Victoria on 3/2/2016.
 */
import {Component} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";

@Component({
    selector: 'media-features-module',
    templateUrl: './app/modules/media_features/media_features.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: [],
})

export class MediaFeatureModule{
    module_title: string;
    image_url = './app/public/placeholder_XL.png';
    ngOnInit(){
        this.module_title = 'Property Images, Media & Features for [Profile Name]';
    }
}