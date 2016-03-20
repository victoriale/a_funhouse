/**
 * Created by Victoria on 3/4/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {CircleButton} from "../../components/buttons/circle/circle.button";
import {MediaFeatureList} from '../../global/global-service';
import {List2} from '../../global/global-interface';

@Component({
  selector: 'media-images',
  templateUrl: './app/components/media-images/media-images.component.html',
  styleUrls: ['./app/global/stylesheets/master.css'],
  directives: [CircleButton],
  providers: [MediaFeatureList],
  inputs: ['trending', 'mediaImages']
})
export class MediaImages implements OnInit {
  BatchTwo: List2[];
  public trending: boolean;
  leftCircle: boolean;
  rightCircle: boolean;
  mediaImages: any;//need to create interface
  largeImage: string;

  constructor(
    private _featureList: MediaFeatureList
    ) {}

  getData() {
    this._featureList.getBatchTwo().then(batch2 => this.BatchTwo = batch2);
  }

  getPropertyData(input) {
    var data = this.mediaImages;
    console.log('hallo',data);
  }

  left() {
    console.log('eventFired', 'left');
  }
  right() {
    console.log('eventFired', 'right');
  }

  changeMain(num){
    console.log(num);
    this.largeImage = this.mediaImages[num];
    console.log(this.largeImage);
  }

  ngOnChanges(event){
      if(typeof event.mediaImages !== 'undefined'){
        //if data coming from module to variable mediaImages changes in what way then reset to first image and rerun function
        // this.changeMain(1);
        this.getPropertyData(0);
      }
  }

  ngOnInit() {
    this.getData();
  }
}
