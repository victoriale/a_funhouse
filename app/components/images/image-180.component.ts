/**
 * Created by Victoria on 3/1/2016.
 */
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'image-180',
    templateUrl: './app/components/images/image.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['hasSubImg']
})
export class Image180 {
    image_url = './app/public/img_bckgnd.png';
    size = "180";
}