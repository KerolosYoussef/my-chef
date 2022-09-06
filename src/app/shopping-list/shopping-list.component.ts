import { Component, OnInit } from '@angular/core';
import { IIngredient, Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : IIngredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatos", 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  AddItemToList(ingredient: IIngredient){
    this.ingredients.push(ingredient);
  }
}
