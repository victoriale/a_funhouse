import {Component} from 'angular2/core';
import {SearchService} from '../../../global/search-service';
import {SearchResults} from '../../search-results/search-results.component';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {Observable} from 'rxjs/Rx';
import {Control} from 'angular2/common';
//Currently Uneeded dependencies since full rxjs library is being pulled in with import {Observable} from 'rxjs/Rx'
//Go back later and pick modular dependencies
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/of';

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
    searchResults: Array<Object>;
    showResults: boolean;

    term:any = new Control();

    constructor(private _searchService: SearchService, private _router: Router){
        //Function chain to pull api data for search
        //.debounceTime - only fire following function calls after 400 milliseconds after user input is done
        //.distinctUntilChanged - Ensures that api is not hit twice with the same parameters. This could happen if a person types 'car' in the input -> gets a result -> types 'cart' -> backspaces to 'car' (before the debounce time), the previous parameter was zoo and the new parameter hasnt changed therefore no new api call is needed
        //.switchMap - Ensures that api calls are in order. If a new api call is fired before the previous call finishes, the previous call is cancelled. Also in this case if the input is of length 0 then the api call is ignored and undefined is passed to search results
        //.subscribe - Assign result data to variable
        this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap((term: string) => term.length > 0 ? this._searchService.getSearchResults(term, 'list') : Observable.of(undefined))
            .subscribe(
                (data: Array<Object>) => {
                    this.searchResults = data;
                }
            )

    }

    //Function to submit form to navigate to results page
    onSubmit(event){
        var value = this.term._value;
        if(typeof value === 'undefined' || value === ''){
            return false;
        }

        value = encodeURIComponent(value);
        //Cancel previous call by passing empty string to the observable
        this.term.updateValue('');
        //Navigate to search page with query string
        this._router.navigate(['Search-page', {query: value}]);
        this.showResults = false;
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
    }

    //Function to prevent blur from happening when user clicks on dropdown. (search results component) This is so the anchor tag links can navigate properly
    preventBlur(){
        return false;
    }
}
