var React = require('react');
var RecipeModel = require('../models/recipe');
// var Fraction = require('fractional').Fraction


// RecipeForm creates and renders the form that allows the user to adjust serving size.
var RecipeForm = React.createClass({
  getInitialState: function(){
    return {
      servingInput: ''
    }
  },
  handleServingInput: function(event){
    this.setState({'servingInput': event.target.value})
  },
  handleSubmit: function(event){
    event.preventDefault();
    this.props.adjustRecipe(this.state.servingInput);
  },
  render: function(){

    return (
      <div className="row">
        <div className="col-md-offset-3 col-md-6 recipe-form">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="recipeForm-topRow">
                <span>Makes</span>
                <input onChange={this.handleServingInput}type="text" placeholder="16" className="serving-input" />
                <span>servings</span>
                <label className="radio-inline radio-US">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                </label>
                <label className="radio-inline radio-Metric">
                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                </label>
                <button type="submit" className="btn btn-default adjust-recipe-button">Adjust Recipe</button>
                <span>&#40;<a href="#">Help</a>&#41;</span>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="recipeForm-bottomRow">
              <div className="border-box">
                <i className="fa fa-check check-icon" aria-hidden="true"></i>
                <span className="bottomRow-content">Ingredients list now reflect the new serving size.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


// RecipesList renders the list of ingredients that the Adjust Recipe App adjusts.
var RecipesList = React.createClass({

  render: function(){
    var ingredients = this.props.recipe.get('ingredients');
    var ratio = this.props.ratio;
    // var f = new Fraction(.003)
    // console.log(f.numerator + '/' + f.denominator);

    var ingredientsList = ingredients.map(function(ingredient){
      return (
        <li key={ingredient.name} className="ingredient">
          <label className="checkbox-inline">
            <input type="checkbox" id="inlineCheckbox" value="option" />
            {(ingredient.amount * ratio).toFixed(2)} {ingredient.unit} {ingredient.name}
          </label>
        </li>
      );
    });

    return (
      <div className="row">
        <div className="col-md-offset-4 col-md-6 ingredients-list-column">
          <ul className="ingredients-list">
            {ingredientsList}
          </ul>
        </div>
      </div>
    );
  }
});


// AdjustRecipe is the top level component for the Adjust Recipe App.
var AdjustRecipe = React.createClass({
  getInitialState: function(){
    return {
      ratio: 1
    }
  },
  componentWillMount: function(){
    var recipe = new RecipeModel();

    recipe.set({
      'title': 'Mixed Berry Scones',
      'description': 'Whether you leave them plain, eat them with jam, or glaze them, they are delicious!',
      'servings': 16,
      'ingredients': [
        {'name': 'flour', 'unit': 'cup', 'amount': 3},
        {'name': 'sugar', 'unit': 'cup', 'amount': 1/3},
        {'name': 'baking powder', 'unit': 'tsp', 'amount': 3},
        {'name': 'salt', 'unit': 'tsp', 'amount': 1/4},
        {'name': 'cold butter, cut into pieces', 'unit': 'cup', 'amount': 2},
        {'name': 'heavy cream', 'unit': 'cup', 'amount': 1},
        {'name': 'milk', 'unit': 'cup', 'amount': 1/4},
        {'name': 'egg', 'unit': 'whole', 'amount': 1},
        {'name': 'vanilla', 'unit': 'tsp', 'amount': 1},
        {'name': 'strawberry preserves', 'unit': 'tbsp', 'amount': 2},
        {'name': 'chopped strawberries', 'unit': 'cup', 'amount': 1/2},
        {'name': 'blueberries', 'unit': 'cup', 'amount': 1/2}
      ]
    });
    recipe.on('change', this.update);
    this.recipe = recipe;
  },
  adjustRecipe: function(servings){
    console.warn('adjusting recipe');
    console.log(servings);
    var ratio = servings / this.recipe.get('servings')
    this.setState({'ratio': ratio})
  },
  render: function(){

    return (
      <div>
        {/*<nav className="col-xs-12 login-navbar">
          <span className="col-xs-2 keys-to-the-kingdom">The kitchen is yours, chef!</span>
          <span className="col-xs-offset-3 col-xs-2 header-title">batch maker</span>
        </nav>

        <div className="col-md-1 hidden-sm side-bar"></div>*/}

        <RecipeForm adjustRecipe={this.adjustRecipe}/>
        <RecipesList recipe={this.recipe} ratio={this.state.ratio}/>
      </div>
    );
  }
});

module.exports = AdjustRecipe;
