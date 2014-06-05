/**
 * Front page view
 */

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

var templates = require('../../builds/templates');

module.exports = Backbone.View.extend({

  template : templates.frontpage,

  initialize : function (options) {
    options = options || {};
  },

  render : function () {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl());
    return this;
  }

});
