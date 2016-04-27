import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Location, AsyncRoute, APP_BASE_HREF, PathLocationStrategy, RouteParams, Router} from 'angular2/router';
import {Contact} from "../modules/magazine/contact/contact.module";
import {Neighborhood} from "../modules/magazine/neighborhood/neighborhood.module";
import {Recommendations} from "../modules/magazine/recommendations/recommendations.module";
import {MagHeaderModule} from "../modules/magazine/mag-header/mag-header.module";
import {FooterComponent} from "../components/magazine/mag-footer/mag-footer.component";
import {MagazineDataService} from "../global/global-mag-service";
import {MagOverviewModule} from "../modules/magazine/mag-overview/mag-overview.module";
import {MagOverview, MagData} from "../global/global-interface";
import {Amenities} from "../modules/magazine/mag-amenities/mag-amenities.module";
import {KeyInformation} from "../modules/magazine/key-information/key-information.module";
import {NavLeftComponent} from "../components/magazine/mag-nav-left/mag-nav-left.component";
import {NavRightComponent} from "../components/magazine/mag-nav-right/mag-nav-right.component";
import {MagErrorModule} from "../modules/magazine/mag-error/mag-error.module";

declare var jQuery:any;

@Component({
    selector: 'magazine-page',
    templateUrl: './app/app-webpage/magazine.webpage.html',

    directives: [Contact, Neighborhood, Recommendations, Amenities, MagHeaderModule, FooterComponent, ROUTER_DIRECTIVES, MagOverviewModule, NavLeftComponent, NavRightComponent, MagErrorModule],
    providers: [MagazineDataService, PathLocationStrategy],
})

@RouteConfig([
    new AsyncRoute({
        path: '/overview',
        loader: () => Promise.resolve(MagOverviewModule),
        name: 'PropertyOverview',
        useAsDefault: true,
    }),
    new AsyncRoute({
        path: '/neighborhood',
        loader: () => Promise.resolve(Neighborhood),
        name: 'Neighborhood'
    }),
    new AsyncRoute({
        path: '/recommendations',
        loader: () => Promise.resolve(Recommendations),
        name: 'Recommendations'
    }),
    new AsyncRoute({
        path: '/information',
        loader: () => Promise.resolve(KeyInformation),
        name: 'KeyInformation'
    }),
    new AsyncRoute({
        path: '/amenities',
        loader: () => Promise.resolve(Amenities),
        name: 'Amenities'
    }),
    new AsyncRoute({
        path: '/contact',
        loader: () => Promise.resolve(Contact),
        name: 'Contact',
    }),
    {
        path: '/**',
        redirectTo: ['PropertyOverview']
    }
])

export class MagazinePage implements OnInit {
    address:string;
    toc:any;
    magazineData:MagData;
    currentIndex:any;
    showErrorPage:boolean = false;
    static timeout:number;

    constructor(private _params:RouteParams, private _magazineDataService:MagazineDataService, private _router:Router, private _location:Location, private _pathLocationStrategy:PathLocationStrategy) {
        _pathLocationStrategy.onPopState(function () {
            MagazinePage.resetTimer();
        });
        this.address = _params.get('addr');
        this.getMagServiceData();
    }

    getMagServiceData() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                rawData => {
                    this.magazineData = rawData;
                    this.toc = this.buildToc(rawData);
                },
                err => {
                    this._router.navigate(['../Webpages', 'Profile-page', {address: this.address}]);
                    //this.showErrorPage = true; <--This stays for when this is fixed the correct way.
                },
                () => this.showErrorPage = false
            );
    }

    buildToc(magazineData) {
        var toc:any = [];
        if (magazineData.overview != null) {
            toc.push({label: "Property Overview", routeName: "PropertyOverview"});
        }
        if (magazineData.neighborhood != null) {
            toc.push({label: "The Neighborhood", routeName: "Neighborhood"});
        }
        if (magazineData.recommendations != null && magazineData.recommendations.similar.length > 1) {
            toc.push({label: "Recommendations", routeName: "Recommendations"});
        }
        if (magazineData.info != null && magazineData.info.demographics != null && magazineData.info.schools != null) {
            toc.push({label: "Key Information", routeName: "KeyInformation"});
        }
        if (magazineData.amenities != null) {
            toc.push({label: "Amenities", routeName: "Amenities"});
        }
        if (magazineData.contact != null) {
            toc.push({label: "Contact Agent", routeName: "Contact"});
        }
        return toc;
    }

    static displayAd() {
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
    }

    static debounce(func, threshold, execAsap) {
        var self = this;
        return function debounced() {
            var obj = this, args = arguments;

            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                self.timeout = null;
            };
            if (self.timeout)
                clearTimeout(self.timeout);
            else if (execAsap) {
                func.apply(obj, args);
            }

            self.timeout = setTimeout(delayed, threshold || 100);
        };
    }

    static resetTimer() {
        (MagazinePage.debounce(MagazinePage.displayAd, 500, false))();
    }

    buildNavigationElements() {
        this.currentIndex = jQuery("magtab-component>span>a.router-link-active").index();
        if (this.currentIndex < 1) {
            this.currentIndex = 0;
        }
        jQuery(".magheader_pagenum").html(this.currentIndex + 1);
        jQuery(".currentIndexFooter").html(this.currentIndex + 1);
    }

    ngAfterViewChecked() {
        this.buildNavigationElements();
        //removes min-height that is used on joyfulHome page.
        jQuery('.page-wrapper').css('min-height', 0);
    }

    ngOnInit() {
        MagazinePage.resetTimer();
    }

}
