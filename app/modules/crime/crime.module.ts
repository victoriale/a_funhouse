import {Component, OnInit, OnChanges, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {GlobalFunctions} from '../../global/global-functions';
declare var jQuery: any;

import {moduleHeader} from '../../components/module-header/module-header';

@Component({
    selector: 'crime-module',
    templateUrl: './app/modules/crime/crime.module.html',
    
    directives: [moduleHeader],
    providers: [],
    inputs:['locData']
})

export class CrimeModule implements OnInit{
    @Input() crimeData: any;
    public locData: any;
    public moduleTitle: string;
    public profileType: string;
    public imageUrl: string;
    public crimeStats: Array<{
        title: string,
        color: string,
        pct: string,
        value: number
    }>;
    public tooltipTitle: string;
    public tooltipData: string;
    //Disabled: Design changed. commented out for now
    //public crimeList: Array<Object> = [
    //    {
    //        type: 'Shooting',
    //        description: 'Shooting/Stabbing. CPD o/s with person stabbed in head during quarrel. Victim is in good condition...',
    //        date: '02/23/2016',
    //        imgId: 'shooting',
    //        imgSrc: '/app/public/icons/Icon_Shooting.png'
    //    },
    //    {
    //        type: 'Arrest',
    //        description: 'INTERFERENCE WITH PUBLIC OFFICER. OBSTRUCTING JUSTICE. Location description: STREET...',
    //        date: '02/23/2016',
    //        imgId: 'arrest',
    //        imgSrc: '/app/public/icons/Icon_Arrest.png'
    //    },
    //    {
    //        type: 'Vandalism',
    //        description: 'CRIMINAL DAMAGE TO VEHICLE. Location description: CHA PARKING LOT/GROUNDS...',
    //        date: '02/23/2016',
    //        imgId: 'vandalism',
    //        imgSrc: '/app/public/icons/Icon_Vandalism.png'
    //    },
    //    {
    //        type: 'Theft',
    //        description: 'THEFT. $500 AND UNDER. Location description. GAS STATION...',
    //        date: '02/23/2016',
    //        imgId: 'theft',
    //        imgSrc: '/app/public/icons/Icon_Theft.png'
    //    }
    //];

    constructor(private router: Router, private _params: RouteParams, private globalFunctions: GlobalFunctions){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
    }

    //Build Module Title
    setModuleTitle(){

        if(this.profileType === 'LocationPage'){
            //Location Crime Module
            var paramLocation: string = this._params.get('loc');
            var paramCity: string = this.globalFunctions.toTitleCase(this.locData.city);
            paramCity = this.globalFunctions.toTitleCase(paramCity.replace(/%20/g, " "));
            var paramState: string = this.locData.state;
            this.moduleTitle = 'Crime Activity in ' + paramCity + ', ' + paramState;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Crime Module
            var paramAddress = this._params.get('address').split('-');
            var paramState = paramAddress[paramAddress.length -1];
            var paramCity = paramAddress [paramAddress.length - 2];
            var tempArr = paramAddress.splice(-paramAddress.length, paramAddress.length - 2);
            var address = tempArr.join(' ');
            this.moduleTitle = 'Crime Activity in and Around ' + this.globalFunctions.toTitleCase(address) + ' ' + this.globalFunctions.toTitleCase(paramCity) + ', ' + paramState;
        }
    }

    transformData(){
        var data = this.crimeData;

        var returnArray = [];

        //Aggravated Assault
        returnArray.push({
            title: 'Aggravated Assault',
            color: '#44b244',
            pct: (Math.round(data.aggravatedAssaultPercentage * 100) / 100) + '%',
            value: data.aggravatedAssaultPercentage
        });
        //Burglary
        returnArray.push({
            title: 'Burglary',
            color: '#1C31CE',
            pct: (Math.round(data.burglaryPercentage * 100) / 100) + '%',
            value: data.burglaryPercentage
        });
        //Larceny
        returnArray.push({
            title: 'Larceny',
            color: '#FFC600',
            pct: (Math.round(data.larcenyPercentage * 100) / 100) + '%',
            value: data.larcenyPercentage
        });
        //Murder
        returnArray.push({
            title: 'Murder',
            color: '#ff0101',
            pct: (Math.round(data.murderPercentage * 100) / 100) + '%',
            value: data.murderPercentage
        });
        //Vehicle Theft
        returnArray.push({
            title: 'Vehicle Theft',
            color: '#65398E',
            pct: (Math.round(data.vehicleTheftPercentage * 100) / 100) + '%',
            value: data.vehicleTheftPercentage
        });
        //Other Crime
        returnArray.push({
            title: 'Other',
            color: '#898989',
            pct: (Math.round(data.otherPercentage * 100) / 100) + '%',
            value: data.otherPercentage
        });

        this.imageUrl = data.locationImage === null ? '/app/public/placeholder-location.jpg' : data.locationImage;
        this.crimeStats = returnArray;
        this.tooltipTitle = 'Crime Grade:';
        this.tooltipData = data.totalGrade;
        //Draw pie chart
        this.drawPie();
    }

    drawPie(){
        var data = this.crimeStats;

        var chartData = [];

        data.forEach(function(item, index){
            chartData.push({
                name: item.title,
                y: item.value,
                color: item.color
            })
        });

        jQuery('#crime-pie').highcharts({
            chart: {
                type: 'pie',
                width: 280,
                height: 235
            },
            tooltip: false,
            title: false,
            credits: false,
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Crime',
                data: chartData,
                size: '100%',
                innerSize: '55%',
                states: {
                    hover: {
                        enabled: false,
                        halo: {
                            size: 0
                        }
                    }
                }
            }]
        });

    }

    //Initialization Call
    ngOnInit(){
        this.setModuleTitle();
    }

    //On Change Call
    ngOnChanges(event){
        this.transformData();
    }
}
