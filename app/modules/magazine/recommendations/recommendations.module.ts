import {Component, OnInit, Injector} from 'angular2/core'
import {NavRightComponent} from "../../../components/magazine/mag-nav-right/mag-nav-right.component";
import {MagRecommendationsImgModule} from "../mag-recommendations-img/mag-recommendations-img";
import {MagRecommendationsTextModule} from "../mag-recommendations-text/mag-recommendations-text";
import {NavLeftComponent} from "../../../components/magazine/mag-nav-left/mag-nav-left.component";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagRecommendations} from "../../../global/global-interface";

@Component({
    selector: 'recommendations-module',
    templateUrl: './app/modules/magazine/recommendations/recommendations.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [NavRightComponent, MagRecommendationsImgModule, MagRecommendationsTextModule, NavLeftComponent],
})

export class Recommendations implements OnInit {
    address: string;
    magRecommendations:MagRecommendations;

    constructor( private _injector: Injector, private _magazineDataService: MagazineDataService ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineSimilarListings() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magRecommendations = magData.recommendations;
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineSimilarListings();
    }
}