/**
 * Created by Crystal on 4/6/2016.
 */
import {Component, OnInit, Input} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'au-header-component',
    templateUrl: './app/components/au-header/au-header.component.html',
    styleUrls: ['./app/global/stylesheets/master.css']
})

export class AuHeaderComponent implements OnInit {
    @Input() title: string;
    selectedPage: string;

    constructor(private _router: Router) { }

    nav(event){
      var value = event.target.value;
      switch(value){
        case "AboutUsPage":
          this._router.navigate(['Aboutus-page']);
          break;
        case "ContactUsPage":
          this._router.navigate(['Contactus-page']);
          break;
        case "DisclaimerPage":
          this._router.navigate(['Disclaimer-page']);
          break;
      }
    }
    
    ngOnInit() {
      this.selectedPage = this._router.hostComponent.name;
    }
}
