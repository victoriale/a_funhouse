import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {moduleHeader} from '../../components/module-header/module-header';

declare var google:any;
declare var jQuery:any;

@Component({
    selector: 'map-module',
    templateUrl: './app/modules/map/map.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: []
})

export class MapModule implements OnInit{
    public moduleTitle: string = 'Map for nearby listings';

    ngOnInit(){

    }
}