import {Component, OnInit} from 'angular2/core';
import {Image180} from "../images/image-180.component";
import {List} from '../../global/global-interface';
import {ListOfListService, BatchOne} from '../../global/global-service';
import {contentList} from "../../components/contentlist/contentlist";

@Component({
    selector: 'list-carousel-component',
    templateUrl: './app/components/list-carousel/list-carousel.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image180, contentList],
    providers: [ListOfListService, BatchOne],
})

export class ListCarouselComponent implements OnInit {
    public icon: string;
    public title: string;
    public description: string;
    public main_hasSubImg: boolean = false;

    lists : List[];
    batch1: List[];

    constructor(
        private _listService: ListOfListService,
        private _batchone: BatchOne
    ) { }

    getListOfList() {
        this._listService.getListOfList().then(lists => this.lists = lists);
    }
    getBatchOne(){
        this._batchone.getBatchOne().then(batch1 => this.batch1 = batch1);
    }

    setStaticData(){
        this.icon = 'fa fa-home';
        this.title = '[List Name]';
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus justo, semper porta blandit non, auctor ac nulla. Ut vitae quam at augue sodales commodo et eget diam. Curabitur venenatis a sapien id pharetra.';
    }

    ngOnInit(){
        this.setStaticData();
        this.getListOfList();
        this.getBatchOne();
    }
}