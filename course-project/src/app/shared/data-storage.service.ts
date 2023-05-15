import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  firebaseUrl =
    'https://angular-course-8c9bb-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.firebaseUrl, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.firebaseUrl).subscribe((response) => {
      this.recipeService.setRecipes(response);
    });
  }
}
