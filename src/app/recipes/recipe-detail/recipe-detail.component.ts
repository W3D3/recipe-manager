import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.recipe = recipeService.getRecipe(+params.id);
    });
  }

  addIngredientsToShoppinglist() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addToShoppingList(ingredient);
    }

  }


}
