import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSearch(e) {
    e.preventDefault;
    setSearch(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      !ingredients.includes(search.trim()) &&
        setIngredients([...ingredients, search.trim()]);
      setSearch("");
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
    </>
  );
}

export default App;
