import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ]
})
export class RecipesModule { }
