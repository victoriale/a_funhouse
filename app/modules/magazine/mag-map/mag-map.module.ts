import {Component, provide, OnInit,ViewEncapsulation, ViewChild, ElementRef} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MagazineMap} from "../../../global/global-mag-service";
import {MagMapData} from "../../../global/global-interface";
import {MapMarkerComponent} from "../../../components/mapMarker/mapMarker.component";
import jQuery = require('jquery');


@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'magazine-map-module',
    templateUrl: './app/modules/magazine/mag-map/mag-map.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MapMarkerComponent],
    providers: [MagazineMap],
})


export class MagMapModule implements OnInit {
    data:MagMapData[];

    constructor(private _magazineMapService:MagazineMap) {
    }

    getMagazineMap() {
        this._magazineMapService.getMagazineMap().then(data => {
            this.data = data;
        });
    }

    ngOnInit() {
        this._magazineMapService.getMagazineMap().then(data => {
            this.data = data;
            console.log(this.data);
            var myLatlng = new google.maps.LatLng(this.data[1]);
            var mapOptions = {
                zoom: 12,
                center: myLatlng
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            for (var i = 0; i < data.length; i++) {
                var home = new google.maps.LatLng(this.data[i]);

                if (this.data[i].list_price >= 1000000) {
                    var priceString = "$" + (Math.round(this.data[i].list_price / 100000) / 10) + "M";
                } else {
                    var priceString = "$" + (Math.round(this.data[i].list_price / 1000)) + "K";
                }
                if (i == 0) {
                    var winString = '<div class="googleMap_item focus" id="' + i + '">' + priceString + '</div>';
                } else {
                    var winString = '<div class="googleMap_item" id="' + i + '">' + priceString + '</div>';
                }
                var infoWindow = new google.maps.InfoWindow({
                    content: winString,
                    position: home
                });
                console.log(this.data[i].photo);
                infoWindow.open(map);
                google.maps.event.addListener(infoWindow, 'domready', function () {
                    $('.gm-style-iw').prev().addClass('hide');
                    $('.gm-style-iw').next().addClass('hide');
                    $('.gm-style-iw').parent().addClass('zSize');
                    $('.googleMap_item').click(function() {
                        var index = document.getElementById("id").id;
                        console.log(index);
                        $('.mag_n1_img').css("background-image", 'url('+this.data[index].photo+')');
                    });
                });
            }
        });
    }

}