import PropTypes from "prop-types";

function CocktailList({ cocktails, loading, error }) {
  console.log("Error: ", error);

  return (
    <div>
      <h1 className="mt-5 font-bold">Cocktails:</h1>
      <div>
        {error ? (
          <p>
            There was an error fetching cocktails, please
            try again!
          </p>
        ) : loading ? (
          <p>Loading...</p>
        ) : cocktails.length === 0 ? (
          <p>
            There is no cocktails with these ingredients,
            please try other ones!
          </p>
        ) : (
          cocktails.map((c) => <p key={c.name}>{c.name}</p>)
        )}
      </div>
    </div>
  );
}

CocktailList.propTypes = {
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({
      ingredients: PropTypes.array,
      instructions: PropTypes.string,
      name: PropTypes.string,
      map: PropTypes.func,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default CocktailList;
