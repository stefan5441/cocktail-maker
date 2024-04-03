import PropTypes from "prop-types";

function Cocktail({ selectedCocktail }) {
  
  return (<>
      {
        selectedCocktail && 
        <div className="hidden">
          <p>{selectedCocktail.name}</p>
          <div>
            {selectedCocktail.ingredients && selectedCocktail.ingredients.map(ing => <p key={ing}>{ing}</p>)}
          </div>
          <p>{selectedCocktail.instructions}</p>
        </div>
      }
    </>);
}

Cocktail.propTypes = {
  selectedCocktail: PropTypes.shape({
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Cocktail;