/**
 * Created by Victoria on 3/4/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {CircleButton} from "../../components/buttons/circle/circle.button";

@Component({
    selector: 'media-images',
    templateUrl: './app/components/media-images/media-images.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [CircleButton],
    inputs: ['']
})
export class MediaImages implements OnInit {
    public trending: boolean;

    image_url = './app/public/placeholder_XL.png';
    list_name = "[Listing Name] [Zip Code]";
    list_addr = "[Listing Address]";
    list_day = "Days on the market: [##]";

    detail1 = "[#,###]";
    unit1 = "SQ FT";
    detail2 = "[#,###]";
    unit2 = "ACRES";
    price = "$[###,###]";
    price_name = "SALE PRICE";

    ngOnInit(){
        this.trending = true;
        console.log(this);
    }
}