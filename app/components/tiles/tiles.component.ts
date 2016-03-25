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
    // paramOption1: Object;
    // paramOption2: Object;
    // paramOption3: Object;
    ngOnChanges(){
    //   if(typeof this.tile_data != 'undefined'){
    //     console.log(this.tile_data);
    //     var tile_data = this.tile_data;
    //     console.log('tile data', tile_data);
    //     console.log(tile_data.category1, tile_data.state_code, tile_data.city);
    //     this.paramOption1 = {listname: tile_data.category1, state: tile_data.state_code, city: tile_data.city};
    //     this.paramOption2 = {listname: tile_data.category1, state: tile_data.state_code, city: tile_data.city};
    //     this.paramOption3 = {listname: tile_data.category1, state: tile_data.state_code, city: tile_data.city};
    //     console.log('param', this.paramOption1);
    //   }
    }
    ngOnInit(){}
}
