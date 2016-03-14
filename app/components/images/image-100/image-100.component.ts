import {Component, Input, OnChanges} from 'angular2/core';

@Component({
    selector: 'image-100',
    templateUrl: './app/components/images/image-100/image-100.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['hasHover', 'imageURL']
})
export class Image100{
    imageURL = './app/public/joyfulhome_house.png';

    ngOnChanges(event){
        //If an image is not undefined (Input WAS sent to component) and value passed in is null, set image to placeholder
        if(typeof event.imageURL !== 'undefined' && event.imageURL.currentValue === null){
            this.imageURL = './app/public/img_bckgnd.png';
        }

    }
}