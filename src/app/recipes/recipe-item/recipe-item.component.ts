import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : IRecipe;
  @Output() onDisplayRecipe = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipe(){
    this.onDisplayRecipe.emit();
  }
}
