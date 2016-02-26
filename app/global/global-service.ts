/*
 GLOBAL SERVICE INDEX

 @LOCATIONPROFILE
 _@BATCH-1
 _@BATCH
 */

import {List} from './global-interface';
import {MagHeaderData} from './global-interface';
import {MagCarouselData} from './global-interface';
import {MagOverviewData} from './global-interface';
import {Injectable} from 'angular2/core';

@Injectable()

/*@LOCATIONPROFILE*/

/*_@BATCH-1*/
export class ListOfListService {
    getListOfList() {
        var Lol:List[] = [
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'location': 'somewhere',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            },
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'location': 'someplace',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            },
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'location': 'something',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            },
        ];
        return Promise.resolve(Lol);
    }
}

export class BatchOne {
    getBatchOne() {
        var BatchOne:List[] = [
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'location': 'somewhere',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            },
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'location': 'someplace',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                    './app/public/img_bckgnd.png',
                ]
            },
            {
                'title': '[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet[List Name Here] Lorem ipsum dolor sit amet',
                'bigImage': './app/public/img_bckgnd.png',
                'location': 'something',
                'smallImage': [
                    './app/public/img_bckgnd.png',
                ]
            },
        ];
        return Promise.resolve(BatchOne);
    }
}

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
                street_address: "3277 N LONGFELLOW CT.",
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
}
