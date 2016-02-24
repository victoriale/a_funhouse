import {Component} from 'angular2/core';
import {Image100} from '../../components/images/image-100/image-100.component';

@Component({
    selector: 'title-loc-component',
    templateUrl: './app/components/title/title_loc.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image100],
})
export class TitleLocComponent{
    titleImg = './app/public/img_bckgnd.png';
    lastUpdate = 'Monday, February 23, 2016';
    city = '[City]';
    state = '[State]';
    listings = '[##]';
    listings_name = 'Listings Available for Sale'
}