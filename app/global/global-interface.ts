export interface TrendingListInterface{
  full_street_address: string;
  list_price: string;
  loc: string;
  postal_code: string;
}

export interface AmenitiesNearListingInterface {
  restaurant: any;
  grocers: any;
  banks: any;
  total: number;
  businesses: any;
  is_claimed: boolean;
  is_closed: boolean;
  mobile_url: string;
  rating_img_url: string;
  review_count: number;
  name: string;
  rating_img_url_small: string;
  url: string;
  categories: any;
  phone: string;
  display_phone: string;
  snippet_text: string;
  image_url: string;
  snippet_image_url: string;
  rating_img_url_large: string;
  location: any;
}

export interface AboutUsPageInterface {
  counties: string;
  listings: string;
  brokers: string;
  cities: string;
}

export interface PropertyListingInterface {
    listingID: string;
    listPrice: string;
    squareFeet: string;
    lotSize: string;
    listingDate: string;
    daysOnMarket: string;
    address: string;
    zipCode: string;
    city: string;
    state: string;
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
    city: string;
    state: string;
    zipCode: string;
    address: string;
    daysOnMarket: number;
    lotSize: string;
    unit1: string;
    squareFeet: string;
    unit2: string;
    listPrice: string;
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
    listing_key: string;
    address_key: string;
    listing_status: string;
    listhub_url: string;
    street_address: string;
    city: string;
    state: string;
    zipcode: string;
    list_price: string;
    realtor_company: string;
    realtor_logo: string;
    realtor_phone: string;
    realtor_email: string;
    agent_name: string;
    agent_phone: string;
    agent_office_phone: string;
    agent_email: string;
    living_area: string;
    bedrooms: number;
    bathrooms: number;
    neighborhood: string;
    photo: string;
    listing_desc: string;
    views: string;
    magtext1: string;
    magtext2: string;
    magtext3: string;
    magtext4: string;
    magtext5: string;
    magtext6: string;
    magtext7: string;
    magtext8: string;
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
