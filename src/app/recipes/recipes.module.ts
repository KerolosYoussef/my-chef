import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { DirectivesModule } from '../directives/directives.module';
import { RecipesService } from './recipes.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';



@NgModule({
  declarations: [RecipesComponent, RecipeListComponent, RecipeDetailComponent, RecipeItemComponent, RecipeEditComponent, RecipeStartComponent],
  imports: [
    CommonModule,
    DirectivesModule,
    AppRoutingModule
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  providers: [RecipesService]
})
export class RecipesModule { }
