/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'image-150',
    templateUrl: './app/components/images/image.html',
    
    inputs: ['hasSubImg', 'imageURL', 'hasHoverNoSubImg', 'originalUrl', 'counterIf', 'counter']
})
export class Image150 {
    imageURL = '/app/public/placeholder-location.png';
    size = "150";
    counterIf: boolean = false;
    counter: number = 1;
}
