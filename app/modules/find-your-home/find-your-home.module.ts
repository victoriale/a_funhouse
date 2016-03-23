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

    // location/findYourHome/{state}/{city}/{priceLowerBound}/{priceUpperBound}/{type}/{bedrooms}/{squareFeet}/{lotSize}
    // last 4 optional, pass string 'null' if no option selected

    // EVENTS
    onClickPropertyType() {
        jQuery('input[type="checkbox"]').on('change', function() {
            jQuery('input[name="' + this.name + '"]').not(this).prop('checked', false);
        });
    }

    // SUBSCRIBE
    getFindYourHome() {

    }

    // FUNCTIONS
    //logslider(position,reverse) {
    //    // position will be between 0 and 100
    //    var minp = 0;
    //    var maxp = 632;
    //
    //    // The result should be between 100 an 10000000
    //    var minv = Math.log(50);
    //    var maxv = Math.log(10000);
    //
    //    // calculate adjustment factor
    //    var scale = (maxv-minv) / (maxp-minp);
    //
    //    if ( typeof reverse == "undefined" ) {
    //        return Math.exp(minv + scale*(position-minp));
    //    } else {
    //        return (Math.log(position)-minv) / scale + minp;
    //    }
    //}
    //
    //function MoveBall(id,position) {
    //    if ( typeof position == "undefined" ) {
    //        var position = $("#" + id).position().left;
    //    }
    //
    //    if ( id == 'minBall' ) {
    //        var min = 0, max = $('#maxBall').position().left - 20;
    //        var oldPerc = Math.round(($('#maxBall').position().left + 5)/636 * 100);
    //    } else {
    //        var max = 632, min = $('#minBall').position().left + 20;
    //        var oldPerc = Math.round(($('#minBall').position().left + 5)/636 * 100);
    //    }
    //
    //    if ( position <= max && position >= min ) {
    //        var newVal = Math.round(logslider(position));
    //        $('#' + id).css({left: position});
    //        if ( id == 'minBall' ) {
    //            Session.set('FilterMinPrice',newVal);
    //        } else if ( id == 'maxBall' ) {
    //            Session.set('FilterMaxPrice',newVal);
    //        }
    //        if ( position == 632 ) {
    //            newVal = "$10M+";
    //        } else if ( newVal > 1000 ) {
    //            newVal = Math.round(newVal/100)/10;
    //            newVal = "$" + newVal + "M";
    //        } else {
    //            newVal = "$" + newVal + "K";
    //        }
    //        var newXPerc = Math.round(position/636*100);
    //        if ( id == 'minBall' ) {
    //            $('.price_slider_bar').css('background','linear-gradient(to right, #cccccc 0%, #cccccc ' + newXPerc + '%, #44b224 ' + newXPerc + '%, #44b224 ' + oldPerc + '%, #cccccc ' + oldPerc + '%, #cccccc 100%)');
    //            $('#maxBall').find('input').each(function(){
    //                $(this).css('top','30px');
    //            });
    //        } else {
    //            $('.price_slider_bar').css('background','linear-gradient(to right, #cccccc 0%, #cccccc ' + oldPerc + '%, #44b224 ' + oldPerc + '%, #44b224 ' + newXPerc + '%, #cccccc ' + newXPerc + '%, #cccccc 100%)');
    //            $('#minBall').find('input').each(function(){
    //                $(this).css('top','30px');
    //            });
    //        }
    //        $('#' + id).find('input').each(function(){
    //            $(this).val(newVal);
    //            if ( id == 'maxBall' ) {
    //                if ( (position - min) < 40 ) {
    //                    $(this).css('top','-25px');
    //                } else {
    //                    $(this).css('top','30px');
    //                }
    //            } else {
    //                if ( (max - position) < 40 ) {
    //                    $(this).css('top','-25px');
    //                } else {
    //                    $(this).css('top','30px');
    //                }
    //            }
    //        });
    //        var avg = Math.round((Session.get('FilterMinPrice') + Session.get('FilterMaxPrice')) / 2);
    //        var avgPos = Math.round(($('#minBall').position().left + $('#maxBall').position().left) / 2);
    //        if ( (avgPos - $('#minBall').position().left) < 100 ) {
    //            $('.price_slider_avg').css('display','none');
    //        } else {
    //            $('.price_slider_avg').css({left: avgPos - 55, display: 'block'});
    //            if ( avg.toString().length > 3 ) {
    //                avg = "$" + (avg/1000).toFixed(3) + "M";
    //            } else {
    //                avg = "$" + avg + "K";
    //            }
    //            $('.price_slider_avg span')[0].innerHTML = avg + " Average";
    //        }
    //        return true;
    //    } else {
    //        return false;
    //    }
    //}

    ngOnInit() {
        this.module_title = "Find Your Next Joyful Home";
        this.imageUrl = "app/public/filter_background.jpg";
        this.location = this.locDisplay;

        //var filterMinPrice = 50;
        //var filterMaxPrice = 10000;
        //var filterSuspend = false;
        //var filterBedrooms = 0;
        //var filterBathrooms = 0;
        //var filterSqft = 0;
        //var filterLot = 0;
        //var filterType = '';
        //var filterNum = -1;
    }

}