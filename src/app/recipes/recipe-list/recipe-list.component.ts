import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes : IRecipe[] = [];

  constructor(private recipeService: RecipesService) { 
  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
