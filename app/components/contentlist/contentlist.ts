import {Component, Input} from 'angular2/core';


@Component({
    selector: 'contentlist',
    templateUrl: './app/components/contentlist/contentlist.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: []
})

export class contentList{
    @Input() lol;
}