/**
 * Created by Victoria on 2/24/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {TitleComponent} from '../../components/title/title.component';
import {Image180} from '../../components/images/image-180/image-180.component';

@Component({
    selector: 'profile-header',
    templateUrl: './app/modules/profile_header/profile_header.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [TitleComponent, Image180],
    providers: [],
    inputs: ['profile_type']
})
export class ProfileHeader implements OnInit{
    public icon: string;
    public title: string;
    public description: string;
    title_data: {};

    titleData(){
        this.title_data = {
            titleImg : './app/public/img_bckgnd.png',
            //Empty string because profile header does not need this value
            smallTxt1 : '',
            smallTxt2 : 'Wichita, KS',
            Heading1 : 'Main title for the Profile Header',
            Heading2 : '',
            Heading3 : 'Sub Title with Info about Profile Header',
            Heading4 : '',
            hasHover: false
        };
    }

    templateData(){
        //Variables for fields in profile header module
        if(this.profile_type === 'location'){
            //Location Profile Header
            this.icon = 'fa fa-map-marker';
            this.title = 'Quick info about [City], [State]';
            this.description = 'The most popular neighborhood In  [City], [State] for new listings was [City], [State].  Did you know that the average age for a [City], [State] resident is [##] and the average home sells for $[###,###].';
            this.main_hasHover = false;
        }else{
            //Listing Profile Header
            this.title = 'Read more about this listing';
            this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in';
            this.main_hasHover = true;
        }
    }

    ngOnInit(){
        this.titleData();
        this.templateData();

        console.log(this);
    }
}