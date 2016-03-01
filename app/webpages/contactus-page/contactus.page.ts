/**
 * Created by Victoria on 3/1/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';

@Component({
    selector: 'Contactus-page',
    templateUrl: './app/webpages/contactus-page/contactus.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent],
    providers: [],
})

export class ContactUsPage implements OnInit{
    //PLACEHOLDERS
    full_name = "John Smith";
    email = "johnSmith@sntmedia.com";
    text_area = "Detailed description of your question here...";

    data:[{}];

    titleData(){
        //contact us title data
        var cu_data = [{
            titleImg : './app/public/img_bckgnd.png',
            smallTxt1 : 'Last Updated: Monday, March 1, 2016',
            smallTxt2 : ' United States of America',
            Heading1 : 'Contact Us',
            Heading2 : '',
            Heading3 : 'Help Us, Help You Faster.',
            Heading4 : '',
            icon: 'fa fa-map-marker',
        }];
        this.data = cu_data;
        //console.log(this);
    }

    ngOnInit(){
        this.titleData();
    }
}