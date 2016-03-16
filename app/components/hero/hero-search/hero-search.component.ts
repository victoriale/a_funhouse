import {Component} from 'angular2/core';
import {SearchService} from '../../../global/search-service';
import {SearchResults} from '../../search-results/search-results.component';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'hero-search-component',
    templateUrl: './app/components/hero/hero-search/hero-search.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [SearchResults],
    providers: [SearchService],
})

export class HeroSearchComponent{
    //searchResults: Array<Object>;
    searchResults: Observable<Array<Object>>;
    showResults: boolean;

    constructor(private _searchService: SearchService){

    }

    //Function to tell search results component to show when input is focused
    focusResults(event){
        this.showResults = true;
    }

    //Function to tell search results component to hide when input is blurred
    blurResults(event){
        this.showResults = false;
    }

    //Function to fire search api
    searchText(event){
        var input = event.target.value;
        this.showResults = true;
        if(input === ''){
            this.showResults = false;
            this.searchResults = undefined;
            return false;
        }

        this.searchResults = this._searchService.getSearchResults(input, 'list');

        //this._searchService.getSearchResults(input, 'list')
        //.subscribe(
        //    data => {
        //        this.searchResults = data;
        //    }
        //)
    }

    //Function to prevent blur from happening when user clicks on dropdown. (search results component) This is so the anchor tag links can navigate properly
    preventBlur(){
        return false;
    }
}