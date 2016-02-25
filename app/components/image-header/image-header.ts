/**
 * Created by Larry on 2/23/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: 'image-header',
    templateUrl: './app/components/image-header/image-header.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
})

export class imageHeader implements OnInit{
  image_url = './app/public/img_bckgnd.png';
  location = '';
    constructor(
        private _routeParams: RouteParams
    ){ }

    ngOnInit() {
        //let id = +this._routeParams.get('id');
        let id = "[City], [State]";
        this.location = id;
        console.log(this);
    }
}
