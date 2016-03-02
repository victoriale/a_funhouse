/**
 * Created by Victoria on 2/25/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {Image180} from '../../components/images/image-180/image-180.component';
import {CarouselButton} from '../../components/buttons/carousel/carousel.button';

@Component({
    selector: 'feature-component',
    templateUrl: './app/components/feature-list/feature-list.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image180, CarouselButton],
    providers: [],
    inputs: ['profile_type']
})

export class FeatureComponent implements OnInit{

    getData(){
        //Variables for fields in profile header module
        if(this.profile_type === 'location'){
            this.main_hasHover = true;
            this.title = 'Quick info about [City], [State]';
            this.header = 'Trending Real Estate';
            this.hding1 = '[Listing Address]';
            this.hding2 = '[Listing Name] [Zip Code] - [Neighborhood]';
            this.detail1 = 'Bedroom: 3 | Bathroom: 2';
            this.detail2 = 'Asking Price: $[###,###]';
            this.ListUrl = '';
            //Data sent to title component
        }else{
            this.main_hasHover = true;
            this.title = 'Quick info about [City], [State]';
            this.header = 'Trending Real Estate';
            this.hding1 = '[Listing Address]';
            this.hding2 = '[Listing Name] [Zip Code] - [Neighborhood]';
            this.detail1 = 'Bedroom: 3 | Bathroom: 2';
            this.detail2 = 'Asking Price: $[###,###]';
            this.ListUrl = '';
        }
    }

    ngOnInit(){
        this.getData();

        console.log(this);
    }
}
