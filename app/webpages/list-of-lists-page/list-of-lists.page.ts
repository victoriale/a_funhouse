import {Component, OnInit} from 'angular2/core';
import {BackTabComponent} from "../../components/backtab/backtab.component";
import {TitleComponent} from "../../components/title/title.component";
import {ListCarouselComponent} from "../../components/list-carousel/list-carousel.component";
import {List} from '../../global/global-interface';
import {ListOfListService, BatchOne} from '../../global/global-service';
import {contentList} from "../../components/contentlist/contentlist";
import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";

@Component({
    selector: 'list-of-lists-page',
    templateUrl: './app/webpages/list-of-lists-page/list-of-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent, ListCarouselComponent, contentList, HeroListComponent],
    providers: [ListOfListService, BatchOne],
})

export class ListOfListsPage implements OnInit{
    public icon: string;
    public title: string;
    public description: string;
    public main_hasSubImg: boolean = true;

    lists : List[];
    batch1: List[];

    constructor(private _listService: ListOfListService, private _batchone: BatchOne) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    getListOfList() {
        this._listService.getListOfList().then(lists => this.lists = lists);
    }
    getBatchOne(){
        this._batchone.getBatchOne().then(batch1 => this.batch1 = batch1);
    }

    ngOnInit(){
        this.getListOfList();
        this.getBatchOne();
    }
}