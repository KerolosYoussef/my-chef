import { Component, OnInit, ViewChild } from '@angular/core';
import { IRecipe } from '../models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe : IRecipe;
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeDisplay(recipeData){
    this.recipe = recipeData;
  }
}
