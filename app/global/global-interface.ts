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
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    county?: string;
    country?: string;
    price?: number;
    key?: string;
    content?: string[];
    photos?: string[];
}

export interface MagNeighborhood {
    pageTitle?: string;
    menuTitle?: string;
    key?: string;
    neighbors?: MagMap[];
}

export interface MagMap {
    key?: string;
    photo?: string;
    listing_key: string;
    listhub_key: string;
    street_address: string;
    city: string;
    state: string;
    zipcode: string;
    list_price?: number;
    lat: number;
    lng: number;
    geocoded: {
        normalized_address: string;
        geometry: {
            bounds?: {
                northeast?: {
                    lat: number;
                    lng: number;
                }
                southwest?: {
                    lat: number;
                    lng: number;
                }
            }
            location_type: string;
            viewport: {
                northeast: {
                    lat: number;
                    lng: number;
                }
                southwest: {
                    lat: number;
                    lng: number;
                }
            }
        }
    }
}

export interface MagRecommendations {
    pageTitle?: string;
    menuTitle?: string;
    similar?: Array<{
        address?: string;
        key?: string;
        content?: string[];
        photos?: string[];
    }>;
}

export interface MagAmenities {
    pageTitle?: string;
    menuTitle?: string;
    address?: string;
    restaurant?: MagAmenity;
    grocery?: MagAmenity;
    bank?: MagAmenity;
}

export interface MagAmenity {
    title?: string;
    content?: string[];
    photo?: string;
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

export interface MagContact {
    pageTitle?: string;
    menuTitle?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    county?: string;
    country?: string;
    price?: number;
    key?: string;
    content?: string[];
    photos?: string[];
}
