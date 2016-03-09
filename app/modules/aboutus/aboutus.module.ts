/**
 * Created by Victoria on 2/25/2016.
 */
import {Component} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {TilesComponent} from "../../components/tiles/tiles.component";
import {Router} from 'angular2/router';

@Component({
    selector: 'about-us-module',
    templateUrl: './app/modules/aboutus/aboutus.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, TilesComponent],
    providers: []
})
export class AboutUsModule{
    module_title: string;

    header = 'Joyful Home Disclaimer';
    logo = './app/public/joyfulhome_logo_large.png';
    heading = 'Disclaimer';
    subtext = 'Market data delayed 15 minutes.';
    maintext = 'This site is powered by JoyfulHomes.ideas and opinions presented on this website are for informational and educational purposes only,and do not reflect the opinions of JoyfulHomes, or any of its alliates, subsidiaries or partners.';
    provider = '© 2016 Data provided by ListHub®';
    buttonText = 'See The Full Disclaimer';

    constructor(
        private _router: Router
    ){}

    ngOnInit(){
        this.module_title = 'Learn More About Joyful Home';
        console.log(this);
    }
}