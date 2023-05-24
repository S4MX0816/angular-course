import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducer';

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

  storeRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipeActions.STORE_RECIPES),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([_, recipesState]) =>
          this.http.put(firebaseUrl, recipesState.recipes)
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}

// new Recipe(
//   'Tasty Schnitzel',
//   'A super tasty schnitzel - just awesome!',
//   'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
//   [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
// ),
// new Recipe(
//   'Big Fat Burger',
//   'What else you need to say?',
//   'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//   [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
// ),
