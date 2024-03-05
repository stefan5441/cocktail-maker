import PropTypes from "prop-types";

function CocktailList({ cocktails }) {
  return (
    <div>
      <h1 className="mt-5 font-bold">Cocktails:</h1>
      <div>
        {cocktails.map((c) => (
          <p key={c.name}>{c.name}</p>
        ))}
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
};

export default CocktailList;
