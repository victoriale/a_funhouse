/**
 * Created by Victoria on 2/24/2016.
 */
import {Component, OnInit, Input, OnChanges} from 'angular2/core';
import {Router} from 'angular2/router';

import {TitleComponent} from '../../components/title/title.component';
import {Image180} from '../../components/images/image-180.component';
import {ProfileHeaderInterface} from '../../global/global-interface';
import {GlobalFunctions} from '../../global/global-functions';

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
    @Input() profileHeaderData: ProfileHeaderInterface;

    constructor(private router: Router, private globalFunctions: GlobalFunctions){
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
        data.city = this.globalFunctions.toTitleCase(data.city);

        if(this.profileType== 'LocationPage'){
            //Location Profile Header

            this.titleComponentData = {
                imageURL: data.locationImage,
                //Unused field of component for this module
                smallText: '',
                smallText2: 'Last Updated: ' + data.lastUpdated,
                heading1: data.city + ', ' + data.state,
                heading2: '',
                heading3: this.globalFunctions.commaSeparateNumber(data.numberOfListings) + ' Listings Available for Sale',
                heading4: '',
                icon: 'fa fa-map-marker',
                hasHover: false
            };

            this.descriptionTitle = data.city + ', ' + data.state;
            this.descriptionLocation = 'Did you know that';

            this.descriptionLocation += data.averageAge === null ? '' : ' the average age for a ' + data.city + ' resident is ' + data.averageAge + ',';
            this.descriptionLocation += data.averageRentalPrice === null ? '' : ' the average rental price is $' + this.globalFunctions.commaSeparateNumber(data.averageRentalPrice) + '/month,';
            this.descriptionLocation += data.averageListingPrice === null ? '?' : ' and the average home sells for $' + this.globalFunctions.commaSeparateNumber(data.averageListingPrice) + '?';
            this.mainImageURL = data.locationImage;

        }else if(this.profileType === 'ProfilePage') {
            //Listing Profile Header

            this.titleComponentData = {
                imageURL: data.listingImage,
                //Unused field of component for this module
                smallText: '',
                smallText2: data.city + ', ' + data.state + ' > ' + 'Last Updated: ' + data.lastUpdated,
                heading1: data.address,
                heading2: data.listingStatus === null ? '' : '- ' + data.listingStatus,
                heading3: 'Listing Price: $' + this.globalFunctions.commaSeparateNumber(data.listingPrice),
                heading4: data.squareFeet === null ? '' : '- Area: ' + this.globalFunctions.commaSeparateNumber(data.squareFeet) + ' Sq ft.',
                icon: 'fa fa-map-marker',
                hasHover: false,
                originalLink: data.originalLink
            };
            //Build profile header description
            this.descriptionAddress = 'The listing is located at ' + data.address + ', ' + data.city + ', ' + data.state + '.';
            this.descriptionSquareFeet = data.squareFeet === null ? '' : 'The living area is around ' + this.globalFunctions.commaSeparateNumber(data.squareFeet) + ' sq ft.';
            this.descriptionContact = '';
            if (data.phoneNumber !== null && data.officeNumber !== null && data.phoneNumber !== data.officeNumber) {
                this.descriptionContact += 'at the phone number ' + this.globalFunctions.formatPhoneNumber(data.phoneNumber) + ', or their office phone number ' + this.globalFunctions.formatPhoneNumber(data.officeNumber) + '.';
            } else if (data.phoneNumber !== null && data.officeNumber !== null && data.phoneNumber === data.officeNumber) {
                this.descriptionContact += 'at the phone number ' + this.globalFunctions.formatPhoneNumber(data.phoneNumber) + '.';
            } else if (data.phoneNumber !== null && data.officeNumber === null) {
                this.descriptionContact += 'at the phone number ' + this.globalFunctions.formatPhoneNumber(data.phoneNumber) + '.';
            } else if (data.phoneNumber === null && data.officeNumber !== null) {
                this.descriptionContact += 'at their office number ' + this.globalFunctions.formatPhoneNumber(data.officeNumber) + '.';
            }
            //Build email link for realtor
            this.emailLink = data.email === null ? '' : 'mailto:' + data.email;
            this.mainImageURL = data.listingImage;
            this.subImageURL = data.brokerageLogoURL;
            this.descriptionTitle = 'Read more about this listing';

        }
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
