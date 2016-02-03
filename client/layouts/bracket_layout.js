// Set partner header
Template.bracket_layout.helpers({
  partner_header: function() {
    return Session.get('partner_header_code');
  }
});
Template.bracket_layout_loading.helpers({
  partner_header: function() {
    return Session.get('partner_header_code');
  }
});
Template.bracket_layout_home.helpers({
  partner_header: function() {
    if(typeof Router.current().params.partner_id != 'undefined'){
      return Session.get('partner_header_code');
    }
  },
  myhoopszone: function() {
    if ( Router.current().url.match(/myhoopszone/) != null ) {
      return true;
    }
    return false;
  }
});
