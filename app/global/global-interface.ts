export interface List {
    title: string;
    location: string;
    bigImage: string;
    smallImage: any;
}

export interface HomePageData {
    citylocation: string;
    statelocation: string;
    cityarea: any;
}

export interface List2 {
    bigImage: string;
    list_name: string;
    list_addr: string;
    list_day: string;
    detail1: string;
    unit1: string;
    detail2: string;
    unit2: string;
    price: string;
    price_name: string;
    smallImage: string[];
    details: string[];
}

//Interface for Listing Profile Header Module
export interface ListingProfileHeaderInterface {
    address: string;
    agent: string;
    brokerageLogoURL: string;
    city: string;
    email: string;
    lastUpdated: string;
    listingID: string;
    listingImage: string;
    listingPrice: string;
    listingStatus: string;
    officeNumber: number;
    originalLink: string;
    phoneNumber: number;
    squareFeet: string;
    state: string;
    zipCode: string;
}