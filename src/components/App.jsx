import { useState } from "react";
import CocktailList from "./CocktailList";
import IngredientList from "./IngredientList";

function App() {
  const [cocktails, setCocktails] = useState([]);

  return (
    <>
      <IngredientList setCocktails={setCocktails} />
      <CocktailList cocktails={cocktails} />
    </>
  );
}

export default App;
