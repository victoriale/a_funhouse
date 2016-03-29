import {Component, OnInit, Input} from 'angular2/core';
import {List} from '../../global/global-interface';
import {contentList} from "../../components/contentlist/contentlist";
import {moduleHeader} from "../../components/module-header/module-header";
import {moduleFooter} from "../../components/module-footer/module-footer";
import {PaginationFooter} from "../../components/pagination-footer/pagination-footer.component";
import {GlobalFunctions} from "../../global/global-functions";

@Component({
    selector: 'list-of-lists-module',
    templateUrl: './app/modules/listoflist/listoflist.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleFooter, contentList,moduleHeader, PaginationFooter],
    providers: [],
    inputs:['listOfLists', 'state', 'city']
})

export class ListOfListModule {
    public location: string;
    public profile_name = "";
    module_title: string;
    state:string;
    city:string;
    lists: Array<any> = [];
    listOfLists: any;
    titleData: Object;
    data: any;

    constructor(
      private _globalFunctions: GlobalFunctions
    ) { }

    transformData() {
        var self = this;
        var counter = 1;
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
                if(this.listOfLists[i].listData === null || this.listOfLists[i].listData.length <= 0 ) {
                }else {
                    //Check for no image, replace with placeholder
                    this.listOfLists[i].listData.map(function(item){
                    if(item.photo === false || item.photo === null) {
                        item.photo = "app/public/no_photo_images/House_1.png";
                        }
                    });
                    this.lists.push(this.listOfLists[i]);
                }
            }
        }
    }

    ngOnInit() {
      this.transformData();
      this.data = {city:this.city, state:this.state};
      this.module_title = 'Tops Lists For ' + this.city + ", " + this.state;
    }
}
