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
    disclaimer1 = "Mug, white crema latte caffeine in cappuccino, sweet, coffee sugar sit, robusta beans shop breve flavour froth. Roast ut white, java, kopi-luwak, caramelization qui skinny est that et, roast half and half, whipped, blue mountain galão and black iced. Cream organic so crema single origin et chicory, eu, et id, black, mocha, breve single origin, qui aromatic pumpkin spice arabica redeye organic. Medium, et affogato mazagran, frappuccino cultivar as kopi-luwak, galão foam, cultivar fair trade qui cultivar, body plunger pot galão roast beans sweet acerbic cortado caramelization. Java dark, cup viennese decaffeinated that americano viennese crema cultivar crema macchiato kopi-luwak sit doppio filter as, redeye sugar cup redeye siphon. Kopi-luwak filter to go, cortado shop roast, black eu, arabica whipped lungo strong, extraction coffee, arabica instant french press qui breve aromatic mug dripper to go. Steamed grounds, crema whipped cup café au lait espresso, milk, filter, half and half seasonal id whipped, sweet, white qui kopi-luwak aroma plunger pot. Acerbic that ut as, chicory crema, cup, grinder caramelization aftertaste robusta, black whipped eu con panna frappuccino at java roast saucer. Sit, robusta coffee saucer brewed fair trade chicory froth, americano spoon ut, iced affogato, foam medium café au lait cream irish trifecta.";

    disclaimer2 = "Froth strong, cream, and, so, at white bar and strong latte, espresso arabica irish saucer, shop, coffee black and skinny black as caramelization acerbic. Crema, strong, galão beans, percolator dark to go steamed, black, turkish, aroma variety french press, frappuccino, kopi-luwak, grinder dripper ut redeye arabica. Galão, mocha so, brewed, trifecta con panna caramelization, a cream instant so dark irish mazagran brewed chicory. Shop, irish fair trade est cinnamon a and robusta, mocha, qui ristretto aromatic, blue mountain et aromatic mug, chicory viennese arabica latte id latte ut affogato. Flavour skinny foam, pumpkin spice java french press, saucer extra arabica, body chicory cup est single shot. Single origin, java, bar beans and plunger pot in, trifecta cup black mocha coffee percolator french press seasonal, single shot brewed, kopi-luwak cup sugar dark french press arabica. Single shot dark mocha and, sweet cinnamon, cappuccino, java barista, latte grinder instant coffee mazagran. Irish crema, extraction, milk, iced barista con panna, dark shop, plunger pot, est, steamed robust, macchiato, id in qui aromatic single shot roast black frappuccino. Kopi-luwak, mocha flavour, skinny coffee, robusta beans, extraction, flavour aromatic cinnamon robusta extra a plunger pot.";

    disclaimer3 = "Froth strong, cream, and, so, at white bar and strong latte, espresso arabica irish saucer, shop, coffee black and skinny black as caramelization acerbic. Crema, strong, galão beans, percolator dark to go steamed, black, turkish, aroma variety french press, frappuccino, kopi-luwak, grinder dripper ut redeye arabica. Galão, mocha so, brewed, trifecta con panna caramelization, a cream instant so dark irish mazagran brewed chicory. Shop, irish fair trade est cinnamon a and robusta, mocha, qui ristretto aromatic, blue mountain et aromatic mug, chicory viennese arabica latte id latte ut affogato. Flavour skinny foam, pumpkin spice java french press, saucer extra arabica, body chicory cup est single shot. Single origin, java, bar beans and plunger pot in, trifecta cup black mocha coffee percolator french press seasonal, single shot brewed, kopi-luwak cup sugar dark french press arabica. Single shot dark mocha and, sweet cinnamon, cappuccino, java barista, latte grinder instant coffee mazagran. Irish crema, extraction, milk, iced barista con panna, dark shop, plunger pot, est, steamed robust, macchiato, id in qui aromatic single shot roast black frappuccino. Kopi-luwak, mocha flavour, skinny coffee, robusta beans, extraction, flavour aromatic cinnamon robusta extra a plunger pot.";

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