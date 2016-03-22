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
    public data: Array<Object>;

    titleComp(){
        if(typeof this.data == 'undefined'){
            this.data =
            [{
                imageURL : './app/public/joyfulhome_house.png',
                smallText1 : 'Monday, February 23, 2016',
                smallText2 : ' United States of America',
                heading1 : 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
                heading2 : '',
                heading3 : 'Lorem ipsum dolor sit amet Lorem',
                heading4 : '',
                icon: 'fa fa-map-marker',
                hasHover: true
            }];
        }
    }

    ngOnInit(){
        this.titleComp();
        console.log(this.data);
    }

}
