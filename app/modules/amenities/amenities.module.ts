/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from '../../components/module-header/module-header';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {AmenitiesComponent} from '../../components/amenities/amenities.component';

@Component({
    selector: 'amenities-module',
    templateUrl: './app/modules/amenities/amenities.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, AmenitiesComponent],
    providers: []
})
export class AmenitiesModule implements OnInit{
    public hasFooterButton: boolean;
    module_title: string;
    tile_data: Object;
    list_data: Object;
    provider_logo = './app/public/amenities_yelp.png';
    left(){
        console.log('left - module');
    }
    right(){
        console.log('right - module');
    }

    ngOnInit(){
        this.hasFooterButton = true;
        this.module_title = 'Top Rated Amenities In and Around [Listing Name]';
        this.tile_data = {
            button_txt: 'Open Page',
            url1: '',
            icon1: 'fa-cutlery',
            title1: 'Nearby Restaurants',
            desc1: '',
            url2: '',
            icon2: 'fa-shopping-cart',
            title2: 'Nearby Groceries',
            desc2: '',
            url3: '',
            icon3: ' fa-dollar',
            title3: 'Nearby Banks',
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
