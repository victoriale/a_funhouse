import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {GlobalFunctions} from '../../global/global-functions';

import {moduleHeader} from '../../components/module-header/module-header';

@Component({
    selector: 'crime-module',
    templateUrl: './app/modules/crime/crime.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [moduleHeader],
    providers: []
})

export class CrimeModule implements OnInit{
    public moduleTitle: string;
    public profileType: string;
    public stats: Array<Object> = [
        {
            title: 'Thefts',
            color: '#44b244',
            pct: '75%'
        },
        {
            title: 'Assault',
            color: '#1C31CE',
            pct: '10%'
        },
        {
            title: 'Homicides',
            color: '#FFC600',
            pct: '10%'
        },
        {
            title: 'Other',
            color: '#898989',
            pct: '5%'
        }
    ];
    public crimeList: Array<Object> = [
        {
            type: 'Shooting',
            description: 'Shooting/Stabbing. CPD o/s with person stabbed in head during quarrel. Victim is in good condition...',
            date: '02/23/2016',
            imgId: 'shooting',
            imgSrc: './app/public/icons/Icon_Shooting.png'
        },
        {
            type: 'Arrest',
            description: 'INTERFERENCE WITH PUBLIC OFFICER. OBSTRUCTING JUSTICE. Location description: STREET...',
            date: '02/23/2016',
            imgId: 'arrest',
            imgSrc: './app/public/icons/Icon_Arrest.png'
        },
        {
            type: 'Vandalism',
            description: 'CRIMINAL DAMAGE TO VEHICLE. Location description: CHA PARKING LOT/GROUNDS...',
            date: '02/23/2016',
            imgId: 'vandalism',
            imgSrc: './app/public/icons/Icon_Vandalism.png'
        },
        {
            type: 'Theft',
            description: 'THEFT. $500 AND UNDER. Location description. GAS STATION...',
            date: '02/23/2016',
            imgId: 'theft',
            imgSrc: './app/public/icons/Icon_Theft.png'
        }
    ];

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
    }

    //Build Module Title
    setModuleTitle(){

        if(this.profileType === 'LocationPage'){
            //Location Crime Module
            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(paramLocation.split('_')[0]);
            var paramState: string = paramLocation.split('_')[1];

            this.moduleTitle = 'Crime Activity In ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Crime Module
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');

            this.moduleTitle = 'Crime Activity In and Around ' + address + ' ' + paramCity + ', ' + paramState;
        }
    }

    ngOnInit(){
        this.setModuleTitle();
    }
}