import {Component, Input, OnChanges} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {moduleHeader} from '../../components/module-header/module-header';
import {GlobalFunctions} from '../../global/global-functions';

declare var google:any;

@Component({
    selector: 'map-module',
    templateUrl: './app/modules/map/map.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: []
})

export class MapModule implements OnChanges{
    public moduleTitle: string;
    @Input() mapData: Array<any>;

    constructor(private _params: RouteParams, private globalFunctions: GlobalFunctions){
        var paramAddress = this._params.get('address').split('-');
        var paramState = paramAddress[paramAddress.length -1];
        var paramCity = paramAddress [paramAddress.length - 2];
        var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
        var address = tempArr.join(' ');

        this.moduleTitle = 'Map of ' + address + ' and its Surrounding Area';
    }

    drawMap(){
        var data = this.mapData;

        //Get Default Center of map. Iterate through data to find first listing with both latitude and longitude (This listing will be the center of the map)
        for(var i = 0; i < data.length; i++){
            if(data[i].latitude !== null && data[i].longitude){
                var latLng = new google.maps.LatLng(parseFloat(data[i].latitude), parseFloat(data[i].longitude));
                var mapOptions = {
                    zoom: 10,
                    center: latLng
                };
                break;
            }
        }

        //Create Map
        var map = new google.maps.Map(document.getElementById("map-module"), mapOptions);
        //Define new info window
        var infoWindow = new google.maps.InfoWindow();
        var self = this;

        data.forEach(function(item, index){
            //Get object for home
            var homePosition = new google.maps.LatLng(Number(item.latitude), Number(item.longitude));

            //Create markers
            var marker = new google.maps.Marker({
                position: homePosition,
                map: map,
                title: item.fullStreetAddress + ', ' + item.loc + ' ' + item.postalCode,
                icon: './app/public/icons/Icon_Home_Unselected.png'
            });

            //Get data to push to info window template (infoTemplate)
            var viewProfileUrl = '/listing/' + item.addressKey;
            var listingImage = item.listingImage === null ? '/app/public/joyfulhome_house.png' : item.listingImage;
            var lineOne = item.fullStreetAddress + ', ' + item.loc + ' ' + item.postalCode;
            var lineTwo = '$' + self.globalFunctions.commaSeparateNumber(item.listPrice);
            lineTwo = item.livingArea === null ? lineTwo : lineTwo + ' | ' + self.globalFunctions.commaSeparateNumber(item.livingArea) + ' sq. ft';

            var infoTemplate = '<div style="font-family: Lato; font-size: 16px; line-height: 20px"><div style="width: 60px; height: 60px; margin-right: 10px; border-radius: 50%; border: 2px solid #ccc; float: left; background-size: cover; background-image: url(\'' + listingImage +'\')"></div><span style="font-weight: 700">' + lineOne + '</span><br>' + lineTwo + '<br>' + '<a id="map-view-profile" href="'+ viewProfileUrl + '" style="text-decoration: none; color: #000; font-size: 14px; color: #44b244; font-weight: 500">View Profile</a></div>';

            //Add click event to markers
            google.maps.event.addListener(marker, 'click', function(){
                //Set info window template to info window
                infoWindow.setContent(infoTemplate);
                infoWindow.open(map, marker);
            });

        });

    }

    ngOnChanges(event){
        this.drawMap();
    }
}