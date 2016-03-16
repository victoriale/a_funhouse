import {Component, OnInit} from 'angular2/core';
import {MagazineOverview} from "../../../global/global-mag-service";
import {MagOverviewData} from "../../../global/global-interface";
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagazineDataService} from "../../../global/global-mag-service";
import {Router, RouteParams} from "angular2/router";
import {MagazinePage} from "../../../app-webpage/magazine.page"

@Component({
    selector: 'magazine-overview-module',
    templateUrl: './app/modules/magazine/mag-overview/mag-overview.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent],
})
export class MagOverviewModule implements OnInit {
    data: MagOverviewData[];
    counter: number;
    address: string;
    magOverview: any;

    constructor( private _params: RouteParams, private _magazineDataService: MagazineDataService, public router: Router ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        console.log("params", _params);
        console.log("router", this.router);
        this.address = _params.get('addr');
        console.log( "address", this.address);
    }

    getMagazineOverview() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magOverview = magData;
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
      this.getMagazineOverview();
      //console.log(this);
    }

    ngOnChanges(event){
        console.log("EVENT:!!!", event);
        if( event.toc.currentValue !== undefined ) {
            //console.log("OnChange Event", event.toc.currentValue);
            //console.log("Footer OnChange toc:!!!!", this.toc);
        }
    }
}
