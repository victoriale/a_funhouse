/**
 * Created by Victoria on 2/18/2016.
 */
import {Component} from 'angular2/core';
import {CarButtonComponent} from '../../components/buttons/carbutton.component';
//import {ListButtonComponent} from '../../components/buttons/listbutton.component';
@Component({
    selector: 'carousel-component',
    templateUrl: './app/components/carousel/carousel.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [CarButtonComponent]
})
export class CarouselComponent{
    text1 = "Lorem ipsum dolor sit amet";
    text2 = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet";
    image_url = './app/public/img_bckgnd.png';
}
