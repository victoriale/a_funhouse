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

    title_data: {};

    constructor() {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    getData(){
        //Contact us data
        this.title_data = {
            titleImg : './app/public/img_bckgnd.png',
            smallText1 : 'Last Updated: Monday, February 26, 2016',
            smallText2 : ' United States of America',
            heading1 : 'Contact Us',
            heading2 : '',
            heading3 : 'Help Us, Help You Faster.',
            heading4 : '',
            icon: 'fa fa-map-marker',
            hasHover: false
        };
    }


    ngOnInit(){
        this.getData();
    }
}