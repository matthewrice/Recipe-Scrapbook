var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var Parse = require('parse');

// Top level component for all apps
var BatchMaker = React.createClass({

  // $.ajaxSetup({
  //   beforeSend: function(xhr){
  //     xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
  //     xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
  //   }
  // });
  //
  // $('#signup').on('submit', function(e){
  //   e.preventDefault();
  //   var email = $('#email-signup').val();
  //   var username = $('#username-signup').val();
  //   var password = $('#password-signup').val();
  //
  //   var newUser = new User();
  //   newUser.set({'email': email, 'username': username, 'password': password});
  //
  //   console.log(newUser);
  //
  //   newUser.save();
  // });
  //
  // $('#login').on('submit', function(e){
  //   e.preventDefault();
  //   var username = $('#username-login').val();
  //   var password = $('#password-login').val();
  //
  //   var loggedInUser = User.login(username, password);
  //
  //   loggedInUser.done(function(response){
  //     console.log(response);
  //   }).failure(function(err){
  //     console.log(err);
  //   });
  // });
  // 
  render: function(){

    return (

    );
  }

});

module.exports = BatchMaker;
