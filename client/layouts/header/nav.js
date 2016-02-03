Template.header_nav.events({
  'click #headerLink': function(event,t){
    $('.active').removeClass('active');
    t.$(event.currentTarget).addClass('active');
  },
});

// Set partner header
Template.header_nav.helpers({
  partner_header: function() {
    return Session.get('partner_header_code');
  }
});
