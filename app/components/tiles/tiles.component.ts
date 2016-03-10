/**
 * Created by Victoria on 2/25/2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";

@Component({
    selector: 'tiles-component',
    templateUrl: './app/components/tiles/tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
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
                url1: '',
                icon1: 'fa-info-circle',
                title1: 'About Us',
                desc1: 'What is Joyful Home?',
                url2: '',
                icon2: 'fa-phone',
                title2: 'Contact Us',
                desc2: 'Help us help you faster.',
                url3: '',
                icon3: 'fa-folder-open-o',
                title3: 'Disclaimer',
                desc3: 'Read the full disclaimer.'
            }
        }
    }

}