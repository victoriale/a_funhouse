/**
 *
 * Routes for NBA Brackets pages
 *
 */

//current URL for location of images
if (Meteor.absoluteUrl().indexOf("http://joyfulhome.com.com") > -1 || Meteor.absoluteUrl().indexOf("http://myhousekit.com") > -1) {
  APIHost = "http://apireal.synapsys.us/listhuv";
  Test_WidAPI = "http://apirt.synapsys.us/index.php";
} else {
  //dev apis
  APIHost = "http://apireal.synapsys.us/listhuv";
  Test_WidAPI = "http://apirt.synapsys.us/index.php";
}
/**************
***Route producing function
***Set this.assembledRoutes to an array of objects containing name, path, and controller
***Call this.routeMaker() to assemble the routes
***************/
function AutoRouterClass(routeConfigs){
  this.assembledRoutes = [];
  this.routeConfigs = routeConfigs;
  this.routeMaker = function() {
    for ( var i = 0; i < this.routeConfigs.length; i++ ) {
      this.assembledRoutes.push(
        Router.route(this.routeConfigs[i].path, {
          name: this.routeConfigs[i].name,
          controller: this.routeConfigs[i].controller
        })
      );
    }
  }
  this.routeMaker();
}

/*******************
***Routes for all pages stored in an Config
***Create route/controller for both partner and local vertical
********************/
var routeConfigs = [
  // Static Pages
  {name: 'joyfulhome.bracketLeaderboard', path: '/leaderboard', controller: 'leaderBoardController'},
  {name: 'myhousekit.bracketLeaderboard', path: '/:partner_id/leaderboard', controller: 'leaderBoardController'},
  {name: 'joyfulhome.buildBracket', path: '/buildbracket', controller: 'buildBracketController'},
  {name: 'myhousekit.buildBracket', path: '/:partner_id/buildbracket', controller: 'buildBracketController'},
  {name: 'joyfulhome.liveBracket', path: '/livebracket', controller: 'liveBracketController'},
  {name: 'myhousekit.liveBracket', path: '/:partner_id/livebracket', controller: 'liveBracketController'},
  {name: 'joyfulhome.NewsArticle', path: '/news', controller: 'newsArticleController'},
  {name: 'myhousekit.NewsArticle', path: '/:partner_id/news', controller: 'newsArticleController'},
  {name: 'joyfulhome.teamPage', path: '/teamspage', controller: 'teamPageController'},
  {name: 'myhousekit.teamPage', path: '/:partner_id/teamspage', controller: 'teamPageController'},

  // Profiles

  // List Routes

  // Widget Pages

  // Home Page
  {name: 'joyfulhomebracket.home', path: '/', controller: 'HomePageController'},
  {name: 'myhousekitbracket.home', path: '/:partner_id', controller: 'HomePageController'},

  // Catch-22 page
  {name: 'catch-22', path: '/(.*)', controller: "NotFoundController"}
];
var AutoRouter = new AutoRouterClass(routeConfigs);

Router.configure({
  // layoutTemplate: 'sports_layout_loading',
  // loadingTemplate: 'sports_loading',
  // notFoundTemplate: 'sports_404'
});

/*---------------GLOBAL MODIFIERS--------------------------*/
Router.onStop(function() {
  delete Session.keys.IsFirstRun;
  delete Session.keys.IsGlobalFirstRun;
  delete Session.keys.IsError;
  delete Session.keys.IsData;
  window.scrollTo(0,0); // Scroll to the top of the page
});

NotFoundController = RouteController.extend({
  action: function() {
    // this.render('sports_404');
  }
})

DefaultController = RouteController.extend({
  onRerun: function(){
    console.log('Rerun');
    if ( Session.get('IsError') ) {
      // this.layout('sports_layout');
      // this.render('sports_error');
    } else {
      // $('.ad_zone-widget1-area').removeClass('stick_top');
      // $('.ad_zone-widget1-area').removeClass('stick_bottom');
      // this.layout('sports_layout');
      // this.render('sports_loading');
    }
    this.next();
  },
  onBeforeAction: function() {
    if ( typeof this.params.partner_id != "undefined" && typeof Session.get('IsGlobalFirstRun') == "undefined" ) {
      // ga('send', 'pageview');
      this.params.partner_id = this.params.partner_id.toLowerCase();
      SetPageTitle('Realestate', true);
      var doCall = true;
      if ( typeof Storage != "undefined" && typeof localStorage[this.params.partner_id] != "undefined" ) {
        var p_data = JSON.parse(localStorage[this.params.partner_id]);
        SetPageTitle(p_data.name + ' Realestate', true);
        Session.set('p_data',p_data);
        Session.set('partner_header_code',p_data.results.header.script);
      }
      if ( typeof p_data == "undefined" || typeof p_data.date == "undefined" || ((new Date()).getTime() - p_data.date) > 604800000 ) {
        Meteor.call('GetPartnerHeader',this.params.partner_id,function(error,data){
          if ( error ) {
            console.log('Partner Header Error:', error);
            return false;
          }
          try {
            var p_data = JSON.parse(data.content);
            p_data.date = (new Date()).getTime();
            if ( typeof p_data.status != "undefined" ) {
              console.log('Invalid partner domain: ', Router.current().params.partner_id);
              return false;
            }
            if ( typeof Storage != "undefined" ) {
              localStorage[Router.current().params.partner_id] = JSON.stringify(p_data);
            }
            SetPageTitle(p_data.name + ' sports', true);
            Session.set('p_data',p_data);
            Session.set('partner_header_code',p_data.results.header.script);
          } catch (e) {
            console.log('Partner Error (parsing)',e.stack);
          }
        });
      }
    }
    this.next();
  }
});

//global callback on what is being requests used in ALL CONTROLLERS THAT HAVE CALLBACKS
function profile_callback(error, data) {
  if ( error ) {
    console.log('Profile Error', error);
    Session.set('IsError', true);
    return false;
  }
  for ( var attr in data ) {
    if ( data.hasOwnProperty(attr) ) {
      //console.log(attr,data[attr]);
      Session.set(attr,data[attr]);
    }
  }
  Session.set('IsData', true);
}

HomePageController = DefaultController.extend({
  onRun: function() {
      //action in here
      console.log('HELLO HOMEPAGE');
      Session.set('IsData', true);
      // Meteor.call('getData', [parameters], profile_callback);
    this.next();
  },
  action: function() {
    if ( Session.get('IsData') ) {
      this.layout('bracket_layout');
      this.render('homePage');
    }
  }
})

leaderBoardController = DefaultController.extend({
  onRun: function() {
    console.log('HELLO LEADERBOARD');
    Session.set('IsData', true);
    // Meteor.call('getData', [parameters], profile_callback);
    this.next();
  },
  action: function() {
    if ( Session.get('IsData') ) {
      this.layout('bracket_layout');
      this.render('bracketLeaderboard');
    }
  }
});

buildBracketController = DefaultController.extend({
  onRun: function() {
    console.log('HELLO BUILD BRACKET');
    Session.set('IsData', true);
      // Meteor.call('getData', [parameters], profile_callback);
    this.next();
  },
  action: function() {
    if ( Session.get('IsData') ) {
      this.layout('bracket_layout');
      this.render('buildBracket');
    }
  }
});

liveBracketController = DefaultController.extend({
  onRun: function() {
    console.log('HELLO LIVE BRACKET');
    Session.set('IsData', true);
      // Meteor.call('getData', [parameters], profile_callback);
    this.next();
  },
  action: function() {
    if ( Session.get('IsData') ) {
      this.layout('bracket_layout');
      this.render('liveBracket');
    }
  }
});

newsArticleController = DefaultController.extend({
  onRun: function() {
    console.log('HELLO NEWS ARTICLE');
    Session.set('IsData', true);
      // Meteor.call('getData', [parameters], profile_callback);
    this.next();
  },
  action: function() {
    if ( Session.get('IsData') ) {
      this.layout('bracket_layout');
      this.render('news_article');
    }
  }
});

teamPageController = DefaultController.extend({
  onRun: function() {
    console.log('HELLO TEAMPAGE');
    Session.set('IsData', true);
      // Meteor.call('getData', [parameters], profile_callback);
    this.next();
  },
  action: function() {
    if ( Session.get('IsData') ) {
      this.layout('bracket_layout');
      this.render('teamPage');
    }
  }
});
