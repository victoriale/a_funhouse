import {Component, Input, OnInit} from 'angular2/core';
import {ExploreButtonComponent} from "../../buttons/explore-button/explore-button.component";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'hero-bottom-component',
    templateUrl: './app/components/hero/hero-bottom/hero-bottom.component.html',

    inputs: ['buttonTitle', 'buttonWidth', 'buttonIcon', 'cityLocation', 'stateLocation', 'stateAPLocation', 'cityName'],
    directives: [ExploreButtonComponent, ROUTER_DIRECTIVES],
    providers: [],
})

export class HeroBottomComponent{
    public buttonTitle: string;
    public buttonWidth: number;
    public buttonIcon: string;
    public cityLocation: string;
    public stateLocation: string;
    public cityName: string;
    public stateAPLocation: string;
}
