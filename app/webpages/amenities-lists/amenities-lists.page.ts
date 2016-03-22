/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {MapMarkerComponent} from '../../components/mapMarker/mapMarker.component';
import {InfoListComponent} from "../../components/info-list/info-list.component";
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

@Component({
    selector: 'Amenities-list-page',
    templateUrl: './app/webpages/amenities-lists/amenities-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListMenuComponent, DropdownComponent, MapMarkerComponent, WidgetModule, InfoListComponent],
})

export class AmenitiesListPage implements OnInit{
  provider_logo = './app/public/yelp_logo.png';
  infoList: any;

  constructor(private _globalFunctions: GlobalFunctions){}
  dataFormatter(){

  }
  ngOnInit(){
    this.dataFormatter();
    console.log(this);
  }
}
