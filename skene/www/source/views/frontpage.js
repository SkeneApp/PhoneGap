/**
 * Front page view
 */

var _ = require('underscore'),
    Backbone = require('backbone');

var templates = require('../dist/templates');

module.exports = Backbone.View.extend({

  template : templates.views_map,

  initialize : function (options) {
    options = options || {};
  },

  render : function () {
    this.$el.html(_.template(this.template,
                             {},
                             { variable : 'data' }));
    return this;
  }

});
