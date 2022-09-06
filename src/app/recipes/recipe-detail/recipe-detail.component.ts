import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeEl : IRecipe; 

  constructor() { }

  ngOnInit(): void {
  }

}
