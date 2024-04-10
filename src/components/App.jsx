import { useState } from "react";
import Cocktail from "./Cocktail";
import CocktailList from "./CocktailList";
import IngredientList from "./IngredientList";

function App() {
  const [selectedCocktail, setSelectedCocktail] = useState({});
  const [cocktails, setCocktails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function selectCocktail(cocktail) {
    setSelectedCocktail(cocktail);
  }

  return (
    <div className="h-full">
      <div className="bg-green-200 h-[8.3333335%] flex items-center">
        <p className="px-10 text-2xl">
          Cocktail Maker
        </p>
      </div>

      <div className="bg-blue-200 md:h-1/6 hidden md:block">
        <h1 className="xl:text-4xl md:text-xl font-semibold p-10">
          <div>Sip, Stir, Shake:&nbsp;</div>
          <div className="font-normal">Elevate Your Mixology Game with Every Cocktail Tale!</div>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:h-4/6 h-5/6">

        <CocktailList
          cocktails={cocktails}
          ingredients={ingredients}
          loading={loading}
          error={error}
          selectCocktail={selectCocktail}
          selectedCocktail={selectedCocktail}
          setSelectedCocktail={setSelectedCocktail}
        />
        
        <IngredientList
          setCocktails={setCocktails}
          setIngredients={setIngredients}
          ingredients={ingredients}
          setLoading={setLoading}
          setError={setError}
          setSelectedCocktail={setSelectedCocktail}
        />
      </div>

      <div className="bg-green-200 h-[8.3333335%] flex items-center">
        <p className="px-10 text-2xl">
          Cocktail Maker
        </p>
      </div>
    </div>
  );
}

export default App;
