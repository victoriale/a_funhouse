import {Component} from 'angular2/core';

@Component({
    selector: 'backtab-component',
    templateUrl: './app/components/backtab/backtab.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],

})
export class BackTabComponent{
    backgroundImg = './app/public/header_texture.png';
    goBack() {
      if(history.length <= 2){
        window.location.href = '/';
      } else {
        window.history.back();
      }
    }
}
