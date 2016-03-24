/**
 * Created by Victoria on 3/10/2016.
 */
import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {Image150} from '../../components/images/image-150.component';
import {CarouselButton} from '../../components/buttons/carousel/carousel.button';

@Component({
    selector: 'amenities-component',
    templateUrl: './app/components/amenities/amenities.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image150, CarouselButton],
    providers: [],
    inputs: ['list_data', 'hasFooterButton'],
    outputs: ['scrollRight', 'scrollLeft']
})

export class AmenitiesComponent implements OnInit{
    public main_hasSubImg: boolean;
    list_data: Object;
    listView: Object;
    public scrollRight: EventEmitter<boolean> = new EventEmitter();
    public scrollLeft: EventEmitter<boolean> = new EventEmitter();

    left(){
        this.scrollLeft.next(true);
    }
    right(){
        this.scrollRight.next(true);
    }

    ngOnInit(){
        this.main_hasSubImg = false;
    }//end ngOnInit()
}
