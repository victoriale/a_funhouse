import {Injectable} from 'angular2/core';

@Injectable()

export class GlobalSettings {
  private static _env = window.location.hostname.split('.')[0];
  private static _proto = window.location.protocol;

  private static _partnerId: string;

  private static _apiUrl:string = '-joyfulhome-api.synapsys.us';
  public static _imageUrl:string = 'images.synapsys.us';
  private static _geoUrl: string = 'w1.synapsys.us';

  private static _dynamicApiUrl:string = 'dw.synapsys.us';
  private static _partnerApiUrl: string = 'apireal.synapsys.us/listhuv/?action=get_partner_data&domain=';


  static getEnv(env:string):string {
    if (env == "localhost"){
        env = "dev";
    }
    if (env != "dev" && env !="qa"){
        env = "prod";
    }
    return env;
  }

  static getDynamicWidgetEnv(env:string):string {
    if (env == "localhost" || env == "dev" || env == "qa"){
        env = "dev-";
    }else{
      env = '';
    }
    return env;
  }

  static isProd():boolean {
    if( this.getEnv(this._env) == "prod" ){
      return true;
    }else{
      return false;
    }
  }

  static getAiUrl():string {
    if (this._env == "localhost" || this._env == "dev" || this._env == "qa") {
      return this._proto + "//" + this.getEnv(this._env) + "-realestate-ai.synapsys.us";
    }else{
      return this._proto + "//" + this.getEnv(this._env) + "-joyfulhome-ai.synapsys.us";
    }
  }

  static getApiUrl():string {
      return this._proto + "//" + this.getEnv(this._env) + this._apiUrl;
  }

  static getDynamicUrl():string {
      return this._proto + "//" + this.getDynamicWidgetEnv(this._env) + this._dynamicApiUrl;
  }

  static getPartnerApiUrl(partnerID):string {
      return this._proto + "//"+ this._partnerApiUrl + partnerID;
  }

  static getGeoLocation():string {
      return this._proto + "//" + this._geoUrl;
  }

  static getImageUrl(relativePath):string {
      var relPath = relativePath != null && relativePath != "" ? this._proto + "//" + this._imageUrl + relativePath: '/app/public/placeholder_XL.png';
      return relPath;
  }

  //grabs the domain name of the site and sees if it is our partner page
  static getHomeInfo() {
    var partner = false;
    var isHome = false;
    var hide = false;
    var hostname = window.location.hostname;
    var partnerPage = /myhousekit/.test(hostname) || /^realestate\./.test(hostname) || /localhost/.test(hostname);
    var name = window.location.pathname.split('/')[1];
    var isSubdomainPartner = /^realestate\./.test(hostname);
    //PLEASE REVISIT and change
    if (partnerPage && name == '') {
      hide = true;
      isHome = true;
    }else if(partnerPage && name != ''){
      isHome = true;
    } else if(!partnerPage && name == '') {
      hide = false;
      isHome = true;
    } else {
      hide = false;
      isHome = false;
    }

    if (partnerPage) {
      partner = partnerPage;
    }
    return {
      isPartner: partner,
      hide:hide,
      isHome:isHome,
      partnerName: name,
      isSubdomainPartner: isSubdomainPartner
    };
  }

  static storedPartnerId(partnerId?) {
    if(partnerId != null && this._partnerId == null){
      this._partnerId = partnerId;
    }
    return this._partnerId;
  }
}
