var React = require('react');

var UserAccount = React.createClass({
  render: function(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-5 col-xs-2 user-account-header">
            <h1 className="user-account-title">batch maker</h1>
            <h2 className="website-description">an intuitive recipe scrapbook</h2>
          </div>
          <div className="col-xs-offset-3 col-xs-6">
            <div className="signup">
              <form id="signup">
                <div className="signup-title">sign up for free account</div>
                <label htmlFor="email" className="email-signup-label">Email :</label>
                <input name="email" id="email-signup" className="email-signup" type="email" placeholder="your email" /><br/>
                <label htmlFor="username" className="username-signup-label">UserName :</label>
                <input name="username" id="username-signup" type="text" placeholder="create username" /><br/>
                <label htmlFor="password" className="password-signup-label">Password :</label>
                <input name="password" id="password-signup" type="password" placeholder="create password" /><br/>
                <input type="submit" className="submit-signup" value="submit" />
              </form>
            </div>

            <div className="login">
              <form id="login">
                <div className="login-title">log in to access your account</div>
                <label htmlFor="username" className="username-login-label">UserName :</label>
                <input name="username" id="username-login" type="text" placeholder="account username" /><br/>
                <label htmlFor="password" className="password-login-label">Password :</label>
                <input name="password" id="password-login" type="password" placeholder="account password" /><br/>
                <input type="submit" className="submit-login" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UserAccount;
