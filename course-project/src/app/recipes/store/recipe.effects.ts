import { map, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as RecipeActions from './recipe.actions';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';

const firebaseUrl =
  'https://angular-course-8c9bb-default-rtdb.firebaseio.com/recipes.json';

@Injectable()
export class RecipeEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.FETCH_RECIPES),
      switchMap(() => this.http.get<Recipe[]>(firebaseUrl)),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      map((recipes) => new RecipeActions.SetRecipes(recipes))
    )
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
