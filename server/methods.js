var Future = Npm.require("fibers/future");


Meteor.methods({
  //API to grab partner header
  GetPartnerHeader: function(partner_id) {
    var startTime = (new Date()).getTime();
    var URLString = "http://apireal.synapsys.us/listhuv/?action=get_partner_data&domain=" + partner_id;
    var future = new Future();
    Meteor.http.get(URLString,(function(startTime, partner_id, error, data){
      console.log(data);
      if ( error ) {
        future.return(error);
        var endTime = (new Date()).getTime();
        console.log('METHODSTAT|"GetPartnerHeader",,"' + partner_id + '",' + (endTime - startTime) + ',' + endTime + '|');
        return false;
      }
      future.return(data);
      var endTime = (new Date()).getTime();
      console.log('METHODSTAT|"GetPartnerHeader",,"' + partner_id + '",' + (endTime - startTime) + ',' + endTime + '|');
    }).bind(undefined, startTime, partner_id));
    this.unblock();
    return future.wait();
  },

});
