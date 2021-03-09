import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "pizza",
      "some",
      "https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg",
      [new Ingredient("Meat", 1), new Ingredient("french fries", 1)]
    ),
    new Recipe(
      "another pizza",
      "some",
      "https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    //using slice so that we return a copy of recipes array
    //instead of the reference to out recipes array
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
