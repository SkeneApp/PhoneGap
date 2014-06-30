/**
 * Conversations collection
 */

var Backbone = require('backbone');

var Conversation = require('../models/conversation');

module.exports = Backbone.Collection.extend({
  model : Conversation,
  url : 'http://whispr.outi.me/api/get_latest'
});
