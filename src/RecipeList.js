import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  if (!recipes.length) {
    return <div>No recipes found. Try another search!</div>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
