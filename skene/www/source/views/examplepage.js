/**
 * Example page view
 */

var _ = require('underscore'),
    Backbone = require('backbone');

var templates = require('../dist/templates');

module.exports = Backbone.View.extend({

  template : templates.views_conversation,

  initialize : function (options) {
    options = options || {};

    this.model = options.model;
  },

  render : function () {
    this.$el.html(_.template(this.template,
                             this.model.toJSON(),
                             { variable : 'data' }));
    return this;
  }
});
