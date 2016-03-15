import {Component, Input} from 'angular2/core';
import {InfinityButton} from '../buttons/infinity/infinity.button';

@Component({
    selector: 'pagination-footer',
    templateUrl: './app/components/pagination-footer/pagination-footer.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives:[InfinityButton],
    providers: [],
    inputs: []
})

export class PaginationFooter{
    public paginationButtons: Array<Number> = [
        1, 2, 3
    ];
    public index: number = 2;
}