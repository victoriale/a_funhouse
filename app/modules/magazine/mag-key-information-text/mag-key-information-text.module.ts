import {Component, Input} from 'angular2/core';
import {AdzoneComponent} from "../../../components/magazine/mag-adzone/mag-adzone.component";
import {LearnMoreComponent} from "../../../components/magazine/mag-btns/learnmore-btn/learnmore-btn.component";
import {MagKeyInformationImgModule} from "../mag-key-information-img/mag-key-information-img.module";

@Component({
    selector: 'magazine-key-information-text-module',
    templateUrl: './app/modules/magazine/mag-key-information-text/mag-key-information-text.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [AdzoneComponent, LearnMoreComponent, MagKeyInformationImgModule],
    inputs: ['magSchools', 'magDemographics'],
})

export class MagKeyInformationTextModule{
}