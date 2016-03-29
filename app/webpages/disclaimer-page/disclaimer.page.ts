/**
 * Created by Victoria on 3/1/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Injector} from 'angular2/core';
import {WebApp} from '../../app-layout/app.layout';

@Component({
    selector: 'Disclaimer-page',
    templateUrl: './app/webpages/disclaimer-page/disclaimer.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent, WidgetModule, ROUTER_DIRECTIVES],
    providers: [],
})

export class DisclaimerPage implements OnInit{
    pageName = "";
    pageLink = "";
    heading = "Disclaimer";
    disclaimer1 = "";
    disclaimer2 = "";
    disclaimer3 = "";
    disclaimer4 = "";
    disclaimer5 = "";
    disclaimer6 = "";
    disclaimer7 = "";
    disclaimer8 = "";
    public partnerParam: string;
    public partnerID: string;
    title_data: {};

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

    constructor(private injector:Injector, private _router: Router) {
        // Scroll page to top to fix routerLink bug
        let partnerParam = this.injector.get(WebApp);
        this.partnerID = partnerParam.partnerID;
        console.log(partnerParam, this.partnerID);
        window.scrollTo(0, 0);
    }

    getData(){
      if(this.partnerID === null ){
        this.pageName = "Joyful Home";
        this.pageLink = "www.joyfulhome.com";
      } else {
        this.pageName = "My HouseKit";
        this.pageLink = "www.myhousekit.com/" + this.partnerID;
      }
      //disclaimer data
      this.title_data = {
          imageURL : './app/public/joyfulhome_house.png',
          smallText1 : 'Last Updated: Saturday, December 19, 2015.',
          smallText2 : ' United States of America',
          heading1 : 'Disclaimer',
          heading2 : '',
          heading3 : 'For ' + this.pageName,
          heading4 : '',
          icon: 'fa fa-map-marker',
          hasHover: false
      };
      this.disclaimer1 = "";
      this.disclaimer2 = "All the information on this website is published in good faith and for general information purpose only. " + this.pageLink + " does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (" + this.pageLink + "), is strictly at your own risk. " + this.pageLink + " will not be liable for any losses and/or damages in connection with the use of our website.";
      this.disclaimer3 = "From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.";
      this.disclaimer4 = 'Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.';
      this.disclaimer5 = "By using " + this.pageLink + ", you hereby consent to our disclaimer and agree to its terms.";
      this.disclaimer6 = "This site disclaimer was last updated on Saturday, December 19, 2015. ";
      this.disclaimer7 = "Should we update, amend or make any changes to this document, those changes will be prominently posted here.";
      this.disclaimer8 = "If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at " + this.pageLink + "/contactus.";
    }

    ngOnInit(){
        this.getData();
    }
}
