/**
 * Created by Christopher Lynch on 2/23/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {MagazineDataService} from "../../../global/global-mag-service";
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";

@Component({
    selector: 'magtab-component',
    templateUrl: './app/components/magazine/mag-tabs/mag-tabs.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagTabComponent, ROUTER_DIRECTIVES]
})
export class MagTabComponent implements OnInit {
    @Input() toc: any;
    tabIndex: [{
        label: string;
        routeName: string;
    }];
    address: string;
    checked: boolean;
    data: any;
    selectedItem: any;

    constructor( private _params: RouteParams, private _magazineDataService: MagazineDataService ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _params.get('addr');
        //console.log( "address", this.addr);
    }

    selectItem( selectedItem ) {
        this.selectedItem = selectedItem;
    }

    ngOnInit() {
        //console.log("On Init toc", this.toc);
    }

    ngOnChanges(event){
        if( event.toc.currentValue !== undefined ) {
            //console.log("OnChange Event", event.toc.currentValue);
            //console.log("Inner OnChange toc:!!!!", this.toc);
        }
    }
}
