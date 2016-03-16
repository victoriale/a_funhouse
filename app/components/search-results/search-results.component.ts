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
    searchResults: Array<Object>;

    closeResults(event){
        console.log('Lutz - close results');
        this.showResults = false;
    }

    ngOnChanges(event){
        console.log('Lutz - search changes', event);
        //this.showResults = true;
        if(typeof event.searchResults !== 'undefined') {
            var currentValue = event.searchResults.currentValue;
            var previousValue = event.searchResults.previousValue;

            if(currentValue === []){
                console.log('Lutz - No results found');
            }

            if(JSON.stringify(currentValue) !== JSON.stringify(previousValue) && this.showResults !== false){
                this.showResults = true;
            }
        }
    }
}