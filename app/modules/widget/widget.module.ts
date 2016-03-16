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
    isBottom: boolean;

    // Page is being scrolled
    onScroll(event) {

        var scrollTop = jQuery(window).scrollTop();
        var scrollBottom = jQuery(window).scrollTop() + jQuery(window).height();

        if (55 > scrollTop) {
            this.isScrollingPage = false;
        }else{
            this.isScrollingPage = true;
        }

        if ((scrollBottom - 600) < scrollBottom) {
            this.isBottom = true;
        }else{
            this.isBottom = false;
        }


        console.log('scroll event', event, scrollTop, scrollBottom, this.isScrollingPage);
    }

}