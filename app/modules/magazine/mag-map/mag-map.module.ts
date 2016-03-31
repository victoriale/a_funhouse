import {Component, provide, OnInit,ViewEncapsulation, ViewChild, ElementRef, Injector} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';
import {MapMarkerComponent} from "../../../components/mapMarker/mapMarker.component";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagNeighborhood} from "../../../global/global-interface";
import {WebApp} from "../../../app-layout/app.layout";

declare var google:any;
declare var jQuery:any;

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'magazine-map-module',
    templateUrl: './app/modules/magazine/mag-map/mag-map.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MapMarkerComponent, ROUTER_DIRECTIVES],
})


export class MagMapModule implements OnInit {
    imgURL:string;
    imgAddress:string;
    address:string;
    data:MagNeighborhood;
    profileData:MagNeighborhood;
    public partnerID:string;

    constructor(private _router:Router, private _injector:Injector, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this._router.root
            .subscribe(
                route => {
                  var curRoute = route;
                  var partnerID = curRoute.split('/');
                  if(partnerID[0] == ''){
                    this.partnerID = null;
                  }else{
                    this.partnerID = partnerID[0];
                  }
                  this.getMagazineMap();
                }
            )//end of route subscribe
    }

    getMagazineMap() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.data = magData.neighborhood.neighbors;
                    this.profileData = magData.neighborhood.address;
                    var partnerUrl = this.partnerID;
                    for (var i = 0; i < magData.neighborhood.neighbors.length; i++) {
                        if (magData.neighborhood.neighbors[i].address.lng != null && magData.neighborhood.neighbors[i].address.lat != null) {
                            if (magData.neighborhood.address.lat != null && magData.neighborhood.address.lat != null && i < 1){
                                var myLatlng = new google.maps.LatLng(parseFloat(this.profileData[0].lat), parseFloat(this.profileData[0].lat));
                            } else {
                                var myLatlng = new google.maps.LatLng(parseFloat(this.data[i].address.lat), parseFloat(this.data[i].address.lng));
                            }
                            if (this.data[i].photos[0] != null) {
                                jQuery('.mag_n1_img').css("background-image", 'url(' + this.data[i].photos[0] + ')');
                            }
                            else {
                                jQuery('.mag_n1_img').css("background-image", 'url(app/public/no_photo_images/Joyfulhome-Magazine_Image-Placeholder_No-Image.jpg)');
                            }
                            this.imgAddress = this.data[i].address.fullStreetAddress;
                            if (partnerUrl == null) {
                                this.imgURL = 'magazine/' + this.data[i].key + '/overview';
                            } else {
                                this.imgURL = partnerUrl + '/magazine/' + this.data[i].key + '/overview';
                            }
                            var mapOptions = {
                                zoom: 12,
                                center: myLatlng
                            };
                            break;
                        }
                    }
                    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                    for (var i = 0; i < magData.neighborhood.neighbors.length; i++) {
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
                                var index = this.id;
                                if (magData.neighborhood.neighbors[index].photos[0] != null) {
                                    jQuery('.mag_n1_img').css("background-image", 'url(' + magData.neighborhood.neighbors[index].photos[0] + ')');
                                } else {
                                    jQuery('.mag_n1_img').css("background-image", 'url(url(app/public/no_photo_images/Joyfulhome-Magazine_Image-Placeholder_No-Image.jpg))');
                                }
                                jQuery('.mag_n1_img_text').html(magData.neighborhood.neighbors[index].address.fullStreetAddress);
                                if (partnerUrl == null) {
                                    jQuery('.mag_n1_img_view').attr("href", 'magazine/' + magData.neighborhood.neighbors[index].key + '/overview');
                                } else {
                                    jQuery('.mag_n1_img_view').attr("href", partnerUrl + '/magazine/' + magData.neighborhood.neighbors[index].key + '/overview');
                                }
                                jQuery('.googleMap_item').removeClass('focus');
                                jQuery(this).addClass('focus');
                            });
                        });
                    }
                },
                err => console.log("error in getData", err)
            );
    }

    ngOnInit() {

    }
}
