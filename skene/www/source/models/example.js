/**
 * Example model
 */

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults : {
    name : 'John',
    text : 'Nice to meet you'
  }
});
