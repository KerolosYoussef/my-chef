import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IIngredient, Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild("f") shoppingListForm : NgForm;
  onSelectedIngredient : Subscription;
  editMode = false;
  editIndex : number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.onSelectedIngredient = this.shoppingListService.selectedIngredient.subscribe({
      next: (index) => {
        this.editMode = true;
        this.editIndex = index;
        const ingredient = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          "name": ingredient.name,
          "amount": ingredient.amount
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.onSelectedIngredient.unsubscribe();
  }


  OnEditItem(){
    const value = this.shoppingListForm.value;
    //console.log(value);
    if(value.name === "" || value.amount === ""){
      alert("Please enter valid values");
    } else {
      const ingredient = new Ingredient(value.name, value.amount);
      if(this.editMode){
        this.shoppingListService.updateIngredient(ingredient,this.editIndex);
      } else {
        this.shoppingListService.addIngredient(ingredient);
      }
      this.onClear();
    }
  }

  onDeleteItem(){
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.onClear();
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
