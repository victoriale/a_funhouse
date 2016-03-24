/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, Input, OnChanges} from 'angular2/core';

@Component({
    selector: 'image-150',
    templateUrl: './app/components/images/image.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['hasSubImg', 'imageURL']
})
export class Image150 {
    imageURL = './app/public/placeholder-location.png';
    size = "150";

    ngOnChanges(event){
        //If an image is not undefined (Input WAS sent to component) and value passed in is null, set image to placeholder
        if(typeof event.imageURL !== 'undefined' && event.imageURL.currentValue === null){
            this.imageURL = './app/public/placeholder-location.png';
        }
    }
}
