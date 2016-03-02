/**
 * Created by Victoria on 2/25/2016.
 */
import {Component} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";

@Component({
    selector: 'tiles-component',
    templateUrl: './app/components/tiles/tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: [],
})

export class TilesComponent{
    button_txt = 'Open Page';
    url1 = '';
    icon1 = 'fa fa-info-circle';
    title1 = 'About Us';
    desc1 = '';
    url2 = '';
    icon2 = 'fa fa-phone';
    title2 = 'Contact Us';
    desc2 = '';
    url3 = '';
    icon3 = 'fa fa-folder-open-o';
    title3 = 'Disclaimer';
    desc3 = '';

}