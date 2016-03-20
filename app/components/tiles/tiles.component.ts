/**
 * Created by Victoria on 2/25/2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'tiles-component',
    templateUrl: './app/components/tiles/tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, ROUTER_DIRECTIVES],
    providers: [],
    inputs: ['tile_data']
})

export class TilesComponent implements OnInit{
    tile_data: Object;

    ngOnInit(){
        //Check if tile_data exists
        if(typeof this.tile_data === 'undefined'){
            this.tile_data = {
              button_txt: 'Open Page',
              url1: 'Aboutus-page',
              icon1: 'fa-info-circle',
              title1: 'About Us',
              desc1: 'What is Joyful Home?',
              url2: 'Contactus-page',
              icon2: 'fa-phone',
              title2: 'Contact Us',
              desc2: 'Help us help you faster.',
              url3: 'Disclaimer-page',
              icon3: 'fa-folder-open-o',
              title3: 'Disclaimer',
              desc3: 'Read the full disclaimer.'
            }
        }
    }

}
