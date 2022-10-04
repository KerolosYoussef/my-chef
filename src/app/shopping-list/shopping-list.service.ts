import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IIngredient, Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<IIngredient[]>();
  selectedIngredient = new Subject<number>();

  private ingredients : IIngredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatos", 10)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index){
    return this.getIngredients()[index];
  }

  /* First we check if the ingredient already exists
     * If it's exists then we will add the quantity of the new ingreident on the current one
     * If it doesn't exists then we will add the new ingredient with its quantity
     * Last thing we will pass the ingredients to the subject so we can subscribe anywhere else
  */
  addIngredient(ingredient: Ingredient){

    const index = this.ingredients.findIndex((ingredientEl) => ingredientEl.name.toLowerCase() === ingredient.name.toLowerCase());
    if(index === -1)
      this.ingredients.push(ingredient);
    else{
      let amount = +this.ingredients[index].amount + +(ingredient.amount);
      this.ingredients[index].amount = amount;
    }
    this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(ingredient: IIngredient, index: number){  
    this.ingredients[index].name = ingredient.name;
    this.ingredients[index].amount = ingredient.amount;
    this.ingredientsChanged.next(this.getIngredients());    
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.getIngredients());
  }

}
