import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipes.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements  OnInit, OnDestroy {
  recipe: Recipe;
  shoppingListSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.shoppingListSubscription = this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(+params.id);
    });
  }

  addIngredientsToShoppinglist() {
    for (const ingredient of this.recipe.ingredients) {
      this.shoppingListService.addToShoppingList(ingredient);
    }
  }

  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }




}
