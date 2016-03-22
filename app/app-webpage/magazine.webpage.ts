import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, AsyncRoute} from 'angular2/router';
import {Contact} from "../modules/magazine/contact/contact.module";
import {Neighborhood} from "../modules/magazine/neighborhood/neighborhood.module";
import {Recommendations} from "../modules/magazine/recommendations/recommendations.module";
import {RouteParams} from "angular2/router";
import {MagHeaderModule} from "../modules/magazine/mag-header/mag-header.module";
import {FooterComponent} from "../components/magazine/mag-footer/mag-footer.component";
import {MagazineDataService} from "../global/global-mag-service";
import {Router} from "angular2/router";
import {MagOverviewModule} from "../modules/magazine/mag-overview/mag-overview.module";
import {MagOverview, MagData} from "../global/global-interface";

@Component({
    selector: 'magazine-page',
    templateUrl: './app/app-webpage/magazine.webpage.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Contact, Neighborhood, Recommendations, MagHeaderModule, FooterComponent, ROUTER_DIRECTIVES, MagOverviewModule],
    providers: [MagazineDataService],
})

@RouteConfig([
    new AsyncRoute({
        path: '/overview',
        loader: () => Promise.resolve(MagOverviewModule),
        name: 'PropertyOverview'
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
        loader: () => Promise.resolve(Neighborhood),
        name: 'KeyInformation'
    }),
    new AsyncRoute({
        path: '/amenities',
        loader: () => Promise.resolve(Neighborhood),
        name: 'Amenities'
    }),
    new AsyncRoute({
        path: '/contact',
        loader: () => Promise.resolve(Contact),
        name: 'Contact',
    })
])

export class MagazinePage {
    address: string;
    toc: any;
    magazineData: MagData;

    getMagServiceData() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                rawData => {
                    this.magazineData = rawData;
                    this.toc = this.buildToc(rawData);
                },
                err => console.log("error in getData", err)
            )
    }

    buildToc( magazineData ) {
        //console.log("MAGAZINE DATA!!!!:", magazineData);
        var toc: any = [];
        if( magazineData.overview != null ){
            toc.push( { label: "Property Overview", routeName: "PropertyOverview" } );
        }
        if( magazineData.neighborhood != null || true ){
            toc.push( { label: "The Neighborhood", routeName: "Neighborhood" } );
        }
        if( magazineData.recommendations != null ){
            toc.push( { label: "Recommendations", routeName: "Recommendations" } );
        }
        if( magazineData.schools != null ){
            toc.push( { label: "Key Information", routeName: "KeyInformation" } );
        }
        if( magazineData.amenities != null ){
            toc.push( { label: "Amenities", routeName: "Amenities" } );
        }
        if( magazineData.contact != null ){
            toc.push( { label: "Contact Agent", routeName: "Contact" } );
        }
        return toc;
    }

    constructor( private _params: RouteParams, private _magazineDataService: MagazineDataService, private _router: Router ) {
        this.address = _params.get('addr');
        //console.log("this.address!!!", this.address);
        this.getMagServiceData();
    }
}
