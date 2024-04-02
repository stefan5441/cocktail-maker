import PropTypes from "prop-types";
import { useState } from "react";

function IngredientList({
  setCocktails,
  setIngredients,
  ingredients,
  setLoading,
  setError,
}) {
  const [search, setSearch] = useState("");

  async function fetchData(updatedIngredients) {
    try {
      if (updatedIngredients.length === 0){
        setCocktails([]);
        return;
      }
      setLoading(true);
      const ingredientString = [...updatedIngredients].join(",");
      const res = await fetch(
        `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredientString}`,
        {
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setCocktails(data);
      setError(false);
    } catch (err) {
      console.error("Error occurred while fetching data:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }


  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const trimmedSearch = search.trim();
      if (!ingredients.includes(trimmedSearch)) {
        setIngredients([...ingredients, trimmedSearch]);
      }
      setSearch("");
      fetchData([...ingredients, trimmedSearch]);
    }
  }
    
  function removeIngredient(ingredient) {
    setIngredients((prevIngredients) => {
      const updatedIngredients = prevIngredients.filter(
        (ing) => ing !== ingredient
      );
      fetchData(updatedIngredients);
      return updatedIngredients;
    });
  }

  return (
    <div>
      <input
        className="shadow-xl caret-slate-900 px-2 py-1 text-md shadow-slate-950/30 w-80 focus:outline-none focus:border focus:border-slate-950/20"
        type="text"
        id="search"
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Add ingredient..."
      />
      <div className="mt-6">
        {ingredients.map((ing) => (
          <p key={ing} className="ml-2 my-1 flex flex-row justify-between">
            {ing} <button onClick={() => removeIngredient(ing)}> &#10006;</button>
          </p>
        ))}
      </div>
    </div>
  );
}

IngredientList.propTypes = {
  setCocktails: PropTypes.func.isRequired,
  setIngredients: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default IngredientList;
