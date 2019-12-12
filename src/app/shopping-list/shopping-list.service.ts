import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

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
        this.ingredientsChanged.emit(this.getIngredients());
        return;
      }
    }
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
