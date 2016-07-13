var React = require('react');


var NewRecipe = React.createClass({

  render: function(){

    return (
      <NavBars />

      <form onSubmit={this.handleNewUser} id="signup">
        <div>
          <span>Basic Info</span>
          <hr />
        </div>

        <input name="email" id="email-signup" className="email-signup" type="email" placeholder="your email" /><br/>
        <input name="username" id="username-signup" type="text" placeholder="create username" /><br/>
        <input name="password" id="password-signup" type="password" placeholder="create password" /><br/>
        <input type="submit" className="submit-signup" value="submit" /><br/>
      </form>
    );
  }
});

module.exports = NewRecipe;
