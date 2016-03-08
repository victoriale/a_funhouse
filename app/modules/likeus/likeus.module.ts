/**
 * Created by Victoria on 3/7/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";

@Component({
    selector: 'like-us-module',
    templateUrl: './app/modules/likeus/likeus.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
})
export class LikeUs implements OnInit{
    module_title: string;

    ngOnInit(){
        this.module_title = 'Like JoyfulHome on Facebook';
    }
}