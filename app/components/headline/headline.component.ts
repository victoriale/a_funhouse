/**
 * Created by Victoria on 2/23/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'headline-component',
    templateUrl: './app/components/headline/headline.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
})
export class HeadlineComponent{
    heading= 'About';
    name = '[Listing Name]';
    icon = 'fa fa-map-marker';
}