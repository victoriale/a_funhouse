/**
 * Created by Victoria on 3/1/2016.
 */
import {Component, Input, OnChanges} from 'angular2/core';

@Component({
    selector: 'image-180',
    templateUrl: './app/components/images/image.html',
    
    inputs: ['hasSubImg', 'imageURL', 'imageURL2', 'counterIf', 'counter', 'hasHover', 'hasBottomImg', 'imageClass', 'originalUrl']
})
export class Image180 {
    imageURL: string = '/app/public/placeholder-location.jpg';
    imageURL2: string = '/app/public/placeholder-location.jpg';
    size: string = "180";
    counterIf: boolean = false;
    counter: number = 1;
    hasHover:boolean = false;
    hasBottomImg: boolean = false;
    imageClass:string = '';
    originalUrl:string;

    ngOnChanges(event){
        //If an image is not undefined (Input WAS sent to component) and value passed in is null, set image to placeholder
        if(typeof event.imageURL !== 'undefined' && event.imageURL.currentValue === null){
            this.imageURL = '/app/public/placeholder-location.jpg';
        }
        if(typeof event.imageURL2 !== 'undefined' && event.imageURL2.currentValue === null){
            this.imageURL2 = '/app/public/placeholder-location.jpg';
        }
        if(typeof event.counter !== 'undefined' && event.counter.currentValue === null){
            this.counterIf = false;
        }
        if(typeof event.hasHover !== 'undefined' && event.hasHover.currentValue === null){
            this.hasHover = false;
        }
    }
}
