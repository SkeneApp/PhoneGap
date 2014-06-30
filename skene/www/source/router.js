/**
 * Router
 */


/**
 * Load libraries
 */
var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');


/**
 * Load modules
 */
var FeedPageView = require('./views/feedpage'),
    FrontPageView = require('./views/frontpage'),
    ExamplePageView = require('./views/examplepage'),

    ExampleModel = require('./models/example'),

    Conversations = require('./collections/conversations');


module.exports = Backbone.Router.extend({

  routes : {
    '/example' : 'goToExample',
    '/*' : 'feed'
  },

  initialize : function () {
    this.view = null;
    this.$app = $('#app');
  },

  /**
   * Go to example page controller
   */
  goToExample : function () {
    if(this.view) this.view.remove();

    this.view = new ExamplePageView({
      model : new ExampleModel()
    });

    this.$app.html(this.view.render().el);
  },

  /**
   * Feed page
   */
  feed : function () {
    console.log('go feed');
    if(this.view) this.view.remove();

    var conversations = new Conversations();
    // Load conversations, add them to feed page view and put to the page
    conversations.fetch({
      data : {
        json : 1,
        count : 10
      },
      success : (function () {

        this.view = new FeedPageView({
          collection : conversations
        });

        this.$app.html(this.view.render().el);
      }).bind(this)
    });
  }
});
