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
import {GlobalFunctions} from "../../global/global-functions";

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
    public location: string;
    listOfLists: any;
    lists: Array<any> = [];
    titleData: Object;

    constructor(private _params: RouteParams, private _listOfListPageService: ListOfListPage, private _globalFunctions: GlobalFunctions) {
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
        var counter = 0;
        // Format data and convert object to array
        for( var i in this.listOfLists ) {
            if (this.listOfLists.hasOwnProperty(i)){
                // Counter for rank #
                this.listOfLists[i].counter = counter++;
                // Check if even or odd for BG color class
                if(this.listOfLists[i].counter % 2 == 0) {
                    this.listOfLists[i].bgClass = "even";
                }else{
                    this.listOfLists[i].bgClass = "odd";
                }
                // Save original for url
                this.listOfLists[i].listTitleOrig = this.listOfLists[i].listTitle;
                // Fix list title using global function cameCaseToRegularCase
                this.listOfLists[i].listTitle = self._globalFunctions.camelCaseToRegularCase(this.listOfLists[i].listTitle);
                // Check for empty list
                if(this.listOfLists[i].listData.length <= 0) {
                }else {
                    //Check for no image
                    this.listOfLists[i].listData.map(function(item){
                    if(item.photo === false || item.photo === null) {
                        item.photo = "app/public/no_photo_images/House_1.png";
                        }
                    });
                    this.lists.push(this.listOfLists[i]);
                }
            }
        }

        // Data for Title component
        this.titleData =
        {
            imageURL : './app/public/joyfulhome_house.png',
            smallText1 : 'Monday, February 23, 2016',
            smallText2 : ' United States of America',
            heading1 : this.location + ' Top 10 Lists',
            heading2 : '',
            heading3 : '',
            heading4 : '',
            icon: 'fa fa-map-marker',
            hasHover: false
        };
    }

    ngOnInit(){
        this.stateLocation = decodeURI(this._params.get('state'));
        this.cityLocation = decodeURI(this._params.get('city'));
        this.location = this._globalFunctions.toTitleCase(this.cityLocation) + ', ' + this.stateLocation;

        this.getListOfListPage();
        console.log(this);
    }
}