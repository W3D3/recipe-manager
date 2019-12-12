import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipes.model';
import {Ingredient} from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'An austrian classic <3',
      'https://www.gutekueche.at/img/rezept/170/wiener-schnitzel.jpg',
      [
        new Ingredient('Schnitzi', 1),
        new Ingredient('Kartoffelsalat', 32)
      ]
    ),
    new Recipe(
      'Burger',
      'I like burgers',
      'data:image/jpeg;base64,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',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Salad', 1),
        new Ingredient('Cheese', 1),
        new Ingredient('Pickles', 4),
        new Ingredient('Pommes', 21)
      ]
    ),
    new Recipe(
      'Steak',
      'mhhhh, meat',
      'https://www.omahasteaks.com/blog/wp-content/uploads/2019/09/Grilling-Flat-Irons-BP-1080x610.jpg',
      [
        new Ingredient('500g Steak', 1),
        new Ingredient('Pfefferkoerner', 4)
      ]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
