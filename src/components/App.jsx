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
    <div className="bg-slate-50 w-full h-full">
      <div className="h-12 bg-slate-400 flex items-center">
        <p className="container mx-auto text-2xl font-light text-slate-50">
          Cocktail Maker
        </p>
      </div>

      <Cocktail 
        selectedCocktail={selectedCocktail}
      /> 

      <div className="h-24 flex justify-center items-center mt-10">
        <h1 className="text-4xl text-center font-thin mt-10">
          <span className="text-slate-600 font-normal">
            Sip, Stir, Shake:&nbsp;
          </span>
          Elevate Your Mixology Game&nbsp;
          <br />
          with Every Cocktail Tale!
        </h1>
      </div>

      <div className="container text-xl mx-auto mt-24">
        <CocktailList
          cocktails={cocktails}
          ingredients={ingredients}
          loading={loading}
          error={error}
          selectCocktail={selectCocktail}
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

    </div>
  );
}

export default App;
