import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";
import {GlobalFunctions} from '../../global/global-functions';
import {PropertyListingInterface} from '../../global/global-interface';
import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';
declare var moment: any;

@Component({
    selector: 'trending-homes',
    templateUrl: './app/modules/trending-homes/trending-homes.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListViewCarousel, moduleHeader, MediaImages],
})

export class TrendingHomes implements OnInit {
    public moduleTitle: string;
    public profileType: string;
    public trending: boolean;
    public counter: number = 0;
    carouselData: any = [];
    listData:any = [];
    headerData: any;
    data: any;
    public index: number = 0;
    @Input() trendingHomesData: any;

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
      //Determine what page the profile header module is on
      this.profileType = this.router.hostComponent.name;
      console.log(this.profileType);
    }

    left(){
      console.log('left');
      this.counter--;
      if(this.counter < 0){
        this.counter = this.carouselData.length - 1;
      }
      console.log(this.counter);
      this.listData = this.carouselData[this.counter];
      console.log(this.listData);
    }

    right(){
      console.log('right');
      this.counter++;
      if(this.counter == this.carouselData.length){
        this.counter = 0;
      }
      console.log(this.counter);
      this.listData = this.carouselData[this.counter];
      console.log(this.listData);
    }

    dataFormatter(){// TRANSFORM DATA TO PLUG INTO COMPONENTS
      //grab data for the header
      var data = this.trendingHomesData;
      this.headerData = {
          imageURL : './app/public/joyfulhome_house.png',
          smallText1 : data.date,
          smallText2 : ' United States of America',
          heading1 : data.title,
          heading2 : '',
          heading3 : '',
          heading4 : '',
          icon: 'fa fa-map-marker',
          hasHover: true
      };

      //grab data for the list
      var originalData = data.data;
      var listData = [];
      var carouselData = [];
      var globeFunc = this.globalFunctions;
      originalData.forEach(function(val, i){

        val.listPrice = globeFunc.commaSeparateNumber(val.listPrice);
        for(var obj in val){
          if(val[obj] == null){
            val[obj] = 'N/A';
          }
        }

        var formattedDays = moment.unix(val.daysOnMarket);

        var carData = {
          address:val.fullStreetAddress,
          daysOnMarket:formattedDays,
          largeImage:val.photos[0],
          price: "$"+val.listPrice,
          priceName: "SALE",
          zipCode:val.postalCode,
          city: val.city,
          state: val.stateOrProvince,
          photos:val.photos,
        }
        carData['url1'] = "../../Magazine";
        carData['url2'] = {addr:val.addressKey};
        carData['url3'] = "PropertyOverview";

        carouselData.push(carData);
      })//END of forEach

      //set to listData
      this.carouselData = carouselData;
      this.counter = 0;
      this.listData = carouselData[this.counter];
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
        var currentTrendingHomesData = event.trendingHomesData.currentValue;
        //If the data input is valid run transform data function
        if(currentTrendingHomesData !== null && currentTrendingHomesData !== false) {
            this.dataFormatter();
        }
    }
}
