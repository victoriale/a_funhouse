import {Component, provide, OnInit,ViewEncapsulation, ViewChild, ElementRef, Injector} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MagazineMap} from "../../../global/global-mag-service";
import {MapMarkerComponent} from "../../../components/mapMarker/mapMarker.component";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagNeighborhood} from "../../../global/global-interface";

declare var google:any;
declare var jQuery:any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'magazine-map-module',
    templateUrl: './app/modules/magazine/mag-map/mag-map.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MapMarkerComponent],
    providers: [MagazineMap],
})


export class MagMapModule implements OnInit {
    imgURL:string;
    imgAddress:string;
    address:string;
    data:MagNeighborhood;

    constructor(private _injector:Injector, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineMap() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.data = magData.neighborhood.neighbors;
                    var myLatlng = new google.maps.LatLng(parseFloat(this.data[0].address.lat), parseFloat(this.data[0].address.lng));
                    var mapOptions = {
                        zoom: 12,
                        center: myLatlng
                    };
                    $('.mag_n1_img').css("background-image", 'url(' + this.data[0].photos[0] + ')');
                    this.imgAddress = this.data[0].address.fullStreetAddress;
                    this.imgURL = 'magazine/' + this.data[0].key + '/overview';
                    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                    for (var i = 0; i < this.data.length; i++) {
                        var home = new google.maps.LatLng(parseFloat(this.data[i].address.lat), parseFloat(this.data[i].address.lng));
                        if (+this.data[i].price >= 1000000) {
                            var priceString = "$" + (Math.round(+this.data[i].price / 100000) / 10) + "M";
                        }
                        else if (+this.data[i].price <= 999) {
                            var priceString = "$" + +this.data[i].price;
                        } else {
                            var priceString = "$" + (Math.round(+this.data[i].price / 1000)) + "K";
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
                        infoWindow.open(map);
                        google.maps.event.addListener(infoWindow, 'domready', function () {
                            var infoWindow = jQuery('.gm-style-iw');
                            infoWindow.prev().addClass('hide');
                            infoWindow.next().addClass('hide');
                            infoWindow.parent().addClass('zSize');
                            jQuery('.googleMap_item').click(function () {
                                var clicked = event.target;
                                var index = this.id;
                                jQuery('.mag_n1_img').css("background-image", 'url(' + magData.neighborhood.neighbors[index].photos[0] + ')');
                                jQuery('.mag_n1_img_text').html(magData.neighborhood.neighbors[index].address.fullStreetAddress);
                                $('.mag_n1_img_view').attr("href", 'magazine/' + magData.neighborhood.neighbors[index].key + '/overview');
                                //e.preventDefault();
                                $('.googleMap_item').removeClass('focus');
                                $(this).addClass('focus');
                            });
                        });
                    }
                },
                err => console.log("error in getData", err)
            );
    }
    ngOnInit() {
        this.getMagazineMap();
    }
}