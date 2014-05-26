/**
 * Front page view
 */

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('Backbone');


module.exports = Backbone.View.extend({

  template : '',

  initialize : function (options) {
    options = options || {};
  },

  render : function () {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl());
    return this;
  }

});
