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
    public main_hasSubImg: boolean;
    public profile_type: string;
    title_data: {};

    getData(){
        //Variables for fields in profile header module
        if(this.profile_type === 'location'){
            //Location Profile Header
            //Data used in profile header module
            this.icon = 'fa fa-map-marker';
            this.title = 'Quick info about [City], [State]';
            this.description = 'The most popular neighborhood In  [City], [State] for new listings was [City], [State].  Did you know that the average age for a [City], [State] resident is [##] and the average home sells for $[###,###].';
            this.main_hasSubImg = false;
            //Data sent to title component
            this.title_data = {
                titleImg : './app/public/img_bckgnd.png',
                //Empty string because profile header does not need this value
                smallTxt1 : '',
                smallTxt2 : 'Last Updated: Monday, Februrary 23, 2016',
                Heading1 : '[City], [State]',
                Heading2 : '',
                Heading3 : '[##] Listings Available for Sale',
                Heading4 : '',
                icon: 'fa fa-map-marker',
                hasHover: false
            };
        }else{
            //Listing Profile Header
            //Data used in profile header module
            this.icon = 'fa fa-home';
            this.title = 'Read more about this listing';
            this.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in';
            this.main_hasSubImg = true;
            //Data sent to title component
            this.title_data = {
                titleImg : './app/public/img_bckgnd.png',
                //Empty string because profile header does not need this value
                smallTxt1 : '',
                smallTxt2 : '[City, ST]',
                Heading1 : '[Property Address]',
                Heading2 : '- Active',
                Heading3 : 'Listing Price: $[###,###]',
                Heading4 : '- Sq ft: [#,###] Sq ft.',
                icon: 'fa fa-map-marker',
                hasHover: false
            };
        }
    }

    ngOnInit(){
        this.getData();
        console.log(this);
    }
}