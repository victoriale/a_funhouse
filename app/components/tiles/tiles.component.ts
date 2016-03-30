/**
 * Created by Victoria on 2/25/2016.
 */
import {Component, Input, OnInit, OnChanges} from 'angular2/core';
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
    
    ngOnChanges(){
      if(typeof this.tile_data != 'undefined'){
        var tile_data = this.tile_data;
        console.log("Tiles Data",tile_data);
    }
    }
    ngOnInit(){}
}
