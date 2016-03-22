import {Component, Input, Injector} from 'angular2/core';
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagRecommendations} from "../../../global/global-interface";
import {ListOfListModule} from "../../listoflist/listoflist.module";

@Component({
    selector: 'magazine-contact-module',
    templateUrl: './app/modules/magazine/mag-explore/mag-explore.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListOfListModule],
    inputs: ['magContact'],
})

export class MagExploreModule {
    address:string;
    magExplore:MagRecommendations;
    isNull:boolean;

    constructor(private _injector:Injector, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineSimilarListings() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magExplore = magData.recommendations;
                    if (this.magExplore == null) {
                        this.isNull = true;
                    } else {
                        this.isNull = false;
                    }
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineSimilarListings();
    }
}