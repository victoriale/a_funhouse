import {Component} from 'angular2/core';

@Component({
    selector: 'backtab-component',
    templateUrl: './app/components/backtab/backtab.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],

})
export class BackTabComponent{
    public backText = "[Profile Name]'s";
    backgroundImg = './app/public/header_texture.png';
}
