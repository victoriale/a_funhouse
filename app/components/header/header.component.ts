import {Component} from 'angular2/core';

@Component({
    selector: 'header-component',
    templateUrl: './app/components/header/header.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
})

export class HeaderComponent{

    isHomePage: boolean = false;
    isMyHouseKit: boolean = false;

}