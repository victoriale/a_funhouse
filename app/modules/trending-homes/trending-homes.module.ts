import {Component, OnInit, Input} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";

@Component({
    selector: 'trending-homes',
    templateUrl: './app/modules/trending-homes/trending-homes.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, MediaImages],
    providers: [],
    inputs: ['']
})

export class TrendingHomes implements OnInit {
    module_title: string;
    public trending: boolean;

    ngOnInit(){
        this.module_title = 'Property Images, Media & Features for [Profile Name]';
        this.trending = true; // set flag to display trending button for media-images.component
        console.log(this);
    }
}
