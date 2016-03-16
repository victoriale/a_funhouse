import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'info-list',
    templateUrl: './app/components/info-list/info-list.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
    inputs: ['infoList'],
})

export class InfoListComponent implements OnInit{
    infoList: Object;

    ngOnInit(){
        console.log(this);
    }
}
