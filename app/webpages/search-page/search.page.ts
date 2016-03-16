import {Component, OnInit} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';

@Component({
    selector: 'Search-page',
    templateUrl: './app/webpages/search-page/search.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent],
    providers: [],
})

export class SearchPage implements OnInit{
  searchImage:string = "./app/public/Image_Search.png";

  ngOnInit(){
    
  }
}
