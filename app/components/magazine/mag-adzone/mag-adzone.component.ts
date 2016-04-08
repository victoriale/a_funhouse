/**
 * Created by Christopher Lynch on 2/24/2016.
 */

import {Component, OnInit} from 'angular2/core';
declare var jQuery: any;

@Component({
    selector: 'adzone-component',
    templateUrl: './app/components/magazine/mag-adzone/mag-adzone.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
})


export class AdzoneComponent implements OnInit {
    onResize(event)
    {
        var embedURL = "http://content.synapsys.us/embeds/realestate/standard/joyful.js";
        var widgetURL = "";  //ad-stack only (solo)
        var domain = "joyfulhome.com";
        if (jQuery('#adzone').width() == 300) {
            var adUnitName = "joyfulhome_com_realestate_magazine_300x250";
        } else if (jQuery('#adzone').width() == 468) {
            var adUnitName = "joyfulhome_com_realestate_magazine_468x60";
        } else if (jQuery('#adzone').width() == 320) {
            var adUnitName = "joyfulhome_com_realestate_magazine_320x50";
        } else {
            // console.log('There be no size!');
            return false;
        }

        var q = {
            dom: domain,
            type: "realestate_solo",
            subd: false,
            remn: false,
            src: embedURL,
            name: adUnitName,
            widU: widgetURL,
            widW: 300,
            widH: 0  //ad-stack only (solo)
        }

        var newScript = document.createElement("script");
        newScript.src = "http://content.synapsys.us/l/n/index-jh.php?" + Object.keys(q).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(q[key])
            }).join("&");
        jQuery('#adzone').html('');
        jQuery('#adzone')[0].appendChild(newScript);
    }
    displayAd() {
        var embedURL = "http://content.synapsys.us/embeds/realestate/standard/joyful.js";
        var widgetURL = "";  //ad-stack only (solo)
        var domain = "joyfulhome.com";
        if (jQuery('#adzone').width() == 300) {
            var adUnitName = "joyfulhome_com_realestate_magazine_300x250";
        } else if (jQuery('#adzone').width() == 468) {
            var adUnitName = "joyfulhome_com_realestate_magazine_468x60";
        } else if (jQuery('#adzone').width() == 320) {
            var adUnitName = "joyfulhome_com_realestate_magazine_320x50";
        } else {
            // console.log('There be no size!');
            return false;
        }

        var q = {
            dom: domain,
            type: "realestate_solo",
            subd: false,
            remn: false,
            src: embedURL,
            name: adUnitName,
            widU: widgetURL,
            widW: 300,
            widH: 0  //ad-stack only (solo)
        }

        var newScript = document.createElement("script");
        newScript.src = "http://content.synapsys.us/l/n/index-jh.php?" + Object.keys(q).map(function (key) {
                return encodeURIComponent(key) + "=" + encodeURIComponent(q[key])
            }).join("&");
        jQuery('#adzone').html('');
        jQuery('#adzone')[0].appendChild(newScript);
    }


    ngOnInit() {
        this.displayAd();
    }
}
