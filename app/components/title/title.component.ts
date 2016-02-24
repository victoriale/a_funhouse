import {Component} from 'angular2/core';
import {Image100} from '../../components/images/image-100/image-100.component';

@Component({
    selector: 'title-component',
    templateUrl: './app/components/title/title.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image100],
})
export class TitleComponent{
    titleImg = './app/public/img_bckgnd.png';
    lastUpdate = 'Monday, February 23, 2016';
    loc = ' United States of America';
    mainTitle = 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet';
    subTitle = 'Lorem ipsum dolor sit amet Lorem';
}