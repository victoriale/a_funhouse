import {Component, OnInit, Injector} from 'angular2/core';
import {MagazineOverview} from "../../../global/global-mag-service";
import {MagOverviewData} from "../../../global/global-interface";
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";

@Component({
    selector: 'magazine-overview-module',
    templateUrl: './app/modules/magazine/mag-overview/mag-overview.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent],
})
export class MagOverviewModule implements OnInit {
    data: MagOverviewData[];
    testing: string = "<a href='http://google.com'>testing link</a> and more text here.";
    counter: number;
    address: any;
    magOverview: any;

    constructor( private _injector: Injector, private _magazineDataService: MagazineDataService ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
        //console.log("address!!!:", this.address);
    }

    getMagazineOverview() {
        //this._magazineDataService.getMagazineData(this.address)
        this._magazineDataService.getMagazineData("5170-Benton-Tama-Road-Buckingham-IA")
            .subscribe(
                magData => {
                    this.magOverview = magData.overview;
                    //console.log("magOverview:",this.magOverview);
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
      this.getMagazineOverview();
          //console.log("magOverview:", this.magOverview);
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
