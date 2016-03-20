/**
 * Created by Victoria on 2/25/2016.
 */
import {Component} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {TilesComponent} from "../../components/tiles/tiles.component";
import {Router,ROUTER_DIRECTIVES} from 'angular2/router';

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
    header = 'Joyful Home Disclaimer';
    logo = './app/public/joyfulhome_logo_large.png';
    tileUrl = '/disclaimer';
    heading = 'Disclaimer';
    subText = 'Market data delayed 15 minutes.';
    mainText = 'This site is powered by JoyfulHomes. Ideas and opinions presented on this website are for informational and educational purposes only,and do not reflect the opinions of JoyfulHomes, or any of its alliates, subsidiaries or partners.';
    provider = '© 2016 Data provided by ListHub®';
    buttonText = 'See The Full Disclaimer';

    constructor(
        private _router: Router
    ){}

    ngOnInit(){
        this.module_title = 'Learn More About Joyful Home';
        this.aboutUsData = {
          button_txt: 'Open Page',
          url1: 'Aboutus-page',
          icon1: 'fa-info-circle',
          title1: 'About Us',
          desc1: 'What is Joyful Home?',
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
