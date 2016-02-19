import {Component} from 'angular2/core';

@Component({
    selector: 'backtab-component',
    templateUrl: './app/components/backtab/backtab.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],

})
export class BackTabComponent{
    public backText = "Go Back To [Profile Name]'s Profile";

}