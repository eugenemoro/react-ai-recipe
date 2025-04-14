import { useState } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsList from './IngredientsList';
import { getRecipeFromChefClaude } from '../ai';

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');

  function ingredientSubmit(formData) {
    const newIngredient = formData.get('ingredient');
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function getRecipeFromAI() {
    const recipe = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipe);
  }

  return (
    <main>
      <form className="add-form" action={ingredientSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          required
        />
        <button type="submit"> + Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipeFromAI={getRecipeFromAI}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
