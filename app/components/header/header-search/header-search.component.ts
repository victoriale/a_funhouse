import {Component} from 'angular2/core';

@Component({
    selector: 'header-search-component',
    templateUrl: './app/components/header/header-search/header-search.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
    inputs: ['isHomePage'],
})

export class HeaderSearchComponent{
    isHomePage: boolean;
}