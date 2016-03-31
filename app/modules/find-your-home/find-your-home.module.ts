import {Component, Input, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {imageHeader} from "../../components/image-header/image-header";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
declare var jQuery: any;

@Component({
    selector: 'find-your-home-module',
    templateUrl: './app/modules/find-your-home/find-your-home.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, imageHeader, ROUTER_DIRECTIVES],
    providers: [],
})

export class FindYourHomeModule implements OnInit{
    @Input() locDisplay;
    @Input() locState;
    @Input() locCity;

    public module_title: string;
    public imageUrl: string;
    public location: string;

    private filterMinPrice = 50;
    private filterMaxPrice = 10000;
    private filterBedrooms: any = 'empty';
    private filterBathrooms: any  = 'empty';
    private filterSqFeet: any  = 'empty';
    private filterLot: any  = 'empty';
    private filterType: any  = 'empty';
    private filterLimit: any = 20;
    private filterPage: any = 1;

    constructor(private _router: Router) {}

    // location/findYourHome/{state}/{city}/{priceLowerBound}/{priceUpperBound}/{type}/{bedrooms}/{bathrooms}/{squareFeet}/{lotSize}/{limit}/{page}
    // types: Townhouse, Condominium, Apartment, and Single Family Attached

    // EVENTS
    // Get selected radio input value for property type
    onClickPropertyType() {
        this.filterType = jQuery('input:checked').val();
        //console.log(this.filterType);
    }

    // Get selected select value for number bedrooms
    onSelectBedrooms() {
        this.filterBedrooms = jQuery('#select-bedrooms').val();
        //console.log(this.filterBedrooms);
    }

    // Get selected select value for number bathrooms
    onSelectBathrooms() {
        this.filterBathrooms = jQuery('#select-bathrooms').val();
        //console.log(this.filterBathrooms);
    }

    // Get selected select value for Sq Feet
    onSelectSqFeet() {
        this.filterSqFeet = jQuery('#select-square-feet').val();
        //console.log(this.filterSqFeet);
    }

    // Get selected select value for number bathrooms
    onSelectLotSize() {
        this.filterLot = jQuery('#select-lot-size').val();
        //console.log(this.filterLot);
    }

    onClearClick() {
        // Clear radio buttons
        jQuery('input[name=type]').attr('checked',false);
        jQuery('select').prop('selectedIndex', 0);
        // Reset ball positions
        this.moveBall('minBall', 0);
        this.moveBall('maxBall', 632);
    }

    onViewClick() {
        // Params to send to list page
        this.filterMinPrice = this.filterMinPrice * 1000;
        this.filterMaxPrice = this.filterMaxPrice * 1000;

        console.log('FYH-Params: ', this.filterMinPrice, this.filterMaxPrice, this.filterBedrooms, this.filterBathrooms, this.filterSqFeet, this.filterLot, this.filterType);

        // Send router to list page with query params attached
        this._router.navigate(['List-page-filter', {viewType: 'list', listname: 'filter', state: this.locState, city: this.locCity, priceLowerBound: this.filterMinPrice, priceUpperBound: this.filterMaxPrice, type: this.filterType, bedrooms: this.filterBedrooms, bathrooms: this.filterBathrooms, squareFeet: this.filterSqFeet, lotSize: this.filterLot, limit: this.filterLimit, page: this.filterPage}]);
    }

    onInputFocus($event) {
        var stringVal = jQuery(event.target)[0].value;
        if ( stringVal.indexOf('.') != -1 ) {
            stringVal = this.numberToCommaNumber(stringVal.replace('$','').replace('.','').replace('M','00000').replace('K','000').replace('+',''));
        } else {
            stringVal = this.numberToCommaNumber(stringVal.replace('$','').replace('M','000000').replace('K','000').replace('+',''));
        }
        jQuery(event.target).val(stringVal);
        if ( jQuery(event.target)[0].setSelectionRange ) {
            jQuery(event.target)[0].setSelectionRange(99,100);
        }
    }

    onInputBlur($event) {
        var stringVal = jQuery(event.target)[0].value;
        stringVal = stringVal.replace(/,/g,'');
        var xPos = Math.round(this.logslider(Number(stringVal)/1000,1));
        if ( jQuery(jQuery(event.target)[0].parentElement).is('#minBall') ) {
            if ( !this.moveBall('minBall',xPos) ) {
                this.moveBall('minBall', undefined);
                return true;
            }
        } else if ( jQuery(jQuery(event.target)[0].parentElement).is('#maxBall') ) {
            if ( !this.moveBall('maxBall',xPos) ) {
                this.moveBall('maxBall', undefined);
                return true;
            }
        }
        if ( stringVal.toString().length > 6 ) {
            stringVal = "$" + (Math.round(Number(stringVal)/100000)/10) + "M";
        } else {
            stringVal = "$" + Math.round(Number(stringVal)/1000) + "K";
        }
        jQuery(event.target)[0].value = stringVal;
    }

    onClickBall($event) {
        var self = this;
        //console.log('mousedown');
        if ( !jQuery($event.target).hasClass('price_slider_ball') ) {
            return true;
        }
        var data = {target: $event.target};
        var startX = $event.pageX;
        var startXButton = jQuery($event.target).position().left;
        if ( jQuery($event.target).is('#minBall') ) {
            var eventId = 'minBall';
        } else {
            var eventId = 'maxBall';
        }
        jQuery(document).mouseup(function(){
            jQuery(document).unbind('mousemove');
        });
        jQuery(document).mousemove(data,function(e){
            var newX = (startXButton + (e.pageX - startX));
            self.moveBall(eventId,newX);
            return false;
        });
    }

    // FUNCTIONS
    logslider(position,reverse) {
        // position will be between 0 and 100
        var minp = 0;
        var maxp = 632;

        // The result should be between 100 an 10000000
        var minv = Math.log(50);
        var maxv = Math.log(10000);

        // calculate adjustment factor
        var scale = (maxv-minv) / (maxp-minp);

        if ( typeof reverse == "undefined" ) {
            return Math.exp(minv + scale*(position-minp));
        } else {
            return (Math.log(position)-minv) / scale + minp;
        }
    }

    moveBall(id,position) {
        if ( typeof position == "undefined" ) {
            var position = jQuery("#" + id).position().left;
        }

        if ( id == 'minBall' ) {
            var min: number = 0, max: number = jQuery('#maxBall').position().left - 20;
            var oldPerc = Math.round((jQuery('#maxBall').position().left + 5)/636 * 100);
        } else {
            var max: number = 632, min: number = jQuery('#minBall').position().left + 20;
            var oldPerc = Math.round((jQuery('#minBall').position().left + 5)/636 * 100);
        }

        if ( position <= max && position >= min ) {
            var newVal: any = Math.round(this.logslider(position, undefined));
            jQuery('#' + id).css({left: position});
            if ( id == 'minBall' ) {
               this.filterMinPrice = newVal;
                //console.log(this.filterMinPrice * 1000);
            } else if ( id == 'maxBall' ) {
                this.filterMaxPrice = newVal;
                //console.log(this.filterMaxPrice * 1000);
            }
            if ( position == 632 ) {
                newVal = "$10M+";
            } else if ( newVal > 1000 ) {
                newVal = Math.round(newVal/100)/10;
                newVal = "$" + newVal + "M";
            } else {
                newVal = "$" + newVal + "K";
            }
            var newXPerc = Math.round(position/636*100);
            if ( id == 'minBall' ) {
                jQuery('.price_slider_bar').css('background','linear-gradient(to right, #cccccc 0%, #cccccc ' + newXPerc + '%, #44b224 ' + newXPerc + '%, #44b224 ' + oldPerc + '%, #cccccc ' + oldPerc + '%, #cccccc 100%)');
                jQuery('#maxBall').find('input').each(function(){
                    jQuery(this).css('top','30px');
                });
            } else {
                jQuery('.price_slider_bar').css('background','linear-gradient(to right, #cccccc 0%, #cccccc ' + oldPerc + '%, #44b224 ' + oldPerc + '%, #44b224 ' + newXPerc + '%, #cccccc ' + newXPerc + '%, #cccccc 100%)');
                jQuery('#minBall').find('input').each(function(){
                    jQuery(this).css('top','30px');
                });
            }
            jQuery('#' + id).find('input').each(function(){
                jQuery(this).val(newVal);
                if ( id == 'maxBall' ) {
                    if ( (position - min) < 40 ) {
                        jQuery(this).css('top','-25px');
                    } else {
                        jQuery(this).css('top','30px');
                    }
                } else {
                    if ( (max - position) < 40 ) {
                        jQuery(this).css('top','-25px');
                    } else {
                        jQuery(this).css('top','30px');
                    }
                }
            });
            var avg: any = Math.round((this.filterMinPrice) + this.filterMaxPrice) / 2;
            var avgPos: any = Math.round((jQuery('#minBall').position().left + jQuery('#maxBall').position().left) / 2);
            if ( (avgPos - jQuery('#minBall').position().left) < 100 ) {
                jQuery('.price_slider_avg').css('display','none');
            } else {
                jQuery('.price_slider_avg').css({left: avgPos - 55, display: 'block'});
                if ( avg.toString().length > 3 ) {
                    avg = "$" + (avg/1000).toFixed(3) + "M";
                } else {
                    avg = "$" + avg + "K";
                }
                jQuery('.price_slider_avg p')[0].innerHTML = avg + " Average";
            }
            return true;
        } else {
            return false;
        }
    }

    numberToCommaNumber(Number) {
        return Number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    ngOnInit() {
        this.module_title = "Find Your Next Joyful Home";
        this.imageUrl = "app/public/filter_background.jpg";
        this.location = this.locDisplay;
    }

}