/**
 * Created by Victoria on 2/23/2016.
 */
import {Component} from 'angular2/core';

import {BackTabComponent} from '../../components/backtab/backtab.component';
import {TitleComponent} from '../../components/title/title.component';
import {TitleLocComponent} from '../../components/title/title_loc.component';
import {CarouselButton} from '../../components/buttons/carousel/carousel.button';
import {InfinityButton} from '../../components/buttons/infinity/infinity.button';
import {Image180} from '../../components/images/image-180/image-180.component';
import {Image100} from '../../components/images/image-100/image-100.component';
import {HeadlineComponent} from '../../components/headline/headline.component';
import {imageHeader} from '../../components/image-header/image-header';
import {propertyType} from '../../components/property-type/property-type';
import {ProfileHeader} from '../../modules/profile_header/profile_header.module';
import {TilesComponent} from '../../components/tiles/tiles.component';
import {FeatureComponent} from '../../components/feature-list/feature-list.component';
import {contentList} from "../../components/contentlist/contentlist";
import {moduleHeader} from "../../components/module-header/module-header";
import {moduleFooter} from "../../components/module-footer/module-footer";

@Component({
selector: 'component-page',
    templateUrl: './app/webpages/component-page/component.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [BackTabComponent, TitleComponent, TitleLocComponent, CarouselButton, InfinityButton, Image180, Image100, HeadlineComponent, imageHeader, propertyType, ProfileHeader, FeatureComponent, TilesComponent, contentList, moduleHeader, moduleFooter, FeatureComponent, TilesComponent],
    providers: [],
})

export class ComponentPage {}



