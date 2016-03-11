/**
 * Created by Victoria on 2/24/2016.
 */
import {Component, OnInit, Input, ChangeDetectionStrategy} from 'angular2/core';
import {TitleComponent} from '../../components/title/title.component';
import {Image180} from '../../components/images/image-180.component';

@Component({
    selector: 'profile-header',
    templateUrl: './app/modules/profile_header/profile_header.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [TitleComponent, Image180],
    providers: [],
    //inputs: ['profile_type', 'profileHeaderData'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeader implements OnInit{
    public icon: string;
    public title: string;
    public description: string;
    public main_hasSubImg: boolean = true;
    //public profile_type: string;
    title_data: {};
    @Input() profileHeaderData: Object;
    @Input() profile_type: string;

    setStaticData(){
        this.icon = 'fa fa-map-marker';
        this.title = 'Read more about this listing';
        //Variables for fields in profile header module
        if(this.profile_type === 'location'){
            //Location Profile Header
            this.main_hasSubImg = false;
        }else if(this.profile_type === 'listing'){
            //Listing Profile Header
            this.main_hasSubImg = true;
        }
    }

    ngOnInit(){
        this.setStaticData();
        console.log('Profile Header ngOnInit', this);
    }
}