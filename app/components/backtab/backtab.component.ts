import {Component} from 'angular2/core';

@Component({
    selector: 'backtab-component',
    templateUrl: './app/components/backtab/backtab.component.html',
    

})
export class BackTabComponent{
    backgroundImg = '/app/public/header_texture.png';
    goBack() {
      window.history.back();
    }
}
