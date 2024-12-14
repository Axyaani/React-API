import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchRecipes = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipes(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSearch = () => {
    fetchRecipes(searchQuery);
  };

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
