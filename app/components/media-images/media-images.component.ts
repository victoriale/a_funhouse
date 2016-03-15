/**
 * Created by Victoria on 3/4/2016.
 */
import {Component} from 'angular2/core';
import {CircleButton} from "../../components/buttons/circle/circle.button";

@Component({
    selector: 'media-images',
    templateUrl: './app/components/media-images/media-images.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [CircleButton],
    inputs: ['trending', 'data']
})
export class MediaImages{
    public trending: boolean;
    public data: Object;
}
