import {Component, OnInit} from 'angular2/core';
import {Input} from "angular2/core";

@Component({
    selector: 'mapmarker-component',
    templateUrl: './app/components/mapMarker/mapMarker.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
})

export class MapMarkerComponent{
    @Input() mID: number;
    @Input() price: string;
    @Input() focus: boolean;
    ngOnInit() {
        var infoWindow = new google.maps.InfoWindow({
            content: winString,
            position: home
        });
        infoWindow.open(map);

    }
}