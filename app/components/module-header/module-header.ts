/**
 * Created by Larry on 2/23/2016.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'module-header',
    templateUrl: './app/components/module-header/module-header.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives:[],
    providers: [],
})

export class moduleHeader{
    public profile_name = "[Profile Name]'s [Module Title]";
}