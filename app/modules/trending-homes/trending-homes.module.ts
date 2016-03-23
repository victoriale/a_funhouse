import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";
import {GlobalFunctions} from '../../global/global-functions';
import {PropertyListingInterface} from '../../global/global-interface';

@Component({
    selector: 'trending-homes',
    templateUrl: './app/modules/trending-homes/trending-homes.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader, MediaImages],
})

export class TrendingHomes implements OnInit {
    public moduleTitle: string;
    public profileType: string;
    public trending: boolean;
    public listData: Object;

    public index: number = 0;
    @Input() trendingHomesData: any;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
      //Determine what page the profile header module is on
      this.profileType = this.router.hostComponent.name;
      console.log(this.profileType);
    }
    dataFormatter(){
      var data = this.trendingHomesData;
    }
    //Build Module Title
    setModuleTitle(){
        if(this.profileType === 'LocationPage'){
            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(paramLocation.split('_')[0]);
            var paramState: string = paramLocation.split('_')[1];
            this.moduleTitle = 'Most Trending Homes In ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
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
    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentTrendingHomesData = event.trendingHomesData.currentValue;
        //If the data input is valid run transform data function
        if(currentTrendingHomesData !== null && currentTrendingHomesData !== false) {

            //Perform try catch to make sure module doesnt break page
            // try{
            //     //If featured list data has no list data (length of 0) throw error to hide module
            //     if(this.trendingHomesData.listData.length === 0){
            //         throw 'No Data available for Trending list - hiding module';
            //     }
            //
            //     this.dataFormatter();
            // }catch(e){
            //     console.log('Error - Trending List Module ', e);
            //     this.trendingHomesData = undefined;
            // }
            this.dataFormatter();
        }
    }
}
