/**
 * Example model
 */

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults : {
    name : 'John',
    text : 'Nice to meet you'
  }
});
