import {Component, OnInit} from 'angular2/core';
import {List} from '../../global/global-interface';
import {ListOfListService} from '../../global/global-service';
import {contentList} from "../../components/contentlist/contentlist";
import {moduleHeader} from "../../components/module-header/module-header";
import {PaginationFooter} from "../../components/pagination-footer/pagination-footer.component";

@Component({
    selector: 'list-of-lists-module',
    templateUrl: './app/modules/listoflist/listoflist.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [contentList,moduleHeader, PaginationFooter],
    providers: [ListOfListService]
})

export class ListOfListModule {
    module_title: string;
    public profile_name = "[Profile Name]'s [Module Title]";
    lists : List[];

    constructor(
        private _listService: ListOfListService
    ) { }

    getListOfList() {
        this._listService.getListOfList().then(lists => this.lists = lists);
    }
    ngOnInit() {
        this.getListOfList();
        this.module_title = '[Profiles Name]\'s [Module Title]';
        console.log(this);
    }
}
