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
                var home = new google.maps.LatLng(this.data[i]);

                if ( this.data[i].list_price >= 1000000 ) {
                    var priceString = "$" + (Math.round(this.data[i].list_price/100000)/10) + "M";
                } else {
                    var priceString = "$" + (Math.round(this.data[i].list_price/1000)) + "K";
                }
                if ( i == 0 ) {
                    var winString = '<div class="map_item focus" id="' + i + '">' + priceString + '</div>';
                } else {
                    var winString = '<div class="map_item" id="' + i + '">' + priceString + '</div>';
                }
                var infoWindow = new google.maps.InfoWindow({
                    content: winString,
                    position: home
                });
                infoWindow.open(map);
                //google.maps.event.addListener(infoWindow, 'domready', function(){
                //    $('.gm-style-iw').prev().addClass('hide'); $('.gm-style-iw').next().addClass('hide');
                //    $('.gm-style-iw').parent().addClass('zSize');
                //});
                var marker = new google.maps.Marker({
                    position: home,
                    map: map,
                    //title: priceString,
                    //icon: image,
                });
            }
// To add the marker to the map, call setMap();
            marker.setMap(map);
        });
    }//google.maps.event.addListener(infoWindow, 'domready', function(){
//    document.getElementsByClassName('.gm-style-iw').prev().classList('hide'); document.getElementsByClassName('.gm-style-iw').next().classList('hide');
//    document.getElementsByClassName('.gm-style-iw').parent().classList('zSize');
//});
}