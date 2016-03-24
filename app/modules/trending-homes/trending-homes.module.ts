import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {moduleHeader} from "../../components/module-header/module-header";
import {MediaImages} from "../../components/media-images/media-images.component";
import {GlobalFunctions} from '../../global/global-functions';
import {PropertyListingInterface} from '../../global/global-interface';
import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';

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
        // newData['url'] = "Home-page";

        var carData = {
          heading:val.addressKey.replace(/-/g, ' '),
          image_url:val.photos[0],
          listing_price: "$"+val.listPrice,
          listing_area:val.livingArea + "sqft",
          listing_addr1:val.modificationTimestamp.split(' ')[0],
          listing_addr2:val.loc + ' - ' + val.postalCode,
        }
        carData['button_url'] = '#';

        carouselData.push(carData);
        listData.push(newData);
      })//END of forEach

      //set to listData
      this.listData = listData;
      this.carouselData = carouselData;

      console.log('ListData', this.listData);
      console.log('carouselData', this.carouselData);
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
