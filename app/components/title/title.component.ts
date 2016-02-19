import {Component} from 'angular2/core';

@Component({
    selector: 'title-component',
    templateUrl: './app/components/title/title.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
})
export class TitleComponent{
    titleImg = './app/public/img_bckgnd.png';
}