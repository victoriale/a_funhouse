/**
 * Created by Victoria on 2/25/2016.
 */
import {Component} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {TilesComponent} from "../../components/tiles/tiles.component";
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {Injector} from 'angular2/core';
import {WebApp} from '../../app-layout/app.layout';
@Component({
    selector: 'about-us-module',
    templateUrl: './app/modules/aboutus/aboutus.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent, ROUTER_DIRECTIVES],
    providers: []
})
export class AboutUsModule{
    module_title: string;
    aboutUsData: any;
    pageName = "";
    header = '';
    logo = '';
    tileUrl = '/disclaimer';
    heading = 'Disclaimer';
    subText = 'Market data delayed 15 minutes.';
    mainText = '';
    buttonText = 'See The Full Disclaimer';
    public partnerParam: string;
    public partnerID: string;
    constructor(private injector:Injector, private _router: Router){
      let partnerParam = this.injector.get(WebApp);
      this.partnerID = partnerParam.partnerID;
      window.scrollTo(0, 0);
    }

    ngOnInit(){
      if(this.partnerID === null ){
        this.pageName = "Joyful Home";
        this.logo = './app/public/joyfulhome_logo_large.png';
      } else {
        this.pageName = "My HouseKit";
        this.logo = './app/public/myhousekit_logo.png';
      }
      this.header = this.pageName + ' Disclaimer';
      this.mainText = 'This site is powered by '+this.pageName+'. Ideas and opinions presented on this website are for informational and educational purposes only,and do not reflect the opinions of '+this.pageName+', or any of its alliates, subsidiaries or partners.';
      this.module_title = 'Learn More About ' + this.pageName;
      this.aboutUsData = {
        button_txt: 'Open Page',
        url1: 'Aboutus-page',
        icon1: 'fa-info-circle',
        title1: 'About Us',
        desc1: 'What is '+ this.pageName +'?',
        url2: 'Contactus-page',
        icon2: 'fa-phone',
        title2: 'Contact Us',
        desc2: 'Help us help you faster.',
        url3: 'Disclaimer-page',
        icon3: 'fa-folder-open-o',
        title3: 'Disclaimer',
        desc3: 'Read the full disclaimer.'
      }
    }
}
