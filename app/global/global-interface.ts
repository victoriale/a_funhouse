export interface PropertyListingInterface {
    listingID: string;
    imageCount: string;
    numBathrooms: string;
    numBedrooms: string;
    fullBathrooms: string;
    halfBathrooms: string;
    architecturalStyle: string;
    numFloors: string;
    hasBasement: string;
    listingImages: any;
    appliance: string;
    heating: string;
    exterior: string;
    roof: string;
}

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
}

//Interface for Profile Header Module
export interface ProfileHeaderInterface {
    //Listing data
    address: string;
    agent: string;
    brokerageLogoURL: string;
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
    zipCode: string;
    //Location data
    numberOfListings: string;
    averageListingPrice: string;
    averageRentalPrice: string;
    averageAge: string;
    //Shared data
    city: string;
    state: string;
}

//Interface for Featured List Module
export interface FeaturedListInterface {
    featured_list: Array<{
        address: string;
        bathrooms: string;
        bedrooms: string;
        listPrice: string;
        listingImage: string;
        listingName: string;
        neighborhood: string;
        zipcode: string;
    }>;
    url_mod: {
        "list-of-lists": string;
        top10Local: string;
        top10National: string;
    }
}

export interface MagHeaderData {
    checked: string;
    data: string;
    hasLink: boolean;
    id: string;
    name: string;
    pageNum: number;
    template: string;
}

export interface MagCarouselData {
    listing_key: string;
    listhub_key: string;
    street_address: string;
    city: string;
    state: string;
    zipcode: string;
    neighborhood: string;
    realtor_company: string;
    photos: string[];
    virtual_tours: string[];
    videos: string[];
}

export interface MagOverviewData {
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

export interface MagNeighborhoodData {
    magtext1: string;
    magtext2: string;
    magtext3: string;
    magtext4: string;
    magtext5: string;
    magtext6: string;
    magtext7: string;
}

export interface MagMapData {
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
    photo: string;
}

export interface MagSimilarListingsData {
    listing1:[{
        itemAddress: string;
        itemImg: string;
        itemImg2: string;
        itemKey: string;
        magtext1: string;
        magtext2: string;
        magtext3: string;
        magtext4: string;
        magtext5: string;
        magtext6: string;
    }]
    listing2:[{
        itemAddress: string;
        itemImg: string;
        itemImg2: string;
        itemKey: string;
        magtext1: string;
        magtext2: string;
        magtext3: string;
        magtext4: string;
        magtext5: string;
        magtext6: string;
    }]
    contactListing:[{
        address_key: string;
        city: string;
        state: string;
        zipcode: string;
        itemAddress: string;
        magtext1: string;
        magtext2: string;
        photo:  string;
    }]
}
