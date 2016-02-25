/**
 * Created by Victoria on 2/25/2016.
 */
import {Component} from 'angular2/core';
@Component({
    selector: 'tiles-component',
    templateUrl: './app/components/tiles/tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
})

export class TilesComponent{
    url = ''
    icon = 'fa fa-info-circle';
    title = 'About Us';
    desc = 'Kickstarter artisan meditation chillwave offal ethical. Kinfolk health goth deep v, put a bird on it locavore letterpress';
    button_txt = 'Open Page';
}