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
var FrontPageView = require('./views/frontpage'),
    ExamplePageView = require('./views/examplepage'),
    ExampleModel = require('./models/example');


module.exports = Backbone.Router.extend({

  routes : {
    '/example' : 'goToExample',
    '*'        : 'frontPage'
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
   * Front page controller
   */
  frontPage : function () {
    if(this.view) this.view.remove();

    this.view = new FrontPageView();

    this.$app.html(this.view.render().el);
  }
});
