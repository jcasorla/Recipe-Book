import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "pizza",
      "some",
      "https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg"
    ),
    new Recipe(
      "another pizza",
      "some",
      "https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg"
    ),
  ];

  getRecipes() {
    //using slice so that we return a copy of recipes array
    //instead of the reference to out recipes array
    return this.recipes.slice();
  }
}
