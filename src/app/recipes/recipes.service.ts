import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { IRecipe, Recipe } from '../models/recipe';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes : IRecipe[] = [
    new Recipe(
      1,
      "Tasty Schnitzel",
      "A super tasty schnitzel - Just awesome",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2015_0723_Wiener_Schnitzel_vom_Schwein_Gaislachalm_S%C3%B6lden.jpg/800px-2015_0723_Wiener_Schnitzel_vom_Schwein_Gaislachalm_S%C3%B6lden.jpg",
      [
        new Ingredient("Meat", 1),
        new Ingredient("French fries",20)
      ]
    ),
    new Recipe(
      2,
      "Big fat burger",
      "Just a big burger",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Big_Mac_hamburger.jpg/640px-Big_Mac_hamburger.jpg",
      [
        new Ingredient("Meat",1),
        new Ingredient("Egg",2),
        new Ingredient("Pickles", 8)
      ]
    ),
  ];
  constructor(private shoppingListService : ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipeById(id: number){
    return this.recipes.find(recipe => recipe.id === id);
  }

  addToShoppingList(ingredients: Ingredient[]){
    ingredients.forEach((ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    })
  }
}
