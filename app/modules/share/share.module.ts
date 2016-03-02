/**
 * Created by Victoria on 2/26/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {Image180} from '../../components/images/image-180/image-180.component';

@Component({
    selector: 'share-module',
    templateUrl: './app/modules/share/share.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, Image180],
    providers: [],
})

export class ShareModule implements OnInit{
    module_title: string;
    image_url = './app/public/img_bckgnd.png';
    share = 'Share [Profile] Below:';
    icon1 = 'fa fa-facebook';
    icon2 = 'fa fa-twitter';
    icon3 = 'fa fa-google-plus';
    icon4 = 'fa fa-pinterest';
    shareOn1 = 'Facebook';
    shareOn2 = 'Twitter';
    shareOn3 = 'Google +';
    shareOn4 = 'Pinterest';
    Url1 = '';
    Url2 = 'https://twitter.com/share';
    Url3 = '';
    Url4 = '';
    main_hasHover = false;

    ngOnInit(){
        this.module_title = 'Share This Profile With Your Friends';
    }
}
