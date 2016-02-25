/**
 * Created by Victoria on 2/25/2016.
 */
import {Component} from 'angular2/core';
import {Image180} from '../../components/images/image-180/image-180.component';
import {CarouselButton} from '../../components/buttons/carousel/carousel.button';

@Component({
    selector: 'feature-component',
    templateUrl: './app/components/feature-list/feature-list.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image180, CarouselButton],
    //providers: [TitleComponent],
})

export class FeatureComponent{
    header = 'Trending Real Estate';
    title = 'Lorem ipsum dolor sit amet, conse-ctetur adipisicing elit, sed do.';
    hding1 = '[Listing Address]';
    hding2 = '[Listing Name] [Zip Code] - [Neighborhood]';
    detail1 = 'Bedroom: 3 | Bathroom: 2';
    detail2 = 'Asking Price: $[###,###]';
    ListUrl = '';
}