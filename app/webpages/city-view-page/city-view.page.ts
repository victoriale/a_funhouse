import {Component, OnInit} from 'angular2/core';
import {WidgetModule} from "../../modules/widget/widget.module";

@Component({
    selector: 'city-view-page',
    templateUrl: './app/webpages/city-view-page/city-view.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule],
    providers: [],
})

export class CityViewPage implements OnInit{

    ngOnInit() {

    }

}