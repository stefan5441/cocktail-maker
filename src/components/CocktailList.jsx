import PropTypes from "prop-types";
import Cocktail from "./Cocktail";
import { useState } from "react";

function CocktailList({
  cocktails,
  ingredients,
  loading,
  error,
  selectCocktail,
  selectedCocktail,
  setSelectedCocktail
}) {
  return (
    <div className="w-2/3 bg-yellow-200 p-10 flex flex-col">
      <h1 className="text-3xl font-medium">Cocktails</h1>

      {Object.keys(selectedCocktail).length !== 0 ? (
        <Cocktail selectedCocktail={selectedCocktail} setSelectedCocktail={setSelectedCocktail} />
      ) : (
        <div className="mt-8">
          {error ? (
            <p className="text-lg">
              There was an error fetching cocktails, please try again!
            </p>
          ) : loading ? (
            <p className="text-lg">Loading...</p>
          ) : cocktails.length === 0 && ingredients.length !== 0 ? (
            <p>
              There are no cocktails with these ingredients, please try other
              ones!
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {cocktails.map((c) => (
                <button
                  className="bg-orange-200 text-lg hover:bg-blue-200"
                  key={c.name}
                  onClick={() => selectCocktail(c)}
                >
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({
      ingredients: PropTypes.arrayOf(PropTypes.string),
      instructions: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  selectCocktail: PropTypes.func.isRequired,
  setSelectedCocktail: PropTypes.func.isRequired,
  selectedCocktail: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default CocktailList;
