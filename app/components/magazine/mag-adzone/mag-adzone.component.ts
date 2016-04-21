/**
 * Created by Christopher Lynch on 2/24/2016.
 */

import {Component, OnInit, OnDestroy} from 'angular2/core';
declare var jQuery:any;

@Component({
    selector: 'adzone-component',
    templateUrl: './app/components/magazine/mag-adzone/mag-adzone.component.html',
    directives: [],
})

export class AdzoneComponent implements OnInit {
    hasRun:boolean = false;
    currentAdZoneSize:number;

    onResize(event) {
        if (!this.hasRun) {
            this.hasRun = true;
            if (this.currentAdZoneSize != jQuery('#adzone').width()) {
                this.currentAdZoneSize = jQuery('#adzone').width();
                setTimeout(() => {
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
                        remn: true,
                        src: embedURL,
                        name: adUnitName,
                        widU: widgetURL,
                        widW: 0,  //the widget's width
                        widH: 0,  //the widget's height
                        adW: jQuery('#adzone').width(),  //the ad's width
                        adH: jQuery('#adzone').height(),  //the ad's height
                        ofx: 0,  //offset in the X direction that the ad-stack needs to be adjusted to match the designated ad-space for this widget
                        ofy: 0,  //offset in the Y direction that the ad-stack needs to be adjusted to match the designated ad-space for this widget
                        rand: Math.random() * 10000000000000000000,
                    };

                    var newScript = document.createElement("script");
                    newScript.src = "http://content.synapsys.us/l/n/index-mdb.php?" + Object.keys(q).map(function (key) {
                            return encodeURIComponent(key) + "=" + encodeURIComponent(q[key])
                        }).join("&");
                    jQuery('#adzone').html('');
                    jQuery('#adzone')[0].appendChild(newScript);
                    this.hasRun = false;
                }, 100);
            } else {
                this.hasRun = false;
            }
        }
    }

    ngOnInit() {
        this.currentAdZoneSize = jQuery('#adzone').width();
    }
}