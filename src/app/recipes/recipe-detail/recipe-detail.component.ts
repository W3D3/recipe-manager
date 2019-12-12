import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {
  }

  addIngredientsToShoppinglist() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addToShoppingList(ingredient);
    }

  }


}
