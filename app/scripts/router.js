var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var AdjustRecipe = require('./components/adjustrecipeapp.jsx');
var SignUpForm = require('./components/user.jsx');
var User = require('./models/user');


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'title/:id/': 'adjustRecipe'
  },
  initialize: function(){

    ReactDOM.render(
      React.createElement(SignUpForm),
      document.getElementById('app')
    );
  },
  index: function(){

  },
  adjustRecipe: function(){
    ReactDOM.render(
      React.createElement(AdjustRecipe),
      document.getElementById('app')
    );
  }

});


var router = new Router();

module.exports = router;
