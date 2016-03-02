import {Component, OnInit} from 'angular2/core';
//import {Ng2Highcharts, Ng2Highmaps, Ng2Highstocks} from 'ng2-highcharts/ng2-highcharts';

import {moduleHeader} from '../../components/module-header/module-header';

@Component({
    selector: 'crime-module',
    templateUrl: './app/modules/crime/crime.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    //directives: [moduleHeader, Ng2Highcharts, Ng2Highmaps, Ng2Highstocks],
    providers: []
})

export class CrimeModule implements OnInit{
    module_title: string;
    stats = [
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
    crime_list = [
        {
            type: 'Shooting',
            description: 'Shooting/Stabbing. CPD o/s with person stabbed in head during quarrel. Victim is in good condition...',
            date: '02/23/2016',
            img_id: 'shooting',
            img_src: './app/public/icons/Icon_Shooting.png'
        },
        {
            type: 'Arrest',
            description: 'INTERFERENCE WITH PUBLIC OFFICER. OBSTRUCTING JUSTICE. Location description: STREET...',
            date: '02/23/2016',
            img_id: 'arrest',
            img_src: './app/public/icons/Icon_Arrest.png'
        },
        {
            type: 'Vandalism',
            description: 'CRIMINAL DAMAGE TO VEHICLE. Location description: CHA PARKING LOT/GROUNDS...',
            date: '02/23/2016',
            img_id: 'vandalism',
            img_src: './app/public/icons/Icon_Vandalism.png'
        },
        {
            type: 'Theft',
            description: 'THEFT. $500 AND UNDER. Location description. GAS STATION...',
            date: '02/23/2016',
            img_id: 'theft',
            img_src: './app/public/icons/Icon_Theft.png'
        }
    ]

    ngOnInit(){
        this.module_title = 'Crime Activity In and Around [Listing Name]';
    }
}