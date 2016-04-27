/**
 * Created by Christopher Lynch on 2/23/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {MagazineDataService} from "../../../global/global-mag-service";
import {ROUTER_DIRECTIVES, RouteParams} from "angular2/router";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";

@Component({
    selector: 'magtab-component',
    templateUrl: './app/components/magazine/mag-tabs/mag-tabs.component.html',

    directives: [MagTabComponent, ROUTER_DIRECTIVES]
})
export class MagTabComponent implements OnInit {
    @Input() toc:any;
    tabIndex:[{
        label: string;
        routeName: string;
    }];
    address:string;
    checked:boolean;
    data:any;
    selectedItem:any;

    constructor(private _params:RouteParams, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _params.get('addr');
    }

    selectItem(selectedItem) {
        document.getElementById('tabs').classList.remove('active');
        this.selectedItem = selectedItem;
    }

    ngOnInit() {

    }
}
