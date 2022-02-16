import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Schinken', 10),
  ];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addToShoppingList(ingredient: Ingredient) {
    for (const knownIng of this.ingredients) {
      if (ingredient.name === knownIng.name) {
        knownIng.amount += ingredient.amount;
        this.ingredientsChanged.next(this.getIngredients());
        return;
      }
    }
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.next(this.getIngredients());
  }
}
