/**
 * Conversation view
 */

var Backbone = require('backbone'),
    _ = require('underscore');

var templates = require('../dist/templates');

module.exports = Backbone.View.extend({

  template : templates.views.conversation,

  render : function () {
    console.log(this.model);
    this.$el.html(_.template(this.template,
                             this.model.toJSON(),
                             { variable : 'data' }));
    return this;
  }
});
