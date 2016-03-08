/**
 * Created by Victoria on 3/8/2016.
 */
import {Component} from 'angular2/core';
import {CircleButton} from "../../buttons/circle/circle.button";


@Component({
    selector: 'list-vew-carousel',
    templateUrl: './app/components/carousel/list-view/list-view.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [CircleButton],
    providers: [],
})

export class ListViewCarousel {
    heading = "Featured Listing";
    image_url = './app/public/placeholder_XL.png';
    button_url = '';
    listing_price = "$###,###";
    listing_area = "#### sqft";
    listing_addr1 = "123 Test Street";
    listing_addr2 = "City, ST 54321";
}