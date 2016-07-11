var $ = require('jquery');
var Backbone = require('backbone');
require('./router');
// var User = require('./models/user-account').User;

// var $ = window.jQuery = require('jquery');

/*
 * Provided needed headers for parse server
 */


$(function(){
  Backbone.history.start();
});
