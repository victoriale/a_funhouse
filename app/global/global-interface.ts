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
    zipcode: string;
    list_price?: string;
    lat: number;
    lng: number;
    geocoded: {
        normalized_address: string;
        geometry: {
            location_type: string;
            viewport: {
                northeast: {
                    lat: string;
                    lng: string;
                }
                southwest: {
                    lat: string;
                    lng: string;
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
        itemAddress: string;
        magtext1: string;
        magtext2: string;
        photo:  string;
    }]
}