import {Component, Input, OnChanges} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

@Component({
    selector: 'search-results',
    templateUrl: './app/components/search-results/search-results.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [],
    inputs: ['searchResults', 'showResults']
})

export class SearchResults{
    showResults: boolean;
    noResultsFound: boolean
    searchResults: Array<Object>;

    closeResults(event){
        this.showResults = false;
    }

    ngOnChanges(event){
        //console.log('Lutz - search changes', event, this);
        if(typeof event.searchResults !== 'undefined'){
            var currentValue = event.searchResults.currentValue;
            var previousValue = event.searchResults.previousValue;

            if(currentValue !== null && currentValue.length === 0){
                console.log('Lutz - No results found');
                this.noResultsFound = true;
            }else{
                this.noResultsFound = false;
            }
            //console.log('Lutz - search check', JSON.stringify(currentValue), JSON.stringify(previousValue), JSON.stringify(currentValue) !== JSON.stringify(previousValue));
            if(JSON.stringify(currentValue) !== JSON.stringify(previousValue) && this.showResults !== false){
                this.showResults = true;
            }
        }
    }
}