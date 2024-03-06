import { useState } from "react";
import PropTypes from "prop-types";

function IngredientList({
  setCocktails,
  setLoading,
  setError,
}) {
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      !ingredients.includes(search.trim()) &&
        setIngredients([...ingredients, search.trim()]);
      setSearch("");

      const fetchData = async () => {
        try {
          setLoading(true);
          const ingredientString = [
            ...ingredients,
            search.trim(),
          ].join(",");
          const res = await fetch(
            `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredientString}`,
            {
              headers: {
                "X-Api-Key": import.meta.env.VITE_API_KEY,
              },
            }
          );
          if (!res.ok) {
            throw new Error(
              `HTTP error! status: ${res.status}`
            );
          }
          const data = await res.json();
          setCocktails(data);
          setError(false);
        } catch (err) {
          console.log("Got inside catch");
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }

  return (
    <>
      <label htmlFor="search">Add ingredient</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="bg-lime-400"
      ></input>
      <h1 className="mt-5 font-bold">Ingredients:</h1>
      <div>
        {ingredients.map((ing) => (
          <p key={ing}>{ing}</p>
        ))}
      </div>
    </>
  );
}

IngredientList.propTypes = {
  setCocktails: PropTypes.func,
  setLoading: PropTypes.func,
  setError: PropTypes.func,
};

export default IngredientList;
