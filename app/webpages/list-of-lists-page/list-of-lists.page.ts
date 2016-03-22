import {Component, OnInit} from 'angular2/core';
import {RouteParams} from "angular2/router";
import {BackTabComponent} from "../../components/backtab/backtab.component";
import {TitleComponent} from "../../components/title/title.component";
import {ListCarouselComponent} from "../../components/list-carousel/list-carousel.component";
import {ListOfListPage} from '../../global/global-service';
import {contentList} from "../../components/contentlist/contentlist";
import {List} from "../../global/global-interface";
import {HeroListComponent} from "../../components/hero/hero-list/hero-list.component";
import {WidgetModule} from "../../modules/widget/widget.module";

@Component({
    selector: 'list-of-lists-page',
    templateUrl: './app/webpages/list-of-lists-page/list-of-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent, ListCarouselComponent, contentList, HeroListComponent, WidgetModule],
    providers: [ListOfListPage],
})

export class ListOfListsPage implements OnInit{
    public icon: string;
    public title: string;
    public description: string;
    public main_hasSubImg: boolean = true;
    public cityLocation: string;
    public stateLocation: string;
    listOfLists: any;
    lists: Array<any> = [];

    constructor(private _params: RouteParams, private _listOfListPageService: ListOfListPage) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    getListOfListPage() {
        this._listOfListPageService.getListOfListPage(this.stateLocation, this.cityLocation)
            .subscribe(
                listOfLists => this.listOfLists = listOfLists,
                err => console.log(err),
                () => this.transformData()
            );
    }

    transformData() {
        var self = this;

        // Convert object to array
        for( var i in this.listOfLists ) {
            if (this.listOfLists.hasOwnProperty(i)){
                this.lists.push(this.listOfLists[i]);
            }
        }
        //this.lists.forEach(function(val, index){
        //    val.title = val.listTitle;
        //});
    }

    ngOnInit(){
        this.stateLocation = this._params.get('state');
        this.cityLocation = this._params.get('city');

        this.getListOfListPage();
        console.log(this);
    }
}