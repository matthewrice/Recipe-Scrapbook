var React = require('react');

var NavBars = require('./nav-bars.jsx');


var NewRecipe = React.createClass({

  render: function(){

    return (
      <div className="row user-background">
        <NavBars />

        <form className="col-xs-offset-4 col-xs-8 new-recipe-form">

          <span className="basic-info col-md-offset">Basic Info</span><br/>

          <input type="text" name="recipename" className="recipe-name" placeholder="Recipe Name" /><br/>
          <input type="text" name="author" className="author" placeholder="created by..." /><br/>
          <input type="radio" id="public" value="public"/><span id="public">Make it Public</span>
          <input type="radio" id="private" value="private"/><span>Keep it Private</span><br/>

          <input type="submit" className="additional-step-button" value="Add another step" /><br/>
        </form>
      </div>
    );
  }
});

module.exports = NewRecipe;
