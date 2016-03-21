import {Component, Input, OnInit} from 'angular2/core';
import {List} from '../../global/global-interface';

@Component({
    selector: 'contentlist',
    templateUrl: './app/components/contentlist/contentlist.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
})

export class contentList implements OnInit{
    @Input() data;

    dummyData(){
        //if no data then dummy data is returned
        if(typeof this.data == 'undefined'){
            this.data =
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'url': '#',
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
