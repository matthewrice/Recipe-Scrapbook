var React = require('react');
var User = require('../models/user');
var $ = require('jquery');


var SignUp = React.createClass({
  handleNewUser: function(e){
    e.preventDefault();
    var email = $('#email-signup').val();
    var username = $('#username-signup').val();
    var password = $('#password-signup').val();
    var router = this.props.router;

    var newUser = new User();
    newUser.set({'email': email, 'username': username, 'password': password});
    console.log('New user created!!!: ', newUser);

    newUser.save().done(function(){
      router.navigate('login', {trigger: true});
    });


    // router.navigate('recipeList', {trigger: true})

  },
  render: function(){
    return (
      <div className="row signup-login-background">

        <div className="col-xs-offset-5 col-xs-2 user-account-header">
          <h1 className="user-account-title">batch maker</h1>
          <h2 className="website-description">an intuitive recipe scrapbook</h2>
        </div>

        <div className="col-xs-offset-3 col-xs-6">
          <div className="signup">
            <form onSubmit={this.handleNewUser} id="signup">
              <div className="signup-title">sign up for free account</div>
              <label htmlFor="email" className="email-signup-label">Email :</label>
              <input name="email" id="email-signup" className="email-signup" type="email" placeholder="your email" /><br/>
              <label htmlFor="username" className="username-signup-label">UserName :</label>
              <input name="username" id="username-signup" type="text" placeholder="create username" /><br/>
              <label htmlFor="password" className="password-signup-label">Password :</label>
              <input name="password" id="password-signup" type="password" placeholder="create password" /><br/>
              <input type="submit" className="submit-signup" value="submit" /><br/>
              <a href="#login"><div className="col-offset-xs-3 existing-accountholder">Already have an account&#x0003F;  &#x02008;Login here.</div></a>
            </form>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = SignUp;
