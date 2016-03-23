import {Component, Input, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams } from 'angular2/router';
import {MagTabComponent} from "../../../components/magazine/mag-tabs/mag-tabs.component";
import {ShareComponent} from "../../../components/facebook-share/facebook-share.component";
import {CloseComponent} from "../../../components/magazine/mag-close/mag-close.component";

@Component({
    selector: 'magazine-header-module',
    templateUrl: './app/modules/magazine/mag-header/mag-header.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagTabComponent, ShareComponent, CloseComponent, ROUTER_DIRECTIVES],
    providers: []
})
export class MagHeaderModule {
    @Input() toc: any;
    pageNum: number = 1;

    toggleTabs() {
        if (document.getElementById('tabs').classList.contains('active')) {
            document.getElementById('tabs').classList.remove('active');
        }
        else {
            document.getElementById('tabs').classList.add('active');
        }
    }

    ngOnInit(){
    }

    ngOnChanges(event){
        if( event.toc.currentValue !== undefined ) {
            //console.log("OnChange Event", event.toc.currentValue);
            //console.log("OnChange toc:!!!!", this.toc);
        }
    }
}