import {Component} from 'angular2/core';

import {List} from '../../global/global-interface';
import {ListOfListService} from '../../global/global-service';

@Component({
    selector: 'Find-module',
    templateUrl: './app/modules/Find/Find.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [ListOfListService]
})

export class ListOfListModule{
    private profile_name = "[Profile Name]'s [Module Title]";

}