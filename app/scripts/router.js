var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AdjustRecipe = require('./components/adjust-recipe.jsx');
var SignUp = require('./components/signup.jsx');
var LogIn = require('./components/login.jsx');
var NavBars = require('./components/nav-bars.jsx');
var RecipeList = require('./components/recipe-list.jsx');
// var User = require('./models/user').User;


var Router = Backbone.Router.extend({
  routes: {
    '': 'signup',
    'signup': 'signup',
    'login': 'login',
    'recipelist': 'recipeList'
  },
  // initialize: function(){
  //
  //   ReactDOM.render(
  //     React.createElement(NavBars),
  //     document.getElementById('app')
  //   );
  //
  //   ReactDOM.render(
  //     React.createElement(AdjustRecipe),
  //     document.getElementById('app')
  //   );
  //
  // },
  signup: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(SignUp, {router: self}),
      document.getElementById('app')
    );
  },
  login: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(LogIn, {router: self}),
      document.getElementById('app')
    );
  },
  recipeList: function(){
    var self = this;
    ReactDOM.render(
      React.createElement(RecipeList, {router: self}),
      document.getElementById('app')
    )
  }
});


var router = new Router();

module.exports = router;
