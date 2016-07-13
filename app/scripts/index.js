var $ = window.jQuery = require('jquery');
var Backbone = require('backbone');
require('./router');

/*
 * Needed headers for parse server
 */

 $.ajaxSetup({
   beforeSend: function(xhr){
     xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
     xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
   }
 });

$(function(){
  Backbone.history.start();
});
