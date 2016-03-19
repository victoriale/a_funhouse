export interface MagData{
    overview?: MagOverview;
    recommendations?: MagRecommendations;
    neighborhood?: MagNeighborhood;
    contact?: MagContact;
    info?: {
        schools?: MagSchools;
        demographics?: MagDemographics;
    };
    amenities?: MagAmenities;
}

export interface MagOverview {
    pageTitle?: string;
    menuTitle?: string;
    address?: address;
    price?: number;
    key?: string;
    content?: string[];
    photos?: string[];
}

export interface MagRecommendations {
    pageTitle?: string;
    menuTitle?: string;
    similar?: Array<{
        address?: address;
        key?: string;
        content?: string[];
        photos?: string[];
    }>;
}

export interface MagNeighborhood {
    pageTitle?: string;
    menuTitle?: string;
    key?: string;
    neighbors?: MagMap[];
}

export interface MagContact {
    pageTitle?: string;
    menuTitle?: string;
    address?: address;
    price?: number;
    key?: string;
    content?: string[];
    photos?: string[];
}

//Interface for Profile Header Module
export interface ProfileHeaderInterface {
    //Listing data
    address: string;
    agent: string;
    brokerageLogoURL: string;
    email: string;
    listingID: string;
    listingImage: string;
    listingPrice: string;
    listingStatus: string;
    officeNumber: number;
    originalLink: string;
    phoneNumber: number;
    squareFeet: string;
    zipCode: string;
    //Location data
    numberOfListings: string;
    averageListingPrice: string;
    averageRentalPrice: string;
    averageAge: string;
    locationImage: string;
    //Shared data
    city: string;
    state: string;
    lastUpdated: string;
}

export interface MagAmenities {
    pageTitle?: string;
    menuTitle?: string;
    address?: address;
    restaurant?: MagAmenity;
    grocery?: MagAmenity;
    bank?: MagAmenity;
}

export interface MagSchools {
    pageTitle?: string;
    menuTitle?: string;
    city?: string;
    content?: string[];
    photo?: string;
}

export interface MagDemographics {
    pageTitle?: string;
    menuTitle?: string;
    city?: string;
    content?: string[];
    photo?: string;
}

export interface address {
    fullStreetAddress?: string;
    city?: string;
    county?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    lat?: number;
    lng?: number;
}

export interface MagMap {
    key?: string;
    photo?: string;
    address?: address;
    list_price?: number;
}

export interface MagAmenity {
    title?: string;
    content?: string[];
    photo?: string;
}

