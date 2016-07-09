var Backbone = require('backbone');

var RecipeModel = Backbone.Model.extend({
  urlRoot: "https://tiny-parse-server.herokuapp.com/classes/Rice"
});


module.exports = RecipeModel;
