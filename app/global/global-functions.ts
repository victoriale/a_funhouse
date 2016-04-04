import {Injectable} from 'angular2/core';

@Injectable()

export class GlobalFunctions{
    //Transforms a string to titlecase
    toTitleCase = function(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };

    //Transforms a phone number to a human readable format
    //Formats
    // 10 character length (000) 000-0000
    // 7 character legnth 000-0000
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

    //Takes a number/string and adds commas
    commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
            val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
    }

    fullstate = function(state){
        var stateName = {
            AL: 'Alabama',
            AK: 'Alaska',
            AZ: 'Arizona',
            AR: 'Arkansas',
            CA: 'California',
            CO: 'Colorado',
            CT: 'Connecticut',
            DC: 'District of Columbia',
            DE: 'Delaware',
            FL: 'Florida',
            GA: 'Georgia',
            HI: 'Hawaii',
            ID: 'Idaho',
            IL: 'Illinois',
            IN: 'Indiana',
            IA: 'Iowa',
            KS: 'Kansas',
            KY: 'Kentucky',
            LA: 'Lousiana',
            ME: 'Maine',
            MD: 'Maryland',
            MA: 'Massachusetts',
            MI: 'Michigan',
            MN: 'Minnesota',
            MS: 'Mississippi',
            MO: 'Missouri',
            MT: 'Montana',
            NE: 'Nebraska',
            NV: 'Nevada',
            NH: 'New Hampshire',
            NJ: 'New Jersey',
            NM: 'New Mexico',
            NY: 'New York',
            NC: 'North Carolina',
            ND: 'North Dakota',
            OH: 'Ohio',
            OK: 'Oklahoma',
            ON: 'Ontario',
            OR: 'Oregon',
            PA: 'Pennsylvania',
            PR: 'Puerto Rico',
            RI: 'Rhode Island',
            SC: 'South Carolina',
            SD: 'South Dakota',
            TN: 'Tennessee',
            TX: 'Texas',
            UT: 'Utah',
            VT: 'Vermont',
            VA: 'Virginia',
            WA: 'Washington',
            WV: 'West Virginia',
            WI: 'Wisconsin',
            WY: 'Wyoming'
        };
        return stateName[state];
    };

    // Converts State Postal to AP Abbreviation
    stateToAP = function(state) {
        var stateAP = {
            AL: 'Ala.',
            AK: 'Alaska',
            AZ: 'Ariz.',
            AR: 'Ark.',
            CA: 'Calif.',
            CO: 'Colo.',
            CT: 'Conn.',
            DE: 'Del.',
            DC: 'District of Columbia',
            FL: 'Fla.',
            GA: 'Ga.',
            HI: 'Hawaii',
            ID: 'Idaho',
            IL: 'Ill.',
            IN: 'Ind.',
            IA: 'Iowa',
            KS: 'Kan.',
            KY: 'Ky.',
            LA: 'La.',
            ME: 'Maine',
            MD: 'Md.',
            MA: 'Mass.',
            MI: 'Mich.',
            MN: 'Minn.',
            MS: 'Miss.',
            MO: 'Mo.',
            MT: 'Mont.',
            NE: 'Neb.',
            NV: 'Nev.',
            NH: 'N.H.',
            NJ: 'N.J.',
            NM: 'N.M.',
            NY: 'N.Y.',
            NC: 'N.C.',
            ND: 'N.D.',
            OH: 'Ohio',
            OK: 'Okla.',
            OR: 'Ore.',
            PA: 'Pa.',
            RI: 'R.I.',
            SC: 'S.C.',
            SD: 'S.D.',
            TN: 'Tenn.',
            TX: 'Texas',
            UT: 'Utah',
            VT: 'Vt.',
            VA: 'Va.',
            WA: 'Wash.',
            WV: 'W.Va.',
            WI: 'Wis.',
            WY: 'Wyo.'
        };
        return stateAP[state];
    };

    //Transforms camel case to regular case (Words split up and capitalized)
    camelCaseToRegularCase = function(str){
        str = str
            .replace(/([A-Z][a-z]+)/g, " $1")
            .replace(/([A-Z][A-Z]+)/g, " $1")
            .replace(/([^A-Za-z ]+)/g, " $1")
            // uppercase the first character
            .replace(/^./, function(str){ return str.toUpperCase(); })
        return str;
    };

    convertListName = function(val){
        var names = {
            'homesAtLeast5YearsOld': 'Homes at least 5 years old',
            'homesLessThan5YearsOld': 'Homes less than 5 years old',
            'homesWithSprinklerAndDeck': 'Homes with sprinkler and deck',
            'homesWithVaultedCeilingAndSecuritySystem': 'Homes with vaulted ceiling and security system',
            'homesLargest': 'Largest Homes',
            'homesBrickLeastExpensive': 'Least expensive brick houses',
            'homesLeastExpensive': 'Least expensive homes',
            'homesWithPoolLeastExpensive': 'Least expensive homes with a swimming pool',
            'homesWithWaterfrontLeastExpensive': 'Least expensive homes with waterfront',
            'homesWith2BedroomsMostExpensive': 'Most expensive 2 bedroom homes',
            'homesWith3BedroomsMostExpensive': 'Most expensive 3 bedroom homes',
            'homesMostExpensive': 'Most expensive homes',
            'homesNewTraditional': 'New traditional homes',
            'listingsInWealthiestZipCode': 'Listings in wealthiest ZIP code in area',
            'listingsWithLongDescriptions': 'Listings with long descriptions',
            'listingsWithMoreThan10Photos': 'Listings with more than 10 photos',
            'listingsWithMoreThan5Photos': 'Listings with more than 5 photos',
            'listingsWithVirtualTours': 'Listings with virtual tours',
            'listingsMostRecent': 'Most recent listings',
            'condosMostExpensive': 'Most expensive condos'
        };

        return typeof names[val] === 'undefined' ? val : names[val];
    }
}