/**
 * Created by Victoria on 2/29/2016.
 */
import {Component, OnInit} from 'angular2/core';
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
    au_pa1 = "High Life street art selvage polaroid, mustache 90's Kickstarter brunch cold-pressed. Cliche swag freegan pour-over mixtape mustache. Art party twee asymmetrical, heirloom sustainable cray crucifix mlkshk Bushwick dreamcatcher master cleanse four dollar toast. Skateboard Pitchfork meditation Neutra wayfarers, cardigan put a bird on it blog American Apparel freegan post-ironic sartorial small batch tote bag. Pop-up art party brunch sustainable Blue Bottle, mustache salvia single-origin coffee cardigan Etsy Godard meggings lomo. Dreamcatcher 3 wolf moon High Life health goth gastropub, Echo Park raw denim try-hard. Freegan keytar fashion axe, crucifix migas tousled narwhal Brooklyn post-ironic Bushwick pug bicycle rights lo-fi cliche High Life.";
    au_pa2 = " Art party you probably haven't heard of them Vice VHS jean shorts. Typewriter pug artisan, deep v lo-fi locavore shabby chic keytar gentrify asymmetrical PBR keffiyeh. Odd Future High Life XOXO chia, fixie paleo occupy cliche disrupt craft beer. Keytar photo booth chillwave scenester crucifix Schlitz. Paleo brunch mustache sustainable, flannel banh mi Odd Future. Seitan deep v heirloom craft beer Shoreditch lo-fi, pork belly taxidermy distillery yr letterpress ennui. Wayfarers narwhal taxidermy VHS.";

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
}