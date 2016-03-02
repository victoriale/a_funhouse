/**
 * Created by Victoria on 2/25/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {TilesComponent} from "../../components/tiles/tiles.component";

@Component({
    selector: 'about-us-module',
    templateUrl: './app/modules/aboutus/aboutus.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent],
    providers: []
})
export class AboutUsModule implements OnInit{
    module_title: string;
    header = 'Joyful Home Disclaimer';
    logo = './app/public/joyfulhome_logo_large.png';
    hding = 'Disclaimer';
    subtxt = 'Market data delayed 15 minutes.';
    maintxt = 'This site is powered by JoyfulHomes.ideas and opinions presented on this website are for informational and educational purposes only,and do not reflect the opinions of JoyfulHomes, or any of its alliates, subsidiaries or partners.';
    provider = '© 2015 Data provided by ListHub®';
    btn_txt = 'See The Full Disclaimer';
    tileUrl = '/disclaimer'; //go to disclaimer page

    ngOnInit(){
        this.module_title = 'Learn More About Joyful Home';
    }
}