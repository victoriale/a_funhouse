import {Injectable} from 'angular2/core';

@Injectable()

export class GlobalSettings {
  private static _env = window.location.hostname.split('.')[0];
  private static _proto = window.location.protocol;

  static getEnv(env:string):string {
    if (env == "localhost"){
        env = "dev";
    }
    if (env != "dev" && env !="qa"){
        env = "prod";
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

  //grabs the domain name of the site and sees if it is our partner page
  static getHomeInfo() {
    var partner = false;
    var isHome = false;
    var hide = false;
    var hostname = window.location.hostname;
    var partnerPage = /myhousekit/.test(hostname) || /^realestate\./.test(hostname);
    var name = window.location.pathname.split('/')[1];
    var isSubdomainPartner = /^realestate\./.test(hostname);
    //PLEASE REVISIT and change
    if (partnerPage && name == '') {
      hide = true;
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
}
