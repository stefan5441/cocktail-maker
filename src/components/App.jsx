import { useState } from "react";
import CocktailList from "./CocktailList";
import IngredientList from "./IngredientList";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="bg-slate-50">
      <div className="h-12 bg-slate-400 flex items-center">
        <p className="container mx-auto font-semibold text-slate-50">
          Cocktail Maker
        </p>
      </div>

      <div className="h-24 flex justify-center items-center mt-10">
        <h1 className="text-2xl text-center font-thin mt-10">
          <span className="text-slate-600 font-normal">
            Sip, Stir, Shake:&nbsp;
          </span>
          Elevate Your Mixology Game&nbsp;
          <br />
          with Every Cocktail Tale!
        </h1>
      </div>

      {/* <Cocktail /> */}

      <div className="container mx-auto flex justify-between mt-24">
        <IngredientList
          setCocktails={setCocktails}
          setIngredients={setIngredients}
          ingredients={ingredients}
          setLoading={setLoading}
          setError={setError}
        />

        <CocktailList
          cocktails={cocktails}
          ingredients={ingredients}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
