/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {MapMarkerComponent} from '../../components/mapMarker/mapMarker.component';
import {InfoListComponent} from "../../components/info-list/info-list.component";

@Component({
    selector: 'Amenities-list-page',
    templateUrl: './app/webpages/amenities-lists/amenities-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListMenuComponent, DropdownComponent, MapMarkerComponent, InfoListComponent],
})

export class AmenitiesListPage implements OnInit{
  provider_logo = './app/public/yelp_logo.png';
  // amenitiesData: Object;
  amenitiesData = [
    {
        counter: '1',
        bgClass: 'odd',
        address: '[Listing Address]',
        type: '[Home Type]: [#] Beds & [#] Baths',
        line1: 'On The Market Since',
        line2: '[$Value]',
        line3: '[Square Feet] sqft',
        bigImage: './app/public/img_bckgnd.png',
        location1: '[City], [ST]',
        location2: '[Neighborhood]',
        question: 'Want more information about this Amenities?',
        buttonName: 'View on Yelps'
    }
  ]
  ngOnInit(){

  }
}
