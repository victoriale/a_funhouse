/**
 * Created by Victoria on 3/8/2016.
 */
import {Component} from 'angular2/core';
import {ListViewCarousel} from '../../components/carousel/list-view/list-view.component';
import {DropdownComponent} from '../../components/buttons/sort-by/sort-by.component';
import {ListMenuComponent} from '../../components/list-menu/list-menu.component';
import {WidgetModule} from "../../modules/widget/widget.module";

@Component({
    selector: 'List-page',
    templateUrl: './app/webpages/list-page/list.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [ListViewCarousel, DropdownComponent, ListMenuComponent, WidgetModule],
    providers: [],
})

export class ListPage {
  amenitiesView = [
    {
      imageURL: './app/public/tribune_logo.png',
      homePrice: '$#,###,###',
      address: '1234 N. My Street St.',
      bedrooms: '## Beds',
      bathrooms: '## Baths',
      area: '#,### sqft'
    },
    {
      imageURL: './app/public/tribune_logo.png',
      homePrice: '$#,###,###',
      address: '1234 N. My Street St.',
      bedrooms: '## Beds',
      bathrooms: '## Baths',
      area: '#,### sqft'
    },
    {
      imageURL: './app/public/tribune_logo.png',
      homePrice: '$#,###,###',
      address: '1234 N. My Street St.',
      bedrooms: '## Beds',
      bathrooms: '## Baths',
      area: '#,### sqft'
    },
    {
      imageURL: './app/public/tribune_logo.png',
      homePrice: '$#,###,###',
      address: '1234 N. My Street St.',
      bedrooms: '## Beds',
      bathrooms: '## Baths',
      area: '#,### sqft'
    },
  ]
    constructor() {
        // Scroll page to top to fix routerLink bug
        window.scrollTo(0, 0);
    }
}
