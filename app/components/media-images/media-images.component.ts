/**
 * Created by Victoria on 3/4/2016.
 */
import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {CircleButton} from "../../components/buttons/circle/circle.button";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {List2} from '../../global/global-interface';

declare var jQuery : any;
@Component({
  selector: 'media-images',
  templateUrl: './app/components/media-images/media-images.component.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [ROUTER_DIRECTIVES, CircleButton],
  providers: [],
  inputs: ['trending', 'mediaImages', 'featureListing'],
  outputs: ['leftCircle', 'rightCircle', 'expand']
})

export class MediaImages implements OnInit {
  featureListing: any;
  public trending: boolean;
  leftCircle: EventEmitter<boolean> = new EventEmitter();
  rightCircle: EventEmitter<boolean> = new EventEmitter();
  expand: EventEmitter<boolean> = new EventEmitter();

  mediaImages: any;//need to create interface
  smallImage: any;
  smallObjCounter: number = 0;
  largeImage: string;
  virtualTourCount: number = 0;
  totalImageCount: number = 0;
  imageCounter: number = 0;

  //create objects for the dom
  // city:string;
  // state:string;
  // zipCode:string;
  // address:string;
  // daysOnMarket:any;
  // detail1:any;
  // unit1:string;
  // detail2:any;
  // unit2:string;
  // price:any;
  // priceName:string;

  constructor() {}

  modalExpand(){
    this.expand.next(true);
  }

  left() {
    if(this.trending){
      this.leftCircle.next(true);
    }
    //make a check to see if the obj array is below 0 change the obj array to the top level
    if(this.imageCounter == 0){
      this.smallObjCounter--;
      //makes sure to change to new obj before checking the length to know what position the array should be starting at
      if(this.smallObjCounter < 0){
        this.smallObjCounter = (this.mediaImages.totalObj - 1);
      }
      this.imageCounter = (this.mediaImages[this.smallObjCounter].length - 1);
    }else{
      this.imageCounter--;
    }
    //run the changeMain function to change the main image once a new array has been established
    this.changeMain(this.imageCounter);
  }

  right() {
    if(this.trending){
      this.rightCircle.next(true);
    }else{
      //check to see if the end of the obj array of images has reached the end and will go on the the next obj with new set of array
      if(this.imageCounter == (this.mediaImages[this.smallObjCounter].length - 1)){
        this.imageCounter = 0;
        this.smallObjCounter++;
        //if the obj array is at the end then restart by setting the object counter back to 0
        if(this.smallObjCounter == (this.mediaImages.totalObj)){
          this.smallObjCounter = 0;
        }
      }else{
        this.imageCounter++;
      }
    }//endif this.trending
    //run the changeMain function to change the main image once a new array has been established
    this.changeMain(this.imageCounter);
  }

  //this is where the angular2 decides what is the main image
  changeMain(num){
    this.imageCounter = num;
    if(typeof this.smallImage == 'undefined'){
      this.smallImage = this.mediaImages[0];
    }else{
      this.smallImage = this.mediaImages[this.smallObjCounter];
    }
     this.largeImage = this.smallImage[num].image;
  }

  //take the input from the module and put them into groups of 5 obj array
  modifyMedia(images){
    var totalImgs = images.length;
    var newImageArray = [];
    var objCount = 0;

    //loops through and put each image into groups of 5 for the square container
    for(var i = 0; i < totalImgs; i++){
      if(typeof newImageArray[objCount] == 'undefined'){
        newImageArray[objCount] = [];
      }

      newImageArray[objCount].push({id:(i%5), image:images[i]});

      if(newImageArray[objCount].length == 5){
        objCount++;
      }
    }
    newImageArray['totalImages'] = totalImgs;
    newImageArray['totalObj'] = objCount + 1;
    return newImageArray;
  }

  //makes sure to show first image and run the modifyMedia function once data has been established
  ngOnChanges(event){
      if(typeof this.mediaImages != 'undefined' || typeof this.featureListing != 'undefined'){
        //if data coming from module to variable mediaImages changes in what way then reset to first image and rerun function
        this.smallObjCounter = 0;
        this.imageCounter = 0;
        this.mediaImages = this.modifyMedia(this.mediaImages);
        this.totalImageCount = this.mediaImages.totalImages;
        this.changeMain(0);
      }
  }

  ngOnInit() {
  }
}
