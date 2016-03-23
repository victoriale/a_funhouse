import {Component, Input, OnInit} from 'angular2/core';
import {moduleHeader} from "../../components/module-header/module-header";
import {imageHeader} from "../../components/image-header/image-header";
declare var jQuery: any;

@Component({
    selector: 'find-your-home-module',
    templateUrl: './app/modules/find-your-home/find-your-home.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, imageHeader],
    providers: [],
})

export class FindYourHomeModule implements OnInit{
    @Input() locDisplay;

    public module_title: string;
    public imageUrl: string;
    public location: string;

    private filterMinPrice = 50;
    private filterMaxPrice = 10000;
    private filterBedrooms: string = 'empty';
    private filterBathrooms: string  = 'empty';
    private filterSqft: string  = 'empty';
    private filterLot: string  = 'empty';
    private filterType: string  = 'empty';

    // Params to send to list page
    public filter_minPrice = this.filterMinPrice * 1000;
    public filter_maxPrice = this.filterMaxPrice * 1000;
    public filter_numBedrooms = this.filterBedrooms;
    public filter_numBathrooms = this.filterBathrooms;
    public filter_sqFeet = this.filterSqft;
    public filter_lotSize = this.filterLot;
    public filter_type = this.filterType;

    // location/findYourHome/{state}/{city}/{priceLowerBound}/{priceUpperBound}/{type}/{bedrooms}/{bathrooms}/{squareFeet}/{lotSize}
    // types: Townhouse, Condominium, Apartment, and Single Family Attached
    // last 5 optional, pass string 'empty' if no option selected

    // EVENTS

    // Get selected radio input value for property type
    onClickPropertyType() {
        this.filterType = jQuery('input:checked').val()
        console.log(this.filterType);
    }

    // Get selected select value for property options
    onSelectBedrooms() {
        this.filterBedrooms = jQuery('option:selected').val();
        console.log(this.filterBedrooms);
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
            var min = 0, max = jQuery('#maxBall').position().left - 20;
            var oldPerc = Math.round((jQuery('#maxBall').position().left + 5)/636 * 100);
        } else {
            var max = 632, min = jQuery('#minBall').position().left + 20;
            var oldPerc = Math.round((jQuery('#minBall').position().left + 5)/636 * 100);
        }

        if ( position <= max && position >= min ) {
            var newVal = Math.round(this.logslider(position));
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
            var avg = Math.round((this.filterMinPrice) + this.filterMaxPrice) / 2;
            var avgPos = Math.round((jQuery('#minBall').position().left + jQuery('#maxBall').position().left) / 2);
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

    ngOnInit() {
        this.module_title = "Find Your Next Joyful Home";
        this.imageUrl = "app/public/filter_background.jpg";
        this.location = this.locDisplay;
    }

}