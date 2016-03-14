import {Component} from 'angular2/core';
import {BackTabComponent} from "../../components/backtab/backtab.component";
import {TitleComponent} from "../../components/title/title.component";
import {ListCarouselComponent} from "../../components/list-carousel/list-carousel.component";

@Component({
    selector: 'list-of-lists-page',
    templateUrl: './app/webpages/list-of-lists-page/list-of-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent, ListCarouselComponent],
    providers: [],
})

export class ListOfListsPage{
    public icon: string;
    public title: string;
    public description: string;
    public main_hasSubImg: boolean = true;

    constructor() {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }
}