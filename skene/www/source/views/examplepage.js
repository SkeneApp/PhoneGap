/**
 * Example page view
 */

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

var templates = require('../../builds/templates');

module.exports = Backbone.View.extend({

  template : templates.examplepage,

  initialize : function (options) {
    options = options || {};

    this.model = options.model;
  },

  render : function () {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  }
});
