import { useState } from "react";
import CocktailList from "./CocktailList";
import IngredientList from "./IngredientList";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <IngredientList
        setCocktails={setCocktails}
        setLoading={setLoading}
        setError={setError}
      />
      <CocktailList
        cocktails={cocktails}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default App;
