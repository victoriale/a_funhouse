/**
 * Created by Victoria on 2/29/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {GlobalPage} from '../../global/global-service';
import {AboutUsPageInterface} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'Aboutus-page',
    templateUrl: './app/webpages/aboutus-page/aboutus.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent, WidgetModule, ROUTER_DIRECTIVES],
    providers: [GlobalPage],
})

export class AboutUsPage implements OnInit{
    whatIs = 'Joyful Home?';
    au_pa1 = "Founded in July, 2015, Wichita, Kan. - based Joyful Home is a trusted community marketplace for people to discover their prospective joyful home.";
    au_pa2 = "Whether you are buying your first home, starting a family or looking to retire in the home of your dreams, Joyful Home connects you to real estate listings—from multi-million dollar mansions to budget-friendly starter homes—in over 3,000 counties in the United States. With an ever-growing database of listings from prime real estate agents across the United States, Joyful Home is the easiest way to purchase your next home.";

    au_icon1 = './app/public/icons/Listing_Icon.png';
    au_icon2 = './app/public/icons/Building_Icon.png';
    au_icon3 = './app/public/icons/Real_Estate_Icon.png';
    au_icon4 = './app/public/icons/Globe_Icon.png';
    nat_map = './app/public/icons/AboutUs_Map.png';

    subText1 = "Listings For Sale";
    subText2 = "Cities in United States";
    subText3 = "Real Estate Agents";
    subText4 = "Counties in United States";
    subText_nat = "Listings Nationwide";

    mainText1 = "1,515,674"; // this is for listing for sale
    mainText2 = "32,326"; // number of cities in the U.S.
    mainText3 = "39,612"; // Real Easte Angents
    mainText4 = "3,143"; // United States' counties
    mainText_nat = "1,515,674+"; // listings nationwide

    titleData: {};

    constructor(private _router: Router, private _aboutUs: GlobalPage, private globalFunctions: GlobalFunctions) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }

    getData(){
      this._aboutUs.getAboutUsData().subscribe(data => {
           this.mainText1 = this.globalFunctions.commaSeparateNumber(data.listings);
           this.mainText2 = this.globalFunctions.commaSeparateNumber(data.cities);
           this.mainText3 = this.globalFunctions.commaSeparateNumber(data.brokers);
           this.mainText4 = this.globalFunctions.commaSeparateNumber(data.counties);
           this.mainText_nat = this.globalFunctions.commaSeparateNumber(data.listings) + " +";
      })
      //About us title
      this.titleData = {
          imageURL : './app/public/joyfulhome_house.png',
          smallText1 : 'Last Updated: Monday, February 26, 2016',
          smallText2 : ' United States of America',
          heading1 : 'About Us',
          heading2 : '',
          heading3 : 'Take a seat and get to know us better.',
          heading4 : '',
          icon: 'fa fa-map-marker',
          hasHover: false
      };
    }

    nav(event){
      var value = event.target.value;
      switch(value){
        case "About":
          this._router.navigate(['Aboutus-page']);
          break;
        case "Contact":
          this._router.navigate(['Contactus-page']);
          break;
        case "Disclaimer":
          this._router.navigate(['Disclaimer-page']);
          break;
      }
    }

    ngOnInit(){
        this.getData();
    }
}
