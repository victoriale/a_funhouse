import {Component} from 'angular2/core';
import {HeaderSearchComponent} from "./header-search/header-search.component";

@Component({
    selector: 'header-component',
    templateUrl: './app/components/header/header.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [HeaderSearchComponent],
    providers: [],
})

export class HeaderComponent{

    public isHomePage: boolean = false;
    public isMyHouseKit: boolean = false;

}