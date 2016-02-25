/**
 * Created by Victoria on 2/24/2016.
 */
import {Component} from 'angular2/core';
import {TitleLocComponent} from '../../components/title/title_loc.component';
import {Image180} from '../../components/images/image-180/image-180.component';

@Component({
    selector: 'profile-header',
    templateUrl: './app/modules/profile_header/profile_header.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [TitleLocComponent, Image180],
    providers: [],
})
export class ProfileHeader{
    icon = 'fa fa-map-marker';
    title = 'Quick info about [City], [State]';
    description = 'The most popular neighborhood In  [City], [State] for new listings was [City], [State].  Did you know that the average age for a [City], [State] resident is [##] and the average home sells for $[###,###].';
}