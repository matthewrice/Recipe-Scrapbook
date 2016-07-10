var Backbone = require('backbone');

var User = Backbone.Model.extend({
  urlRoot: 'https://tiny-parse-server.herokuapp.com/RiceUser'
},{
  login: function(username, password, email){
    var loggedInUser = new User();
    var queryString = 'username=' + username + 'password=' + password + 'email=' + email;
    loggedInUser.urlRoot = 'https://tiny-parse-server.herokuapp.com/login?' + queryString;
    return loggedInUser.fetch();
  }
});

module.exports = User;
