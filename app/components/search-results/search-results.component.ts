import {Component, Input, OnChanges} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'search-results',
    templateUrl: './app/components/search-results/search-results.component.html',
    
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    inputs: ['searchResults', 'showResults']
})

export class SearchResults{
    showResults: boolean;
    noResultsFound: boolean;
    searchResults: Array<Object>;

    closeResults(event){
        this.showResults = false;
    }

    ngOnChanges(event){
        //console.log('Lutz - search changes', event, this);
        if(typeof event.searchResults !== 'undefined'){
            var currentValue = event.searchResults.currentValue;
            var previousValue = event.searchResults.previousValue;

            //If returned result is an empty array, display no results found
            if(typeof currentValue !== 'undefined' && currentValue !== null && currentValue.length === 0){
                this.noResultsFound = true;
            }else{
                this.noResultsFound = false;
            }

            //Needed if user clicks on close button (input stays focused so extra typing does not cause dropdown to appear)
            if(JSON.stringify(currentValue) !== JSON.stringify(previousValue)){
                this.showResults = true;
            }
        }
    }
}
