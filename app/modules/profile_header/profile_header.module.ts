/**
 * Created by Victoria on 2/24/2016.
 */
import {Component, OnInit} from 'angular2/core';
import {TitleComponent} from '../../components/title/title.component';
import {Image180} from '../../components/images/image-180/image-180.component';

@Component({
    selector: 'profile-header',
    templateUrl: './app/modules/profile_header/profile_header.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [TitleComponent, Image180],
    providers: [],
})
export class ProfileHeader implements OnInit{
    icon = 'fa fa-map-marker';
    title = 'Quick info about [City], [State]';
    description = 'The most popular neighborhood In  [City], [State] for new listings was [City], [State].  Did you know that the average age for a [City], [State] resident is [##] and the average home sells for $[###,###].';
    data:[{}];

    titleData(){
        //TestData
        var TD = [{
            titleImg : './app/public/img_bckgnd.png',
            smallTxt1 : 'Monday, February 26, 2016',
            smallTxt2 : ' Wichita, KS',
            Heading1 : 'Main title for the Profile Header',
            Heading2 : '',
            Heading3 : 'Sub Title with Info about Profile Header',
            Heading4 : '',
            icon: 'fa fa-map-marker',
        }];
        this.data = TD;
        console.log(this);
    }

    ngOnInit(){
        this.titleData();
    }
}