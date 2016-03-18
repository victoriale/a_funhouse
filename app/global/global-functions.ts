import {Injectable} from 'angular2/core';

@Injectable()

export class GlobalFunctions{
    //Transforms a string to titlecase
    toTitleCase = function(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

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
}