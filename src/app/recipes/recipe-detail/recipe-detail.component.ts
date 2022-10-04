import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/models/recipe';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : IRecipe; 

  constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(response => {
      this.recipe = this.recipeService.getRecipeById(+response.id);
    })
  }

  onAddToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']);
  }
}
