/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */
import {MagHeaderData} from './global-interface';
import {MagCarouselData} from './global-interface';
import {MagOverviewData} from './global-interface';
import {Injectable} from 'angular2/core';
import {MagNeighborhoodData} from "./global-interface";
import {MagMapData} from "./global-interface";

@Injectable()

/*@LOCATIONPROFILE*/


export class MagazineHeader {
    getMagazineHeader() {
        var MagHeader:MagHeaderData[] = [
            {
                'checked': 'checked',
                'data': 'MagazineListing',
                'hasLink': true,
                'id': 'PropertyOverview',
                'name': 'Property Overview',
                'pageNum': 1,
                'template': 'mag_property_overview',
            },
            {
                'checked': '',
                'data': 'MagazineNeighborhood',
                'hasLink': true,
                'id': 'Neighborhood',
                'name': 'The Neighborhood',
                'pageNum': 2,
                'template': 'mag_neighborhood1',
            },
            {
                'checked': '',
                'data': 'MagazineSimilarListings',
                'hasLink': true,
                'id': 'Recommendations',
                'name': 'Recommendations',
                'pageNum': 3,
                'template': 'mag_recommendations1',
            },
            {
                'checked': '',
                'data': 'MagazineRealtor',
                'hasLink': true,
                'id': 'ContactRealtor',
                'name': 'Contact Realtor',
                'pageNum': 4,
                'template': 'mag_contact',
            },
        ];
        return Promise.resolve(MagHeader);
    }
}

export class MagazineCarousel {
    getMagazineCarousel() {
        var MagCarousel:MagCarouselData[] = [
            {
                listing_key: "3277-N-LONGFELLOW-CT-Wichita-KS",
                listhub_key: "3yd-SCKMLSKS-515305",
                street_address: "3277 N Longfellow Ct.",
                city: "Wichita",
                state: "KS",
                zipcode: "67226",
                neighborhood: "433",
                realtor_company: "Coldwell Banker Plaza Real Estate",
                photos: [
                    "http://photos.listhub.net/SCKMLSKS/515305/1?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/2?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/3?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/4?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/5?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/6?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/7?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/8?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/9?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/10?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/11?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/12?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/13?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/14?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/15?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/16?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/17?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/18?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/19?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/20?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/21?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/22?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/23?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/24?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/25?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/26?lm=20160207T192146",
                    "http://photos.listhub.net/SCKMLSKS/515305/27?lm=20160207T192146"
                ],
                virtual_tours: [],
                videos: [],
            }
        ];
        return Promise.resolve(MagCarousel);
    }
}

export class MagazineOverview {
    getMagazineOverview() {
        var MagOverview:MagOverviewData[] = [
            {
                listing_key: "3yd-SCKMLSKS-515305",
                address_key: "3277-N-LONGFELLOW-CT-Wichita-KS",
                listing_status: "Active",
                listhub_url: "http://listings.listhub.net/pages/SCKMLSKS/515305/?channel=passfail",
                street_address: "3277 N LONGFELLOW CT.",
                city: "Wichita",
                state: "KS",
                zipcode: "67226",
                list_price: "124900",
                realtor_company: "Coldwell Banker Plaza Real Estate",
                realtor_logo: "http://brokerlogos.listhub.net/SCKMLSKS/c5ababc31c28802d011c2880d99d002a/20150406163507701.png",
                realtor_phone: "(316) 686-7121",
                realtor_email: "jmckenzie@plazare.com",
                agent_name: "PEGGY BOCKUS",
                agent_phone: "3167220030",
                agent_office_phone: "3167220030",
                agent_email: "pegbockus@cox.net",
                living_area: "1386",
                bedrooms: 3,
                bathrooms: 2,
                neighborhood: "433",
                photo: "http://photos.listhub.net/SCKMLSKS/515305/1?lm=20160207T192146",
                listing_desc: "",
                views: "0",
                magtext1: "This informal ranch home at 3277 N LONGFELLOW CT. just hit the market in Wichita.",
                magtext2: "With 3 bedrooms and 2 full bathrooms, there's plenty of room for family and guests in this minimal 1987 home.",
                magtext3: "Picture your friends and loved ones gathering around the fireplace on a cold winter's night, hosting a game night in the basement or relaxing on the deck with a refreshing beverage.",
                magtext4: "Inside, you will enjoy floor coverings including cozy carpet, low-maintenance laminate, cool tile and beautiful wood.",
                magtext5: "Grocery stores close to this home are Walmart Supercenter, KC's Oriental Food Market and Leeker's Family Foods. Other nearby amenities include Carrabba's Italian Grill, serving Italian fare; Yaya's Euro Bistro, an American (New) restaurant; and The Good Egg, a Breakfast & Brunch restaurant.",
                magtext6: "Buyers who wish to learn more about this listing can visit",
                magtext7: "or contact PEGGY BOCKUS of Coldwell Banker Plaza Real Estate - W 13th at (316) 722-0030 or",
                magtext8: ". To learn more about the 433 neighborhood and its demographics, amenities and schools please continue reading.",
            }
        ];
        return Promise.resolve(MagOverview);
    }

    z
}

export class MagazineNeighborhood {
    getMagazineNeighborhood() {
        var MagNeighborhood:MagNeighborhoodData[] = [
            {
                magtext1: "Choosing a home isn't just about the house itself. It's also about the surroundings.",
                magtext2: "The home at 3277 N LONGFELLOW CT. is located within the 67226 zip code, which is home to amenities including Stearman Field Bar & Grill, Lina's Mexican Restaurant and Save-A-Lot.",
                magtext3: "It's a relatively expensive place to live compared with the rest of the state. The median value of a residential property in the 67226 zip code is $185,800, which is substantially greater than the Kansas median of $128,400. This is an area where many people choose to own their own homes instead of renting. About 41.9 percent of occupied properties are rented. Homes in the area are newer than the statewide average.",
                magtext4: "As a whole, the residents in this area make much more money than the statewide average, with a median income in the area of $70,311. People here are well educated, with about 52.9 percent of adults 25 and older having attained a bachelor's degree.",
                magtext5: "The population in the 67226 zip code has remained stable since the 2010 Census. About 18,002 people live here now.",
                magtext6: "The area's crime rate is above the national average, with thefts being the most common crime.",
                magtext7: "Do you think the 433 area is right for you? It has 28 listings on the market, ranging from a 2-bedroom single family attached at &&& for $1,050 to a 3-bedroom single family detached at",
            }
        ];
        return Promise.resolve(MagNeighborhood);
    }
}

export class MagazineMap {
    getMagazineMap() {
        var MagMap:MagMapData[] = [
            {
                listing_key: "5048-N-PRESTWICK-Bel-Aire-KS",
                listhub_key: "3yd-SCKMLSKS-504635",
                street_address: "5048 N PRESTWICK",
                city: "Bel Aire",
                state: "KS",
                zipcode: "67226",
                list_price: "420000",
                lat: 37.7752626,
                lng: -97.24967,
                geocoded: {
                    normalized_address: "5048 Prestwick Avenue, Bel Aire, KS 67226, USA",
                    geometry: {
                        location_type: "ROOFTOP",
                        viewport: {
                            northeast: {
                                lat: "37.77661158029149",
                                lng: "-97.2483210197085"
                            },
                            southwest: {
                                lat: "37.77391361970849",
                                lng: "-97.2510189802915"
                            }
                        }
                    }
                },
                photo: "http://photos.listhub.net/SCKMLSKS/504635/0?lm=20150606T050836"
            },
            {
                listing_key: "8533-E-32nd-St-N-Wichita-KS",
                listhub_key: "3yd-SCKMLSKS-377482",
                street_address: "8533 E 32nd St N",
                city: "Wichita",
                state: "KS",
                zipcode: "67226",
                list_price: "1650000",
                lat: 37.7422435,
                lng: -97.2383007,
                geocoded: {
                    normalized_address: "8533 East 32nd Street North, Wichita, KS 67226, USA",
                    geometry: {
                        location_type: "ROOFTOP",
                        viewport: {
                            northeast: {
                                lat: "37.7435924802915",
                                lng: "-97.2369517197085"
                            },
                            southwest: {
                                lat: "37.7408945197085",
                                lng: "-97.2396496802915"
                            }
                        }
                    }
                },
                photo: "http://photos.listhub.net/SCKMLSKS/377482/0?lm=20150209T181707"
            },
            {
                listing_key: "5278-N-Rock-Spring-Rd-Bel-Aire-KS",
                listhub_key: "3yd-SCKMLSKS-500255",
                street_address: "5278 N Rock Spring Rd",
                city: "Bel Aire",
                state: "KS",
                zipcode: "67226",
                list_price: "194900",
                lat: 37.7708346,
                lng: -97.25989129999999,
                geocoded: {
                    normalized_address: "Bel Aire, KS, USA",
                    geometry: {
                        bounds: {
                            northeast: {
                                lat: "37.795964",
                                lng: "-97.1897609"
                            },
                            southwest: {
                                lat: "37.752288",
                                lng: "-97.280773"
                            }
                        },
                        location_type: "APPROXIMATE",
                        viewport: {
                            northeast: {
                                lat: "37.795964",
                                lng: "-97.1897609"
                            },
                            southwest: {
                                lat: "37.752288",
                                lng: "-97.280773"
                            }
                        }
                    }
                },
                photo: "http://photos.listhub.net/SCKMLSKS/500255/0?lm=20150627T170831"
            },
            {
                listing_key: "5089-N-Hampton-St-Bel-Aire-KS",
                listhub_key: "3yd-SCKMLSKS-515959",
                street_address: "5089 N Hampton St",
                city: "Bel Aire",
                state: "KS",
                zipcode: "67226",
                list_price: "2300",
                lat: 37.7761102,
                lng: -97.2521558,
                geocoded: {
                    normalized_address: "5089 N Hampton St, Bel Aire, KS 67226, USA",
                    geometry: {
                        bounds: {
                            northeast: {
                                lat: "37.7761208",
                                lng: "-97.2521427"
                            },
                            southwest: {
                                lat: "37.7761102",
                                lng: "-97.2521558"
                            }
                        },
                        location_type: "RANGE_INTERPOLATED",
                        viewport: {
                            northeast: {
                                lat: "37.777464480291",
                                lng: "-97.250800269708"
                            },
                            southwest: {
                                lat: "37.774766519708",
                                lng: "-97.253498230291"
                            }
                        }
                    }
                },
                photo: null
            },
            {
                listing_key: "2554-N-Fox-Run-Ct-Wichita-KS",
                listhub_key: "3yd-SCKMLSKS-506190",
                street_address: "2554 N Fox Run Ct",
                city: "Wichita",
                state: "KS",
                zipcode: "67226",
                list_price: "224900",
                lat: 37.730161,
                lng: -97.222556,
                geocoded: {
                    normalized_address: "2554 North Fox Run Court, Wichita, KS 67226, USA",
                    geometry: {
                        location_type: "ROOFTOP",
                        viewport: {
                            northeast: {
                                lat: "37.73150998029149",
                                lng: "-97.2212070197085"
                            },
                            southwest: {
                                lat: "37.72881201970849",
                                lng: "-97.22390498029151"
                            }
                        }
                    }
                },
                photo: "http://photos.listhub.net/SCKMLSKS/506190/0?lm=20150625T231001"
            },
        ];
        return Promise.resolve(MagMap);
    }
}
