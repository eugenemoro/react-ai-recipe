export default function IngredientsList(props) {
  const ingredientsElements = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section className="ingredients-available">
      <h2>Igredients on hand:</h2>
      <ul>{ingredientsElements}</ul>
      {props.ingredients.length >= 4 && (
        <div className="get-recipe">
          <div className="get-recipe-text" ref={props.recipeSection}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <div className="get-recipe-btn">
            <button onClick={props.getRecipeFromAI}>Get a recipe</button>
          </div>
        </div>
      )}
    </section>
  );
}
