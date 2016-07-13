var $ = require('jquery');
var React = require('react');

var NavBars = require('./nav-bars.jsx');

// Top level component for all apps
var RecipeList = React.createClass({

  render: function(){

    return (
      <div className="row user-background">

        <NavBars />

        <div className="scrapbook-lists col-xs-offset-1 col-xs-9">
          <div className="scrapbook-row">
            <span className="title">My Recipes</span>
            <span className="divider-line my-recipes-line"/>
            <a href="#"><span className="view-all">View all</span></a>
          </div>


          <div className="scrapbook-row">
            <span className="title">Public Recipes</span>
            <span className="divider-line public-recipes-line"/>
            <a href="#"><span className="view-all">View all</span></a>
          </div>

          <div className="scrapbook-row">
            <span className="title">Popular Recipes</span>
            <span className="divider-line popular-recipes-line"/>
            <a href="#"><span className="view-all">View all</span></a>
          </div>

          <div className="scrapbook-row">
            <span className="title">My Favorite Recipes</span>
            <span className="divider-line favorite-recipes-line"/>
            <a href="#"><span className="view-all">View all</span></a>
          </div>

          <div className="scrapbook-row">
            <span className="title">My Pantry</span>
            <span className="divider-line my-pantry-line"/>
            <a href="#"><span className="view-all">View all</span></a>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = RecipeList;
