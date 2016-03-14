import {Component, OnInit} from 'angular2/core';
import {Image180} from "../images/image-180.component";

@Component({
    selector: 'list-carousel-component',
    templateUrl: './app/components/list-carousel/list-carousel.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image180],
    providers: [],
})

export class ListCarouselComponent implements OnInit {
    public icon: string;
    public title: string;
    public description: string;
    public main_hasSubImg: boolean = false;

    setStaticData(){
        this.icon = 'fa fa-home';
        this.title = '[List Name]';
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus justo, semper porta blandit non, auctor ac nulla. Ut vitae quam at augue sodales commodo et eget diam. Curabitur venenatis a sapien id pharetra.';
    }

    ngOnInit(){
        this.setStaticData();
    }
}