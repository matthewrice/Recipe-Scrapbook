var Backbone = require('backbone');


var RecipeModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: "https://tiny-parse-server.herokuapp.com/classes/RiceRecipes"
});


var RecipeCollection = Backbone.Collection.extend({
  model: RecipeModel,
  url: "https://tiny-parse-server.herokuapp.com/classes/RiceRecipes",
  parse: function(serverResponse){
    return serverResponse.results;
  }
});


module.exports = {
  // 'IngredientCollection': IngredientCollection,
  'RecipeModel': RecipeModel,
  'RecipeCollection': RecipeCollection
};
