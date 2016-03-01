import {Component, Input} from 'angular2/core';

@Component({
    selector: 'image-100',
    templateUrl: './app/components/images/image-100/image-100.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['hasHover']
})
export class Image100{
    image_url = './app/public/img_bckgnd.png';
}