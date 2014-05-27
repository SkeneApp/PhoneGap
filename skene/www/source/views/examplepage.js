/**
 * Example page view
 */

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('Backbone');

module.exports = Backbone.View.extend({

  template : '',

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
