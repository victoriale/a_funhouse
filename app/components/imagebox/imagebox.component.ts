import {Component} from 'angular2/core';

@Component({
    selector: 'imagebox-component',
    templateUrl: './app/components/imagebox/imagebox.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
})
export class ImageBoxComponent {
    image_url = './app/public/img_bckgnd.png';
}