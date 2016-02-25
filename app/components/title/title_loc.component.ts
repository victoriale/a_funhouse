import {Component, OnInit} from 'angular2/core';
import {TitleComponent} from '../../components/title/title.component';
import {Image100} from '../../components/images/image-100/image-100.component';

@Component({
    selector: 'title-loc-component',
    styleUrls: ['./app/global/stylesheets/master.css'],
    templateUrl: './app/components/title/title.component.html',
    directives: [TitleComponent, Image100],
})
export class TitleLocComponent implements OnInit{
    titleImg = './app/public/img_bckgnd.png';
    lastUpdate = 'Monday, February 23, 2016';
    smallTxt1 = '';
    icon = 'fa fa-map-marker';
    smallTxt2 = '';
    Heading1 = '[City]';
    Heading2 = '[State]';
    Heading3 = '[##]';
    Heading4 = 'Listings Available for Sale';
    name () {
        this.smallTxt2 = ' Last Update: ' + this.lastUpdate;
    }

    ngOnInit(){
        this.name();
    }
}
