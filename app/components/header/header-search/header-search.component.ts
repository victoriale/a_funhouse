import {Component} from 'angular2/core';
import {SearchService} from '../../../global/search-service';
import {SearchResults} from '../../search-results/search-results.component';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'header-search-component',
    templateUrl: './app/components/header/header-search/header-search.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [SearchResults],
    providers: [SearchService],
    inputs: ['isHomePage'],
})

export class HeaderSearchComponent{
    isHomePage: boolean;
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

    searchText(event){
        var input = event.target.value;
        console.log('Lutz - Search event', input);
        this.searchResults = this._searchService.getSearchResults(input)
            //.subscribe(
            //    data => {
            //        console.log('Lutz - Search results', data);
            //        this.searchResults = data;
            //    }
            //)
    }
}