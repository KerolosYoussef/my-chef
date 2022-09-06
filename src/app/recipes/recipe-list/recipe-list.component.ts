import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IRecipe, Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : IRecipe[] = [
    new Recipe("Test Recipe","This is a test recipe", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg"),
    new Recipe("Test Recipe2","This is a test recipe2", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg"),
  ];
  @Output() recipeToDisplay = new EventEmitter<IRecipe>();

  constructor() { }

  ngOnInit(): void {
  }

  displayRecipeData(recipe : IRecipe){
    this.recipeToDisplay.emit(recipe);
  }
}
