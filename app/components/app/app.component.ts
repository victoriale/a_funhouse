import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {ListOfListModule} from '../../modules/listoflist/listoflist.module';
import {TestModule} from '../../modules/test/test.module';
import {VlePage} from '../../modules/vle/vle.module';
import {testProfile} from '../../webpages/test.profile/test.profile';

@Component({
    selector: 'my-app',
    templateUrl: './app/components/app/app.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListOfListModule, TestModule, VlePage, testProfile, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
        path: '/listoflists',
        name: 'Listoflists',
        component: ListOfListModule,
        useAsDefault: true,
    },
    {
        path: '/test',
        name: 'Test',
        component: TestModule
    },
    {
        path: '/vle',
        name: 'VLe',
        component: VlePage,
    },
    {
        path: '/testProfile',
        name: 'TestProfile',
        component: testProfile,
    },
    {
        path: '/testProfile/:id',
        name: 'TestProfile1',
        component: testProfile,
    },
])

export class AppComponent {
    title = 'WELCOME TO ROUTER';
}