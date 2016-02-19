import {Component} from 'angular2/core';
import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';
import {CarouselComponent} from '../../components/carousel/carousel.component';
import {ListOfListModule} from '../../modules/listoflist/listoflist.module';
@Component({
    selector: 'test-module',
    templateUrl: './app/modules/vle/vle.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives:[BackTabComponent, TitleComponent, CarouselComponent, ListOfListModule],
})
export class VlePage{}