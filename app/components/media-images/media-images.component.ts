/**
 * Created by Victoria on 3/4/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {CircleButton} from "../../components/buttons/circle/circle.button";
import {MediaFeatureList} from '../../global/global-service';
import {List2} from '../../global/global-interface';

@Component({
    selector: 'media-images',
    templateUrl: './app/components/media-images/media-images.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [CircleButton],
    providers: [MediaFeatureList],
    inputs: ['']
})
export class MediaImages implements OnInit {
    BatchTwo: List2[];
    public trending: boolean;

    constructor(
        private _featureList: MediaFeatureList
    ){}
    getData(){
    console.log(this);
        console.log(this._featureList.getBatchTwo());
        this._featureList.getBatchTwo().then(batch2 => this.BatchTwo = batch2);
    }
    ngOnInit(){
        this.getData();
        this.trending = true;
        console.log(this);
    }
}