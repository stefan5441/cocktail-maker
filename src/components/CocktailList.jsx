import PropTypes from "prop-types";

function CocktailList({
  cocktails,
  ingredients,
  loading,
  error,
}) {
  return (
    <div>
      <h1>Cocktails:</h1>
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
          cocktails.map((c) => <p key={c.name}>{c.name}</p>)
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
};

export default CocktailList;
