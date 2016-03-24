/**
 * Created by Victoria on 3/14/2016.
 */
import {Component, Input, OnInit, OnChanges} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {WidgetModule} from "../../modules/widget/widget.module";
import {GlobalFunctions} from "../../global/global-functions";

import {moduleHeader} from "../../components/module-header/module-header";
import {LocationProfileService} from '../../global/location-profile.service';

@Component({
    selector: 'School-list-page',
    templateUrl: './app/webpages/school-lists/school-lists.page.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [WidgetModule, moduleHeader, ROUTER_DIRECTIVES],
    providers: [LocationProfileService]
})

export class SchoolListsPage implements OnInit{
  moduleTitle: string;
  public location: string;
  public locCity: string;
  public locState: string;
  public profileType: string;
  private schoolData: any;

  @Input() schoolDataInput: any;

  constructor(private _params: RouteParams, private router: Router, private globalFunctions: GlobalFunctions, private _locationService: LocationProfileService, params: RouteParams){
      window.scrollTo(0, 0);
  }

  getData(){
      this._locationService.getSchoolData(this.locCity, this.locState)
          .subscribe(
              schoolData => {this.schoolData = this.dataFormatter(schoolData)
              }

          );

  }

  dataFormatter(data){
    var dataLists = data['high'];
    dataLists.forEach(function(val, i){
      val.rank = i+1;
      val.locationUrl = {loc: val['city'] + '_' + val['state_or_province']};
    })
    return dataLists;
  }

  ngOnInit(){
    this.locState = decodeURI(this._params.get('state'));
    this.locCity = decodeURI(this._params.get('city'));
    this.location = this.globalFunctions.toTitleCase(this.locCity) + ', ' + this.locState;
    this.moduleTitle = "Top Rated School In " + this.location;
    this.getData();
  }

  // On Change Call
  ngOnChanges(event) {
    //Get changed input
    var currentSchoolDataInput = event.schoolDataInput.currentValue;
    //If the data input is valid run transform data function
    if (currentSchoolDataInput !== null && currentSchoolDataInput!== false) {
      this.getData();
    }
  }
}
