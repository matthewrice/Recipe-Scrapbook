var React = require('react');


var NavBars = React.createClass({
  render: function(){

    return (
      <div>

        <div className="row">
          <nav className="col-xs-12 heading-navbar">
            <span className="col-xs-2 keys-to-the-kingdom">The kitchen is yours, chef!</span>
            <span className="col-xs-offset-3 col-xs-2 header-title">batch maker</span>
            <span className="col-xs-offset-4 col-xs-1 icons">
              <a href="#"><i className="fa fa-plus plus-icon"></i></a>
              <a href="#"><i className="fa fa-cog cog-icon"></i></a>
              <a href="#"><i className="fa fa-user user-icon"></i></a>
            </span>
          </nav>
        </div>

        <div className="row">
          <div className="col-xs-1 side-navbar">
            <ul className="sidebar-links">
              <a href="#"><li className="my-recipes">My Recipes</li></a>
              <hr className="line" />
              <a href="#"><li className="public-recipes">Public Recipes</li></a>
              <hr className="line" />
              <a href="#"><li className="popular-recipes">Popular Recipes</li></a>
              <hr className="line" />
              <a href="#"><li className="my-favorite-recipes">My Favorite Recipes</li></a>
              <hr className="line" />
              <a href="#"><li className="my-pantry">My Pantry</li></a>

            </ul>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = NavBars;
