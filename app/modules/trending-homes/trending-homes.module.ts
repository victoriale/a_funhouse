import {Component, OnInit, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";
import {GlobalFunctions} from '../../global/global-functions';

@Component({
    selector: 'trending-homes',
    templateUrl: './app/modules/trending-homes/trending-homes.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, MediaImages],
    providers: [],
    inputs: ['']
})

export class TrendingHomes implements OnInit {
    public moduleTitle: string;
    public profileType: string;
    public trending: boolean;
    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
    }
    //Build Module Title
    setModuleTitle(){

        if(this.profileType === 'LocationPage'){
            //Location Crime Module
            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(paramLocation.split('_')[0]);
            var paramState: string = paramLocation.split('_')[1];

            this.moduleTitle = 'Most Trending Homes In ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Crime Module
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');

            this.moduleTitle = 'Most Trending Homes Around ' + address + ' ' + paramCity + ', ' + paramState;
        }
    }
    ngOnInit(){
        this.setModuleTitle();
        this.trending = true; // set flag to display trending button for media-images.component
    }
}
