/**
 * Created by Victoria on 2/24/2016.
 */
import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router} from 'angular2/router';

import {TitleComponent} from '../../components/title/title.component';
import {Image180} from '../../components/images/image-180.component';
import {ListingProfileHeaderInterface} from '../../global/global-interface';

@Component({
    selector: 'profile-header',
    templateUrl: './app/modules/profile_header/profile_header.module.html',
    styleUrls: ['./app/global/stylesheets/master.css'],
    directives: [TitleComponent, Image180],
    providers: []
})
export class ProfileHeader implements OnInit{
    public profileType: string;
    public icon: string;
    public descriptionTitle: string;
    public descriptionAddress: string;
    public descriptionSquareFeet: string;
    public descriptionContact: string;
    public descriptionLocation: string;
    public emailLink: string;
    public mainImageURL: string;
    public subImageURL: string;
    public main_hasSubImg: boolean;
    public titleComponentData: {};
    @Input() profileHeaderData: ListingProfileHeaderInterface;

    constructor(private router: Router){
        //Determine what page the profile header module is on
        this.profileType = this.router.hostComponent.name;
    }

    setStaticData(){
        this.icon = 'fa-map-marker';
        //Variables for fields in profile header module
        if(this.profileType === 'LocationPage'){
            //Location Profile Header
            this.main_hasSubImg = false;
        }else if(this.profileType === 'ProfilePage'){
            //Listing Profile Header
            this.main_hasSubImg = true;
        }
    }

    transformData(){
        var data = this.profileHeaderData;
        //Sanitize city value
        data.city = this.toTitleCase(data.city);

        if(this.profileType== 'LocationPage'){
            //Location Profile Header

            this.titleComponentData = {
                imageURL: null,
                //Unused field of component for this module
                smallText: '',
                smallText2: 'Last Updated: ',
                heading1: data.city + ', ' + data.state,
                heading2: '',
                heading3: this.commaSeparateNumber(data.numberOfListings) + ' Listings Available for Sale',
                heading4: '',
                icon: 'fa fa-map-marker',
                hasHover: false
            }

            this.descriptionTitle = data.city + ', ' + data.state;
            this.descriptionLocation = 'Did you know that';

            this.descriptionLocation += data.averageAge === null ? '' : ' the average age for a ' + data.city + ' resident is ' + data.averageAge + ',';
            this.descriptionLocation += data.averageRentalPrice === null ? '' : ' the average rental price is $' + this.commaSeparateNumber(data.averageRentalPrice) + '/month,';
            this.descriptionLocation += data.averageListingPrice === null ? '?' : ' and the average home sells for $' + this.commaSeparateNumber(data.averageListingPrice) + '?';
            this.mainImageURL = null;

        }else if(this.profileType === 'ProfilePage') {
            //Listing Profile Header

            this.titleComponentData = {
                imageURL: data.listingImage,
                //Unused field of component for this module
                smallText: '',
                smallText2: data.city + ', ' + data.state,
                heading1: data.address,
                heading2: data.listingStatus === null ? '' : '- ' + data.listingStatus,
                heading3: 'Listing Price: $' + this.commaSeparateNumber(data.listingPrice),
                heading4: data.squareFeet === null ? '' : '- Area: ' + this.commaSeparateNumber(data.squareFeet) + ' Sq ft.',
                icon: 'fa fa-map-marker',
                hasHover: false,
                originalLink: data.originalLink
            };
            //Build profile header description
            this.descriptionAddress = 'The listing is located at ' + data.address + ', ' + data.city + ', ' + data.state + '.';
            this.descriptionSquareFeet = data.squareFeet === null ? '' : 'The living area is around ' + this.commaSeparateNumber(data.squareFeet) + ' sq ft.';
            this.descriptionContact = '';
            if (data.phoneNumber !== null && data.officeNumber !== null && data.phoneNumber !== data.officeNumber) {
                this.descriptionContact += 'at the phone number ' + this.formatPhoneNumber(data.phoneNumber) + ', or their office phone number ' + this.formatPhoneNumber(data.officeNumber) + '.';
            } else if (data.phoneNumber !== null && data.officeNumber !== null && data.phoneNumber === data.officeNumber) {
                this.descriptionContact += 'at the phone number ' + this.formatPhoneNumber(data.phoneNumber) + '.';
            } else if (data.phoneNumber !== null && data.officeNumber === null) {
                this.descriptionContact += 'at the phone number ' + this.formatPhoneNumber(data.phoneNumber) + '.';
            } else if (data.phoneNumber === null && data.officeNumber !== null) {
                this.descriptionContact += 'at their office number ' + this.formatPhoneNumber(data.officeNumber) + '.';
            }
            //Build email link for realtor
            this.emailLink = data.email === null ? '' : 'mailto:' + data.email;
            this.mainImageURL = data.listingImage;
            this.subImageURL = data.brokerageLogoURL;
            this.descriptionTitle = 'Read more about this listing';

        }
    }

    formatPhoneNumber(val){
        var val = val.toString();
        var numberLength = val.length;

        if(numberLength === 10){
            //Number with area code
            val = '(' + val.slice(0, 3) + ') ' + val.slice(3, 6) + '-' + val.slice(6, 10);
        }else if(numberLength === 7){
            //Number without area code
            val = val.slice(0, 3) + '-' + val.slice(3, 7);
        }

        return val;
    }

    commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
            val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
    }

    toTitleCase = function(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    //Initialization Call
    ngOnInit(){
        this.setStaticData();
    }

    //On Change Call
    ngOnChanges(event){
        //Get changed input
        var currentProfileHeaderData = event.profileHeaderData.currentValue;
        //If the data input is valid run transform data function
        if(currentProfileHeaderData !== null && currentProfileHeaderData !== false){
            this.transformData();
        }
    }
}