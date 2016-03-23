import {Component, OnInit, Injector} from 'angular2/core'
import {NavLeftComponent} from "../../../components/magazine/mag-nav-left/mag-nav-left.component";
import {NavRightComponent} from "../../../components/magazine/mag-nav-right/mag-nav-right.component";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagSchools} from "../../../global/global-interface";
import {MagDemographics} from "../../../global/global-interface";
import {MagKeyInformationTextModule} from "../mag-key-information-text/mag-key-information-text.module";
import {MagKeyInformationImgModule} from "../mag-key-information-img/mag-key-information-img.module";

@Component({
    selector: 'key-information-module',
    templateUrl: './app/modules/magazine/key-information/key-information.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [NavRightComponent, NavLeftComponent, MagKeyInformationTextModule, MagKeyInformationImgModule],
})

export class KeyInformation implements OnInit {
    address: string;
    magSchools:MagSchools;
    magDemographics:MagDemographics;

    constructor( private _injector: Injector, private _magazineDataService: MagazineDataService ) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getMagazineKeyInformation() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magSchools = magData.info.schools;
                    this.magDemographics = magData.info.demographics;
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineKeyInformation();
    }
}