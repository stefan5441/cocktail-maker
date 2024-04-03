import PropTypes from "prop-types";

function CocktailList({
  cocktails,
  ingredients,
  loading,
  error,
  selectCocktail
}) {



  return (
    <div>
      <h1 className="font-semibold text-slate-400">Cocktails</h1>
      <div>
        {error ? (
          <p>
            There was an error fetching cocktails, please
            try again!
          </p>
        ) : loading ? (
          <p>Loading...</p>
        ) : cocktails.length === 0 &&
          ingredients.length !== 0 ? (
          <p>
            There are no cocktails with these ingredients,
            please try other ones!
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {cocktails.map((c) => (
              <button className="block bg-slate-200 hover:bg-slate-400" key={c.name} onClick={() => selectCocktail(c)}>{c.name}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({
      ingredients: PropTypes.arrayOf(PropTypes.string),
      instructions: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  selectCocktail: PropTypes.func.isRequired,
};

export default CocktailList;
