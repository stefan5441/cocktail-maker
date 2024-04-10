import PropTypes from "prop-types";
import { useState } from "react";

function IngredientList({
  setCocktails,
  setIngredients,
  ingredients,
  setLoading,
  setError,
  setSelectedCocktail,
}) {
  const [search, setSearch] = useState("");

  async function fetchData(updatedIngredients) {
    try {
      if (updatedIngredients.length === 0) {
        setCocktails([]);
        setSelectedCocktail({});
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
        },
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
        (ing) => ing !== ingredient,
      );
      fetchData(updatedIngredients);
      return updatedIngredients;
    });
  }

  return (
    <div className="md:w-1/3 bg-orange-200 p-10 w-full h-2/5 md:h-full lg:overflow-hidden overflow-scroll">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-medium">Ingredients</h1>

      <input
        className="md:mt-8 mt-4 ml-1 w-full h-7 pl-2 focus:ring-4 focus:ring-blue-200"
        type="text"
        id="search"
        value={search}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Add ingredient..."
      />

      <div className="mt-4 flex flex-wrap">
        {ingredients.map((ing) => (
          <button onClick={() => removeIngredient(ing)} key={ing}>
            <p
              className="bg-yellow-200 lg:px-2 lg:mx-2 lg:mb-4 text-lg px-1 mx-1 mb-2 hover:bg-blue-200"
            >
              {ing} <span>&#10006;</span>
            </p>
          </button>
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
  setSelectedCocktail: PropTypes.func.isRequired,
};

export default IngredientList;
