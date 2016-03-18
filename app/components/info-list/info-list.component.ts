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
    buttonName: string;
    infoList: any;

    ngOnInit(){
        console.log(this);
    }
}
