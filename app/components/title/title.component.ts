import {Component, Input} from 'angular2/core';
import {Image100} from '../../components/images/image-100/image-100.component';

@Component({
    selector: 'title-component',
    templateUrl: './app/components/title/title.component.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [Image100],
    inputs: ['titleData']
})
export class TitleComponent{
    public titleData: Object;

    ngOnInit(){
    }

}