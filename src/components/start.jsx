import { useEffect, useState } from "react";
import React, { Component } from "react";
import Recipe from "./Recipe";

const Start = () => {
  const APP_ID = "dd178034";
  const APP_KEY = "b7d210ed13ee83a273b058977d05c944";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((r) => (
        <Recipe
          key={r.recipe.label}
          title={r.recipe.label}
          cal={r.recipe.calories}
          image={r.recipe.image}
          ingredients={r.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default Start;
