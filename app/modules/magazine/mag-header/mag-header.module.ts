import {Component} from 'angular2/core';
import {MagTabComponent} from "../../../components/magazine/mag-tabs/mag-tabs.component";
import {ShareComponent} from "../../../components/facebook-share/facebook-share.component";
import {CloseComponent} from "../../../components/magazine/mag-close/mag-close.component";

@Component({
    selector: 'magazine-header-module',
    templateUrl: './app/modules/magazine/mag-header/mag-header.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [MagTabComponent, ShareComponent, CloseComponent],
})
export class MagHeaderModule {
    openTabs() {
        if (document.getElementById('tabs').classList.contains('active')) {
            document.getElementById('tabs').classList.remove('active');
        }
        else {
            document.getElementById('tabs').classList.add('active');
        }
    }
}