import {Component} from 'angular2/core';
declare var jQuery: any;

@Component({
    selector: 'widget-module',
    templateUrl: './app/modules/widget/widget.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
})

export class WidgetModule {

    isScrollingPage: boolean;

    // Page is being scrolled
    onScroll(event) {

        //var scrollTop = jQuery(window).scrollTop();
        //
        //if (55 > scrollTop) {
        //    this.isScrollingPage = false;
        //}else{
        //    this.isScrollingPage = true;
        //}

        var y_buffer = 65;
        var y_top = jQuery('.header-bottom-bar-wrapper').offset().top + jQuery('.header-bottom-bar-wrapper').height();
        if ( jQuery(window).scrollTop() < jQuery('.container').offset().top + y_buffer ) {
            jQuery('.widget').attr('style','');
        } else if ( jQuery(window).scrollTop() + jQuery('.widget').height() + (y_buffer * 2) > jQuery('.footer-top-bar-wrapper').offset().top ) {
            jQuery('.widget').attr('style','');
            jQuery('.widget').css({position: 'fixed', bottom: 674 + 'px'});
        } else {
            jQuery('.widget').attr('style','');
            jQuery('.widget').css({position: 'fixed', top: y_buffer + 'px'});
        }

        //console.log('scroll event', event, scrollTop, scrollBottom, this.isScrollingPage);
    }

}