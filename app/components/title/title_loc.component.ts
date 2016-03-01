import {Component, OnInit} from 'angular2/core';
import {TitleComponent} from '../../components/title/title.component';
import {Image100} from '../../components/images/image-100/image-100.component';

@Component({
    selector: 'title-loc-component',
    styleUrls: ['./app/global/stylesheets/master.css'],
    templateUrl: './app/components/title/title.component.html',
    directives: [TitleComponent, Image100],
    inputs: ['data']
})
export class TitleLocComponent implements OnInit{\

    name() {
        if(typeof this.data == 'undefined'){
            this.data =
            {
                titleImg : './app/public/img_bckgnd.png',
                smallTxt1 : '',
                smallTxt2 : 'Location: United States of America',
                Heading1 : '[City]',
                Heading2 : '[State]',
                Heading3 : '[##]',
                Heading4 : 'Listings Available for Sale',
                icon : 'fa fa-map-marker',
                hasHover: true
            };
        }
        console.log(this);
    }

    ngOnInit(){
        this.name();
    }
}
