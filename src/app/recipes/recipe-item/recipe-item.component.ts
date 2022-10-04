import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe : IRecipe;

  constructor(private recipeService: RecipesService) {
   }

  ngOnInit(): void {
  }
}
