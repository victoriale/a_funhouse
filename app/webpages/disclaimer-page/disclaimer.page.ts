/**
 * Created by Victoria on 3/1/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';

@Component({
    selector: 'Disclaimer-page',
    templateUrl: './app/webpages/disclaimer-page/disclaimer.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent],
    providers: [],
})

export class DisclaimerPage implements OnInit{
    disclaimer1 = "All of the information on this Web site is published in good faith and is for general information purposes only. Joyful Home does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this Web site (www.joyfulhome.com) is strictly at your own risk. Joyful Home will not be liable for any losses and/or damages in connection with the use of our Web site.";

    disclaimer2 = "From our Web site, you can visit other websites by following hyperlinks to external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. Any links to other Web sites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a bad link.";

    disclaimer3 = "Be aware that when you leave Joyful Home, other sites may have different privacy policies and terms, which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their Terms of Service before engaging in any business or uploading any information.";

    disclaimer4 = "";

    data:[{}];

    titleData(){
        //disclaimer title data
        var dis_data = [{
            titleImg : './app/public/img_bckgnd.png',
            smallTxt1 : 'Last Updated: Monday, March 01, 2016',
            smallTxt2 : ' United States of America',
            Heading1 : 'Disclaimer',
            Heading2 : '',
            Heading3 : 'For JoyfulHome',
            Heading4 : '',
            icon: 'fa fa-map-marker',
        }];
        this.data = dis_data;
        console.log(this);
    }

    ngOnInit(){
        this.titleData();
    }
}