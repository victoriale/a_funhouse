import {Component, OnInit} from 'angular2/core';

import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {FeatureComponent} from '../../components/feature-list/feature-list.component';

@Component({
    selector: 'featured_lists-module',
    templateUrl: './app/modules/featured_lists/featured_lists.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, FeatureComponent],
    providers: []
})

export class FeaturedListsModule implements OnInit{
    module_title: string;
    tile_data: Object;
    list_data: Object;

    left(){
        console.log('left - module');
    }
    right(){
        console.log('right - module');
    }

    ngOnInit(){
        this.module_title = 'Featured Lists for [Listing Name]';
        this.tile_data = {
            button_txt: 'Open Page',
            url1: '',
            icon1: 'fa-list-ul',
            title1: 'Trending Lists',
            desc1: '',
            url2: '',
            icon2: 'fa-trophy',
            title2: '[Listing Location] Top 10 Lists',
            desc2: '',
            url3: '',
            icon3: 'fa-th-large',
            title3: 'Similar Top 100 Lists',
            desc3: ''
        }
        this.list_data = {
            header: 'Trending Real Estate',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
            hding1: '[Listing Address]',
            hding2: '[Listing Name] [Zip Code] - [Neighborhood]',
            detail1: 'Bedrooms: 3 | Bathrooms: 2',
            detail2: 'Asking Price: ',
            detail3: '$[###,###]'
        }

    }
}