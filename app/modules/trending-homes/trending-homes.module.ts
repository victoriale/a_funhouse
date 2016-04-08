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
    inputs:['locData']
})

export class TrendingHomes implements OnInit {
    public locData:any;
    public moduleTitle: string;
    public profileType: string;
    public trending: boolean;
    public counter: number = 0;
    carouselData: any = [];
    listData:any = [];
    headerData: any;
    expand:boolean = false;
    data: any;
    modal:boolean = true;
    public index: number = 0;
    @Input() trendingHomesData: any;
    image_url = './app/public/no_photo_images/onError.png';
    
    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
      //Determine what page the profile header module is on
      this.profileType = this.router.hostComponent.name;
    }

    expandModal(){
      if(this.expand == true){
        this.expand = false;
      }else{
        this.expand = true;
      }
      return this.expand;
    }

    left(){
      this.counter--;
      if(this.counter < 0){
        this.counter = this.carouselData.length - 1;
      }
      this.listData = this.carouselData[this.counter];
    }

    right(){
      this.counter++;
      if(this.counter == this.carouselData.length){
        this.counter = 0;
      }
      this.listData = this.carouselData[this.counter];
    }

    dataFormatter(){// TRANSFORM DATA TO PLUG INTO COMPONENTS
      //grab data for the header
      var data = this.trendingHomesData;
      //grab data for the list
      var originalData = data.listData;
      var listData = [];
      var carouselData = [];
      var globeFunc = this.globalFunctions;
      var totalLength = originalData.length;

      originalData.forEach(function(val, i){
        val.listPrice = globeFunc.commaSeparateNumber(val.listPrice);
        for(var obj in val){
          if(val[obj] == null){
            val[obj] = 'N/A';
          }
        }

        var formattedDays = moment().subtract('days', val.daysOnMarket).format('dddd, MMMM Do, YYYY');
        //grab featured data about listing
        if(typeof val.virtualTour == 'undefined'){
          val.virtualTour = 'N/A';
        }
        //if there is no photo put in default photo
        if(val.photos.length == 0){
          val.photos.push(this.image_url);
        }
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
          locUrl1: "Location-page",
          locUrl2: {loc: val.city + '_' +val.stateOrProvince},
          virtualTour: val.virtualTour,
          listName: globeFunc.convertListName(data.listName),
          totalListings: totalLength,
          rank: i+1,
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
            var paramCity: string = this.globalFunctions.toTitleCase(this.locData.city);
            paramCity = this.globalFunctions.toTitleCase(paramCity.replace(/%20/g, " "));
            var paramState: string = this.locData.state;
            this.moduleTitle = 'Most Trending Homes In ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');
            this.moduleTitle = 'Most Trending Homes Around ' + this.globalFunctions.toTitleCase(address) + ' ' + this.globalFunctions.toTitleCase(paramCity) + ', ' + paramState;
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
