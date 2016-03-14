import {Component} from 'angular2/core';
import {BackTabComponent} from "../../components/backtab/backtab.component";
import {TitleComponent} from "../../components/title/title.component";

@Component({
    selector: 'list-of-lists-page',
    templateUrl: './app/webpages/list-of-lists-page/list-of-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent],
    providers: [],
})

export class ListOfListsPage {

    constructor() {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }
}