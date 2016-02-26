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
    smallTxt1 = 'Monday, February 23, 2016';
    smallTxt2 = ' United States of America';
    Heading1 = 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet';
    Heading2 = '';
    Heading3 = 'Lorem ipsum dolor sit amet Lorem';
    Heading4 = '';
    //titleComp(titleImg, smallTxt1, smallTxt2,Heading1,Heading2,Heading3,Heading4){
    //    console.log(smallTxt2);
    //    return{
    //        titleImg : titleImg,
    //        smallTxt1 : smallTxt1,
    //        smallTxt2 : smallTxt2,
    //        Heading1 : Heading1,
    //        Heading2 : Heading2,
    //        Heading3 : Heading3,
    //        Heading4 : Heading4,
    //    }
    //}
    //
    //ngOnInit(){
    //    this.titleComp()
    //}

}