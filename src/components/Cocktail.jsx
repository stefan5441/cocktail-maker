import PropTypes from "prop-types";

function Cocktail({ selectedCocktail, setSelectedCocktail }) {
  
  return (<>
      {
        selectedCocktail && 
        <div className="flex mt-8 justify-between h-full">
          <div className="flex flex-col gap-8 text-2xl">
            <p className="capitalize font-medium mb-2">{selectedCocktail.name}</p>
            <div>
              {selectedCocktail.ingredients && selectedCocktail.ingredients.map(ing => <p key={ing}>{ing}</p>)}
            </div>
            <p className="w-4/5">{selectedCocktail.instructions}</p>
          </div>
          <button className="self-start bg-orange-200 px-2 hover:bg-blue-300" onClick={() => setSelectedCocktail({})}>&#10006;</button>
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