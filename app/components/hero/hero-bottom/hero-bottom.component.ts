import {Component} from 'angular2/core';
import {ExploreButtonComponent} from "../../explore-tiles/explore-button/explore-button.component";

@Component({
    selector: 'hero-bottom-component',
    templateUrl: './app/components/hero/hero-bottom/hero-bottom.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ExploreButtonComponent],
    providers: [],
})

export class HeroBottomComponent{ }