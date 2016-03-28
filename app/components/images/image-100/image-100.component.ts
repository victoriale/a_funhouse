import {Component, Input} from 'angular2/core';

@Component({
    selector: 'image-100',
    templateUrl: './app/components/images/image-100/image-100.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['hasHover', 'imageURL']
})
export class Image100{
    imageURL = './app/public/joyfulhome_house.png';
}
