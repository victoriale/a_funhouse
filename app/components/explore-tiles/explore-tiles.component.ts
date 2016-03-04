import {Component, OnInit} from 'angular2/core';
import {ExploreButtonComponent} from "../buttons/explore-button/explore-button.component";
import {HomePageService} from '../../global/global-service';
import {HomePageData} from "../../global/global-interface";

@Component({
    selector: 'explore-tiles-component',
    templateUrl: './app/components/explore-tiles/explore-tiles.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ExploreButtonComponent],
    providers: [HomePageService],
})

export class ExploreTilesComponent{
    homepagedata: HomePageData[];

    constructor(private _homePageService: HomePageService) { }

    getHomepageService() {
        this._homePageService.getHomePageService().then(homepagedata => this.homepagedata = homepagedata);
    }

    ngOnInit() {
        this.getHomepageService();
        console.log(this);
    }

}