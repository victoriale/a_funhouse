/**
 * Created by Victoria on 3/8/2016.
 */
import {Component} from 'angular2/core';
import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component'
@Component({
    selector: 'List-page',
    templateUrl: './app/webpages/list-page/list.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListViewCarousel],
    providers: [],
})

export class ListPage { }