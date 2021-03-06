import {Component, Input} from 'angular2/core';
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";

@Component({
    selector: 'magazine-recommendations-text-module',
    templateUrl: './app/modules/magazine/mag-recommendations-text/mag-recommendations-text.html',
    
    directives: [AdzoneComponent, LearnMoreComponent],
    inputs: ['magRecommendations', 'recommendations'],
})

export class MagRecommendationsTextModule{
}