import {Component, OnInit} from 'angular2/core';

import {List} from '../../global/global-interface';
import {ListOfListService, BatchOne} from '../../global/global-service';

@Component({
    selector: 'Find-module',
    templateUrl: './app/modules/Find/Find.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [ListOfListService, BatchOne]
})

export class ListOfListModule implements OnInit{
    private profile_name = "[Profile Name]'s [Module Title]";

}