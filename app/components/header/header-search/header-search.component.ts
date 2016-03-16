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

    focusResults(event){
        console.log('Lutz - Focus search')
        //this.showResults = true;
    }

    searchText(event){
        var input = event.target.value;
        console.log('Lutz - Search event', input);
        //If input is empty, exit function
        if(input === ''){
            //this.searchResults = {};
            return false;
        }
        this.searchResults = this._searchService.getSearchResults(input)
            //.subscribe(
            //    data => {
            //        console.log('Lutz - Search results', data);
            //        this.searchResults = data;
            //    }
            //)
    }
}