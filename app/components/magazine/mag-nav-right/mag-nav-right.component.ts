/**
 * Created by Christopher Lynch on 2/24/2016.
 */

//import {Component, Output, EventEmitter} from 'angular2/core';
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Input} from "angular2/core";

declare var jQuery:any;

@Component({
    selector: 'mag-nav-right-component',
    templateUrl: './app/components/magazine/mag-nav-right/mag-nav-right.component.html',
    
    directives: [],
    //outputs: ['navRight']
})
export class NavRightComponent {
    @Input() toc:any;
    isClicked:boolean = false;

    constructor(
        private _router: Router
    ){ }

    clickNext(){
        if (!this.isClicked) {
            this.isClicked = true;
            setTimeout(() => {
                this.isClicked = false;
            }, 1000);
            let currentPageLink = jQuery("magtab-component a.router-link-active");
            let currentIndex = currentPageLink.index();
            let nextLink = currentPageLink.next("a");
            jQuery(".router-link-active").removeClass("router-link-active");
            let firstLink = jQuery("magtab-component a:first-child");
            let args = firstLink.attr("href").split("/");
            let address = args[2];
            if (!nextLink.length) {
                this._router.navigate([this.toc[0].routeName]);
                firstLink.addClass("router-link-active");
            } else {
                this._router.navigate([this.toc[currentIndex + 1].routeName]);
                nextLink.addClass("router-link-active");
            }
        }
    }

}
