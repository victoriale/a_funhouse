import {Component, Input} from 'angular2/core';
import {Image100} from '../../components/images/image-100/image-100.component';

@Component({
    selector: 'title-component',
    templateUrl: './app/components/title/title.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image100],
    inputs: ['data']
})
export class TitleComponent{

    titleComp(){
        if(typeof this.data == 'undefined'){
            this.data =
            {
                titleImg : './app/public/img_bckgnd.png',
                smallTxt1 : 'Monday, February 23, 2016',
                smallTxt2 : ' United States of America',
                Heading1 : 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
                Heading2 : '',
                Heading3 : 'Lorem ipsum dolor sit amet Lorem',
                Heading4 : '',
                icon: 'fa fa-map-marker',
                hasHover: true
            };
        }
        console.log(this);
    }

    ngOnInit(){
        this.titleComp();
    }

}