/**
 * Created by Victoria on 2/29/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';
import {WidgetModule} from "../../modules/widget/widget.module";
import {Router,ROUTER_DIRECTIVES, RouteParams} from 'angular2/router';
import {GlobalPage} from '../../global/global-service';
import {AboutUsPageInterface} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';
import {Injector} from 'angular2/core';
import {WebApp} from '../../app-layout/app.layout';
import {AuHeaderComponent} from '../../components/au-header/au-header.component';
import {SeoService} from "../../global/seo.service";

@Component({
    selector: 'Aboutus-page',
    templateUrl: './app/webpages/aboutus-page/aboutus.page.html',

    directives: [BackTabComponent, TitleComponent, AuHeaderComponent, WidgetModule, ROUTER_DIRECTIVES],
    providers: [GlobalPage,SeoService],
})

export class AboutUsPage implements OnInit{
    whatIs = "";
    pageName = "";

    au_icon1 = '/app/public/icons/Listing_Icon.png';
    au_icon2 = '/app/public/icons/Building_Icon.png';
    au_icon3 = '/app/public/icons/Real_Estate_Icon.png';
    au_icon4 = '/app/public/icons/Globe_Icon.png';
    nat_map = '/app/public/icons/AboutUs_Map.png';

    subText1 = "Listings For Sale";
    subText2 = "Cities in United States";
    subText3 = "Real Estate Agents";
    subText4 = "Counties in United States";
    subText_nat = "Where We Are Located";

    mainText1 = ""; // this is for listing for sale
    mainText2 = "31,102"; // number of cities in the U.S.
    mainText3 = ""; // Real Easte Angents
    mainText4 = "3,143"; // United States' counties
    mainText_nat = ""; // listings nationwide
    public partnerParam: string;
    public partnerID: string;
    titleData: {};
    auHeaderTitle: string;

    constructor(private injector:Injector, private _router: Router, private _aboutUs: GlobalPage, private globalFunctions: GlobalFunctions , private _seo:SeoService, private _routeParams: RouteParams) {
        // Scroll page to top to fix routerLink bug
        this._router.root
            .subscribe(
                route => {
                  var curRoute = route;
                  var partnerID = curRoute.split('/');
                  if(partnerID[0] == ''){
                    this.partnerID = null;
                  }else{
                    this.partnerID = partnerID[0];
                  }

                  this.getData();
                  this.createMetaTags(this.titleData);
                  if(this.partnerID === null ){
                    this.pageName = "Joyful Home";
                  } else {
                    this.pageName = "My HouseKit";
                  }
                  this.auHeaderTitle = "<b>What is </b>" + this.pageName;
                }
            )//end of route subscribe
        window.scrollTo(0, 0);
    }

    getData(){
      this._aboutUs.getAboutUsData().subscribe(data => {

           this.mainText1 = this.globalFunctions.commaSeparateNumber(data.listings);
           this.mainText2 = this.globalFunctions.commaSeparateNumber(data.cities);
           this.mainText3 = this.globalFunctions.commaSeparateNumber(data.brokers);
           this.mainText4 = this.globalFunctions.commaSeparateNumber(data.counties);
           this.mainText_nat = this.globalFunctions.commaSeparateNumber(data.listings);

      })
      //About us title
      this.titleData = {
          imageURL : '/app/public/joyfulhome_house.png',
          smallText1 :'Last Updated: ' + this.globalFunctions.formatGlobalDate(new Date(),'timeZone'),
          smallText2 : ' United States',
          heading1 : 'About Us',
          heading2 : '',
          heading3 : 'Take a seat and get to know us better.',
          heading4 : '',
          icon: 'fa fa-map-marker',
          hasHover: false
      };
    }

    ngOnInit(){



    }
    /* Navigates to top of page on navigation */
    routerOnDeactivate(){
        window.scrollTo(0,0);
    }

    createMetaTags(data){
        this._seo.removeMetaTags();

        let metaDesc = 'We created Wichita, Kan. -based {{pageName}} in July, 2015 to connect prospective home buyers with genuine, personable and informative real estate listings.';
        let link = window.location.href;
        let title = data.heading1 + " - " + data.heading3;
        let ImageU = data.imageURL;
        this._seo.setTitle(title);
        this._seo.setMetaDescription(metaDesc);
        this._seo.setCanonicalLink(this._routeParams,this._router);

        this._seo.setMetaTags(
            [
                {
                    'og:title': title,
                },
                {
                    'og:description': metaDesc,
                },
                {
                    'og:type':'website',
                },
                {
                    'og:url':link,
                },
                {
                    'og:image': ImageU,
                },
                {
                    'es_page_title': title,
                },
                {
                    'es_page_url': link,
                },
                {
                    'es_description': metaDesc,
                },
                {
                    'es_page_type': 'About us page',
                },
                {
                    'es_keywords': 'joyful home, about us'
                }
            ]
        )

    }
}
