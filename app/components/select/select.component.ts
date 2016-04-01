import {Component, Input, OnInit} from 'angular2/core';

@Component({
    selector: 'select-component',
    templateUrl: './app/components/select/select.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [],
    providers: [],
    inputs: [],
})

export class SelectComponent implements OnInit {

    selectData: Array<Object>;
    selectConfig: Object;

    ngOnInit() {
        // Placeholder data for testing
        if(typeof this.selectData === 'undefined') {
            this.selectData = [
                { "text": "Option 1", "value": "1", "isSelected": "selected" },
                { "text": "Option 2", "value": "2", "isSelected": false },
                { "text": "Option 3", "value": "3", "isSelected": false },
                { "text": "Option 4", "value": "4", "isSelected": false },
                { "text": "Option 5", "value": "5", "isSelected": false }
            ];
            this.selectConfig = { "id": "select-bedrooms" };
        }
        console.log(this);
    }
}