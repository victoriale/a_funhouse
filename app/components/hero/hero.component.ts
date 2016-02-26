import {Component} from 'angular2/core';
import {HeroSearchComponent} from "./hero-search/hero-search.component";

@Component({
    selector: 'hero-component',
    templateUrl: './app/components/hero/hero.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeroSearchComponent],
    providers: [],
})

export class HeroComponent{ }