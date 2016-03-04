import {Component, provide, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MagazineMap} from "../../../global/global-service";
import {MagMapData} from "../../../global/global-interface";


@Component({
    selector: 'magazine-map-module',
    templateUrl: './app/modules/magazine/mag-map/mag-map.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [MagazineMap],
    styles: [`
    .sebm-google-map-container {
       height: 24.896vw;
     }
     .test1 {
     width: 100px;
  `],
})


export class MagMapModule implements OnInit {
    data:MagMapData[];

    constructor(private _magazineMapService:MagazineMap) {
    }

    getMagazineMap() {
        this._magazineMapService.getMagazineMap().then(data => {
            this.data = data;
            console.log(data);
        });
    }


    ngOnInit() {
        this._magazineMapService.getMagazineMap().then(data => {
            this.data = data;

            var myLatlng = new google.maps.LatLng(this.data[1]);
            var mapOptions = {
                zoom: 12,
                center: myLatlng
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            for (var i = 0; i < data.length; i++) {
                var home = this.data[i];
                console.log(home);
                var marker = new google.maps.Marker({
                    position: {lat: home[1], lng: home[2]},
                    map: map,
                });
            }
// To add the marker to the map, call setMap();
            marker.setMap(map);
        });
    }
}