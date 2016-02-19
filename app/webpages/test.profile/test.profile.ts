import {Component, OnInit} from 'angular2/core';

import {ListOfListModule} from '../../modules/listoflist/listoflist.module';
import {mod1} from '../../modules/test1.module/test1.module';
import {mod2} from '../../modules/test2.module/test2.module';

@Component({
    selector: 'testProfile',
    templateUrl: './app/webpages/test.profile/test.profile.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListOfListModule,mod1,mod2],
    providers: [],
})

export class testProfile{

}