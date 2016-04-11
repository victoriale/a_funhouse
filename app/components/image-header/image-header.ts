/**
 * Created by Larry on 2/23/2016.
 */
import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'image-header',
    templateUrl: './app/components/image-header/image-header.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
})

export class imageHeader implements OnInit{
    @Input() imageUrl;
    @Input() location;

    constructor(
        private _routeParams: RouteParams
    ){ }

    ngOnInit() {
    }
}
