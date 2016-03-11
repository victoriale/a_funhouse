/**
 * Created by Victoria on 3/1/2016.
 */
import {Component, Input, OnChanges} from 'angular2/core';

@Component({
    selector: 'image-180',
    templateUrl: './app/components/images/image.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['hasSubImg', 'imageURL', 'imageURL2']
})
export class Image180 {
    imageURL: string = './app/public/img_bckgnd.png';
    imageURL2: string = './app/public/img_bckgnd.png';
    size: string = "180";

    ngOnChanges(event){
        //If an image is not undefined (Input WAS sent to component) and value passed in is null, set image to placeholder
        if(typeof event.imageURL !== 'undefined' && event.imageURL.currentValue === null){
            this.imageURL = './app/public/img_bckgnd.png';
        }
        if(typeof event.imageURL2 !== 'undefined' && event.imageURL2.currentValue === null){
            this.imageURL2 = './app/public/img_bckgnd.png';
        }

    }
}