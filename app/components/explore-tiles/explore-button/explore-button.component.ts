import {Component, Input} from 'angular2/core';

@Component({
    selector: 'explore-button-component',
    templateUrl: './app/components/explore-tiles/explore-button/explore-button.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['buttontitle', 'buttonwidth', 'buttonicon'],
    directives: [],
    providers: []
})

export class ExploreButtonComponent{
    public buttontitle: string;
    public buttonwidth: number;
    public buttonicon: string;
}