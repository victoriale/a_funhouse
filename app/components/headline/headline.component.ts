/**
 * Created by Victoria on 2/23/2016.
 */
import {Component, Input} from 'angular2/core';

@Component({
    selector: 'headline-component',
    templateUrl: './app/components/headline/headline.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    inputs: ['title']
})
export class HeadlineComponent{
    public title: string;
}