var React = require('react');
var User = require('../models/user');
var $ = require('jquery');


var LogIn = React.createClass({
  handleLogIn: function(e){
    console.log('handleLogIn');
    e.preventDefault();

    var username = $('#username-login').val();
    var password = $('#password-login').val();
    var router = this.props.router;
    // this.props.router.user.set('username')
    // this.props.router.user.save()
    // this.props.router.navigate('', {trigger: true});

    User.login(username, password, {
      success: function(user){
        console.log('User logged in!: ', user);
        router.navigate('recipelist', {trigger: true})
      },
      error: function(user, error){
        alert('Either the username or password you entered was incorrect.  Please try again.');
        console.log('Check error message: ', error);
      }
    });
  },
  render: function(){
    return (
      <div className="row signup-login-background">

        <div className="col-xs-offset-5 col-xs-2 user-account-header">
          <h1 className="user-account-title">batch maker</h1>
          <h2 className="website-description">an intuitive recipe scrapbook</h2>
        </div>

        <div className="col-xs-offset-3 col-xs-6">
          <div className="login">
            <form onSubmit={this.handleLogIn} id="login">
              <div className="login-title">log in to access your account</div>
              <label htmlFor="username" className="username-login-label">UserName :</label>
              <input name="username" id="username-login" type="text" placeholder="account username" /><br/>
              <label htmlFor="password" className="password-login-label">Password :</label>
              <input name="password" id="password-login" type="password" placeholder="account password" /><br/>
              <input type="submit" className="submit-login" value="submit" />
              <a href="#signup"><div className="col-offset-xs-3 new-accountholder">Need an account&#x0003F;  &#x02008;Sign up here.</div></a>
            </form>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = LogIn;
