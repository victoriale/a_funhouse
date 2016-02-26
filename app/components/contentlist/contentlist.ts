import {Component, Input, OnInit} from 'angular2/core';
import {List} from '../../global/global-interface';
import {ListOfListService} from '../../global/global-service';

@Component({
    selector: 'contentlist',
    templateUrl: './app/components/contentlist/contentlist.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [ListOfListService],
})

export class contentList implements OnInit{
    @Input() lol;

    constructor(
        private _listService: ListOfListService
    ) { }

    dummyData(){
        //if no data then dummy data is returned
        if(typeof this.lol == 'undefined'){
            this.lol =
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'location': 'somewhere',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            }
            console.log(this);
        }
    }
    ngOnInit(){
        this.dummyData();
    }
}