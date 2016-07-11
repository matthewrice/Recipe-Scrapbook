var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
// var Parse = require('parse');

var AdjustRecipe = require('./components/adjust-recipe.jsx');
var UserAccount = require('./components/user-account.jsx');
var NavBars = require('./components/nav-bars.jsx');
// var User = require('./models/user').User;


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'title/:id/': 'adjustRecipe'
  },
  initialize: function(){


    ReactDOM.render(
      React.createElement(UserAccount),
      document.getElementById('app')
    );

    // ReactDOM.render(
    //   React.createElement(NavBars),
    //   document.getElementById('app')
    // );

    // ReactDOM.render(
    //   React.createElement(AdjustRecipe),
    //   document.getElementById('app')
    // );

  },
  index: function(){

  }
});


var router = new Router();

module.exports = router;
