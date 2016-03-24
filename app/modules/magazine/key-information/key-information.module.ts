import {Component, OnInit, Injector} from 'angular2/core'
import {NavLeftComponent} from "../../../components/magazine/mag-nav-left/mag-nav-left.component";
import {NavRightComponent} from "../../../components/magazine/mag-nav-right/mag-nav-right.component";
import {MagazinePage} from "../../../app-webpage/magazine.webpage";
import {MagazineDataService} from "../../../global/global-mag-service";
import {MagSchools} from "../../../global/global-interface";
import {MagDemographics} from "../../../global/global-interface";
import {MagKeyInformationTextModule} from "../mag-key-information-text/mag-key-information-text.module";

@Component({
    selector: 'key-information-module',
    templateUrl: './app/modules/magazine/key-information/key-information.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [NavRightComponent, NavLeftComponent, MagKeyInformationTextModule],
})

export class KeyInformation implements OnInit {
    address:string;
    magSchools:MagSchools;
    magDemographics:MagDemographics;
    schoolImage: string;
    //demographicImage: string[];

    constructor(private _injector:Injector, private _magazineDataService:MagazineDataService) {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
        this.address = _injector.get(MagazinePage).address;
    }

    getSchoolImages() {
        let images: string[];
        switch (this.magSchools.stockPhotos.toLowerCase()) {
            case'college':
                images = ['College_1_stock_mag.jpg', 'College_2_stock_mag.jpg', 'College_3_stock_mag.jpg'];
                break;
            case'elementary':
                images = ['Elementary_1_stock_mag.jpg', 'Elementary_2_stock_mag.jpg'];
                break;
            case'high':
                images = ['High_School_1_stock_mag.jpg', 'High_School_2_stock_mag.jpg', 'High_School_3_stock_mag.jpg', 'High_School_4_stock_mag.jpg'];
                break;
            case'kindergarten':
                images = ['Kindergarten_1_stock_mag.jpg', 'Kindergarten_3_stock_mag.jpg', 'Kindergarten_4_stock_mag.jpg', 'Kindergarten_5_stock_mag.jpg'];
                break;
            case'middle':
                images = ['Middle_School_1_stock_mag.jpg', 'Middle_School_2_stock_mag.jpg', 'Middle_School_3_stock_mag.jpg', 'Middle_School_4_stock_mag.jpg'];
                break;
            case'private_elementary':
                images = ['Private_Elementary_1_stock_mag.jpg'];
                break;
            case'private_high':
                images = ['Private_High_School_1_stock_mag.jpg', 'Private_High_School_2_stock_mag.jpg', 'Private_High_School_3_stock_mag.jpg'];
                break;
        }
        this.schoolImage = images[Math.floor(Math.random() * images.length)];
    }

    //getDemoGraphicImages(){
    //    switch (this.magDemographics.stockPhotos.toLowerCase()) {
    //        case'bank':
    //            this.demographicImage = ['Bank_1_stock_mag.jpg', 'Bank_2_stock_mag.jpg', 'Bank_3_stock_mag.jpg', 'Bank_4_stock_mag.jpg'];
    //            break;
    //        case'grocery':
    //            this.demographicImage = ['Grocery_1_stock_mag.jpg', 'Grocery_2_stock_mag.jpg', 'Grocery_3_stock_mag.jpg', 'Grocery_4_stock_mag.jpg', 'Grocery_5_stock_mag.jpg'];
    //            break;
    //    }
    //    this.demographicImage = this.demographicImage[Math.floor(Math.random() * this.demographicImage.length)];
    //    console.log(this.demographicImage);
    //}

    getMagazineKeyInformation() {
        this._magazineDataService.getMagazineData(this.address)
            .subscribe(
                magData => {
                    this.magSchools = magData.info.schools;
                    this.magDemographics = magData.info.demographics;
                    this.getSchoolImages();
                    //this.getDemoGraphicImages();
                },
                err => console.log("error in getData", err)
            )
    }

    ngOnInit() {
        this.getMagazineKeyInformation();
    }
}