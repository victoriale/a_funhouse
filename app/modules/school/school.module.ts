/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {AmenitiesComponent} from '../../components/amenities/amenities.component';

@Component({
    selector: 'school-module',
    templateUrl: './app/modules/school/school.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, AmenitiesComponent],
    providers: []
})
export class SchoolModule implements OnInit{
    public hasFooterButton: boolean;
    module_title: string;
    tile_data: Object;
    
    left(){
        console.log('left - module');
    }
    right(){
        console.log('right - module');
    }

    ngOnInit(){
        this.hasFooterButton = false;
        this.module_title = 'School In and Around [Listing Name]';
        this.tile_data = {
            button_txt: 'Open Page',
            url1: '',
            icon1: 'fa-pencil',
            title1: 'Elementary Schools',
            desc1: '',
            url2: '',
            icon2: 'fa-child',
            title2: 'Middle Schools',
            desc2: '',
            url3: '',
            icon3: 'fa-graduation-cap',
            title3: 'High Schools',
            desc3: ''
        }

    }
}
