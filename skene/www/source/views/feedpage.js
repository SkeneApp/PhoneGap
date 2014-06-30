/**
 * Feed page view
 */

var Backbone = require('backbone'),
    _ = require('underscore');

var templates = require('../dist/templates');

var ConversationView = require('./conversation');

module.exports = Backbone.View.extend({
  templates : templates.views.feed,

  initialize : function (options) {
    options = options || {};

    this.collection = options.collection;
  },

  render : function () {
    this.$el.html(_.template(this.template,
                             {},
                             { variable : 'data' }));

    return this;
  },

  renderConversations : function () {
    this.$el.find('#conversations').empty();

    _.each(this.collection, function (el) {
      var conversationView = new ConversationView({
        model : el
      });
      this.$el.find('#conversations').append(conversationView.render().el);
    }, this);

    return this;
  }
});
