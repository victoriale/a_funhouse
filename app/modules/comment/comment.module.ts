/**
 * Created by Victoria on 3/2/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";

@Component({
    selector: 'comment-module',
    templateUrl: './app/modules/comment/comment.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: [],
})
export class CommentModule implements OnInit{
    module_title: string;

    ngOnInit(){
        this.module_title = 'Share Your Comments With Us';
    }
}
