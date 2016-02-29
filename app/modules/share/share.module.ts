/**
 * Created by Victoria on 2/26/2016.
 */
import {Component} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";

@Component({
    selector: 'share-module',
    templateUrl: './app/modules/share/share.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: [],
})

export class ShareModule{
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
    Url2 = '';
    Url3 = '';
    Url4 = '';
}

