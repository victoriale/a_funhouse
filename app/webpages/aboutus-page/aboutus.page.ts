/**
 * Created by Victoria on 2/29/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';

@Component({
    selector: 'Aboutus-page',
    templateUrl: './app/webpages/aboutus-page/aboutus.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent],
    providers: [],
})

export class AboutUsPage implements OnInit{
    whatis = 'Joyful Home?';
    au_pa1 = "Founded in July, 2015, Wichita, Kan. - based Joyful Home is a trusted community marketplace for people to discover their prospective joyful home.";
    au_pa2 = "Whether you are buying your first home, starting a family or looking to retire in the home of your dreams, Joyful Home connects you to real estate listings—from multi-million dollar mansions to budget-friendly starter homes—in over 3,000 counties in the United States. With an ever-growing database of listings from prime real estate agents across the United States, Joyful Home is the easiest way to purchase your next home.";

    au_icon1 = './app/public/icons/Listing_Icon.png';
    au_icon2 = './app/public/icons/Building_Icon.png';
    au_icon3 = './app/public/icons/Real_Estate_Icon.png';
    au_icon4 = './app/public/icons/Globe_Icon.png';
    nat_map = './app/public/icons/AboutUs_Map.png';

    subtxt1 = "Listings For Sale";
    subtxt2 = "United Stats' Cities";
    subtxt3 = "Real Estate Agents";
    subtxt4 = "United States' Counties";
    subtxt_nat = "Listings Nationwide";

    maintxt1 = "[#,###,###]+";
    maintxt2 = "[#,###,###]";
    maintxt3 = "[#,###,###]";
    maintxt4 = "[#,###,###]";
    maintxt_nat = "[#,###,###]+";

    data:[{}];

    titleData(){
        //About us data
        var au_data = [{
            titleImg : './app/public/img_bckgnd.png',
            smallTxt1 : 'Last Updated: Monday, February 26, 2016',
            smallTxt2 : ' United States of America',
            Heading1 : 'About Us',
            Heading2 : '',
            Heading3 : 'Take a seat and get to know us better.',
            Heading4 : '',
            icon: 'fa fa-map-marker',
        }];
        this.data = au_data;
        console.log(this);
    }

    ngOnInit(){
        this.titleData();
    }

    //  Get current route name
    constructor(public router: Router){
        console.log('Route Name:', this.router.hostComponent.name);
    }
}