import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIngredient, Ingredient } from '../models/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : IIngredient[] = [];
  private isChangeSub : Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.isChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IIngredient[]) => {
        console.log(ingredients);
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(): void {
    this.isChangeSub.unsubscribe();
  }

  onSelectItem(index: number){
    this.shoppingListService.selectedIngredient.next(index);
  }
}
