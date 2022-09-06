import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IIngredient, Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("shoppingListNameInput", {static: true}) shoppingListNameInput;
  @ViewChild("shoppingListAmountInput" , {static: true}) shoppingListAmountInput;
  @Output() onItemAdd = new EventEmitter<IIngredient>();
  constructor() { }

  ngOnInit(): void {
  }

  AddItem(){
    if(this.shoppingListNameInput.nativeElement.value === "" || this.shoppingListAmountInput.nativeElement.value === ""){
      alert("Please enter valid values");
    } else {
      this.onItemAdd.emit(new Ingredient(this.shoppingListNameInput.nativeElement.value,this.shoppingListAmountInput.nativeElement.value));
    }
  }
}
