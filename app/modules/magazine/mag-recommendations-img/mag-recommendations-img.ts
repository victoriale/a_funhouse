import {Component, Input} from 'angular2/core';

@Component({
    selector: 'magazine-recommendations-img-module',
    templateUrl: './app/modules/magazine/mag-recommendations-img/mag-recommendations-img.html',
    
    providers: [],
    inputs: ['magRecommendations', 'recommendations', 'isPartner', 'partnerID'],
})

export class MagRecommendationsImgModule{
}
