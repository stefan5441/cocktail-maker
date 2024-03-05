import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [cocktails, setCocktails] = useState([]);

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
        const data = await res.json();
        setCocktails(data);
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
      <p>
        Ingredients:
        {ingredients}
      </p>
      <div>
        <h1 className="mt-5 font-bold">Cocktails:</h1>
        <p>
          {cocktails.length > 0 &&
            cocktails.map((c) => c.name)}
        </p>
      </div>
    </>
  );
}

export default App;
