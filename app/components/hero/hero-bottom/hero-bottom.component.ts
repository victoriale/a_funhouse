import {Component, Input} from 'angular2/core';
import {ExploreButtonComponent} from "../../buttons/explore-button/explore-button.component";

@Component({
    selector: 'hero-bottom-component',
    templateUrl: './app/components/hero/hero-bottom/hero-bottom.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['buttonTitle', 'buttonWidth', 'buttonIcon', 'cityLocation'],
    directives: [ExploreButtonComponent],
    providers: [],
})

export class HeroBottomComponent {
    public buttonTitle: string;
    public buttonWidth: number;
    public buttonIcon: string;
    public cityLocation: string;
}