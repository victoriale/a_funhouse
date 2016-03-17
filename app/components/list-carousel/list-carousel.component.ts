import {Component, Input, OnInit} from 'angular2/core';
import {Image180} from "../images/image-180.component";
import {List} from "../../global/global-interface";

@Component({
    selector: 'list-carousel-component',
    templateUrl: './app/components/list-carousel/list-carousel.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image180],
    providers: [],
    inputs: ['lists'],
})

export class ListCarouselComponent implements OnInit {
    public icon: string;
    public title: string;
    public description: string;
    public main_hasSubImg: boolean = false;
    location: string;
    lists: List[];

    // Carousel setup
    carCount: number;
    length: number;

    setStaticData(){
        this.icon = 'fa fa-home';
        this.location = '[Location]'
    }

    clickLeft() {
        this.carCount = this.carCount - 1;
        if (this.carCount < 0) {
            this.carCount = this.length - 1;
        }
    }

    clickRight() {
        this.carCount = this.carCount + 1;
        if (this.carCount >= this.length) {
            this.carCount = 0;
        }
    }

    ngOnInit(){
        this.length = this.lists.length;
        this.carCount = 0;

        this.setStaticData();
        console.log(this);
    }
}