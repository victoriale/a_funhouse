import {Component, OnInit} from 'angular2/core';

import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeroComponent} from "../../components/hero/hero.component";
import {ExploreTilesComponent} from "../../components/explore-tiles/explore-tiles.component";
import {ExploreButtonComponent} from "../../components/explore-tiles/explore-button/explore-button.component";
import {HeroBottomComponent} from "../../components/hero/hero-bottom/hero-bottom.component";

@Component({
    selector: 'profile-page',
    templateUrl: './app/webpages/home-page/home.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderComponent, FooterComponent, HeroComponent, ExploreTilesComponent, ExploreButtonComponent, HeroBottomComponent],
    providers: [],
})

export class HomePage{

}