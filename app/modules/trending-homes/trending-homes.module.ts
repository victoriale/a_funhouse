import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";
import {GlobalFunctions} from '../../global/global-functions';
import {PropertyListingInterface} from '../../global/global-interface';
import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';

@Component({
    selector: 'trending-homes',
    templateUrl: './app/modules/trending-homes/trending-homes.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListViewCarousel, moduleHeader, MediaImages, ROUTER_DIRECTIVES],
    inputs: ['trendingHomesData']
})

export class TrendingHomes implements OnInit {
    public moduleTitle: string;
    public profileType: string;
    public trending: boolean;
    public trendingHomesData: any;
    carouselData: any = [];
    carouselCounter: number =0;
    listData:any = [];
    headerData: any;
    data: any;
    public index: number = 0;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
      //Determine what page the profile header module is on
      this.profileType = this.router.hostComponent.name;
      console.log(this.profileType);
    }

    right(){
      console.log('rightFired');
      this.carouselCounter++;
    }

    left(){
      console.log('leftFired');
      this.carouselCounter--;
    }
    dataFormatter(mediaData){// TRANSFORM DATA TO PLUG INTO COMPONENTS
      //grab data for the header

      //grab data for the list
      var originalData = mediaData.data;
      var listData = [];
      var carouselData = [];
      var globeFunc = this.globalFunctions;
      // console.log('Original Data',originalData);

      originalData.forEach(function(val, i){
        val.listPrice = globeFunc.commaSeparateNumber(val.listPrice);
        var newData = {
            img : val.photos[0],
            list_sub : val.propertyType + ": " + val.numBedrooms + " Beds & " + val.numBathrooms + " Baths",
            title : val.addressKey.replace(/-/g, ' '),
            numBed : val.numBedrooms + " Beds ",
            numBath: val.numBathrooms + " Baths ",
            date: val.modificationTimestamp,
            value: "$"+ val.listPrice,
            tag: val.livingArea + ' sqft',
            buttonName: 'View Profile',
            icon: 'fa fa-map-marker',
            location: val.loc + ' - ' + val.postalCode,
            market:'Built in ' + val.yearBuilt,
            rank: (i+1),
            desc: val.listingDescription,
            photos:val.photos,
        };
        newData['url1'] = "../../Magazine";
        newData['url2'] = {addr:val.addressKey};
        newData['url3'] = "PropertyOverview";

        // var daysOnMarket = val.daysOnMarket;
        // var year=0;
        // var month=0;
        // var day=0;
        //
        // years = daysOnMarket / 365;
        // daysOnMarket = daysOnMarket - (year * 365);
        // console.log(years, daysOnMarket);
        //
        // month = daysOnMarket / 12;
        // daysOnMarket = daysOnMarket - (month * 30.4);
        // console.log(month, daysOnMarket);
        //
        // day = daysOnMarket;
        // console.log(day, daysOnMarket);

        var carData = {
          address:val.fullStreetAddress,
          daysOnMarket: val.daysOnMarket + " Days on Market",
          largeImage:val.photos[0],
          price: "$"+val.listPrice,
          listing_area:val.livingArea + "sqft",
          city:val.city,
          state:val.stateOrProvince,
          zipCode:val.postalCode,
          priceName:'Sale',
        }
        carData['url1'] = "../../Magazine";
        carData['url2'] = {addr:val.addressKey};
        carData['url3'] = "PropertyOverview";

        carouselData.push(carData);
        listData.push(newData);
      })//END of forEach

      //set to listData
      this.listData = listData[this.carouselCounter];
      this.carouselData = carouselData[this.carouselCounter];

      // console.log('ListData', this.listData);
      // console.log('carouselData', this.carouselData);
    }//END OF TRANSFORM FUNCTION

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
        if(typeof this.trendingHomesData != 'undefined'){
          this.dataFormatter(this.trendingHomesData);
        }
    }
}
