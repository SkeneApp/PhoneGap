/**
 * Example model
 */

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('Backbone');

module.exports = Backbone.Model.extend({
  defaults : {
    name : 'John',
    text : 'Nice to meet you'
  }
});
