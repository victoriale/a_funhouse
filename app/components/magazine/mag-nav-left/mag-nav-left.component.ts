/**
 * Created by Christopher Lynch on 2/24/2016.
 */

//import {Component, Output, EventEmitter} from 'angular2/core';
import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Input} from "angular2/core";

declare var jQuery:any;

@Component({
    selector: 'mag-nav-left-component',
    templateUrl: './app/components/magazine/mag-nav-left/mag-nav-left.component.html',
    
    directives: [],
    //outputs: ['navLeft']
})

export class NavLeftComponent {
    @Input() toc:any;

    constructor(
        private _router: Router
    ){ }

    clickPrev(){
        let currentPageLink = jQuery("magtab-component>span>a.router-link-active");
        let currentIndex = currentPageLink.index();
        let prevLink = currentPageLink.prev("a");
        jQuery(".router-link-active").removeClass("router-link-active");
        let lastLink = jQuery("magtab-component>span>a:last-child");
        // console.log(lastLink);
        let args = lastLink.attr("href").split("/");
        let address = args[2];
        // console.log("prevLink.length",prevLink.length);
        if( !prevLink.length){
            this._router.navigate([ this.toc[ this.toc.length-1 ].routeName ]);
            lastLink.addClass("router-link-active");
        }else{
            this._router.navigate([ this.toc[currentIndex-1].routeName ]);
            prevLink.addClass("router-link-active");
        }
    }

}
