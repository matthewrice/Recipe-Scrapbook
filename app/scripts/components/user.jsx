var React = require('react');

var SignUpForm = React.createClass({
  render: function(){
    return (
      <div className="row">
        <nav className="col-xs-12 login-navbar">
          <span className="col-xs-2 keys-to-the-kingdom">The kitchen is yours, chef!</span>
          <span className="col-xs-offset-3 col-xs-2 header-title">batch maker</span>
        </nav>

        <div className="col-xs-1 side-bar"></div>

        <div className="col-xs-offset-2 col-xs-6 signup">
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

        <div className="col-xs-offset-2 col-xs-6 login">
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
    );
  }
});

module.exports = SignUpForm;
