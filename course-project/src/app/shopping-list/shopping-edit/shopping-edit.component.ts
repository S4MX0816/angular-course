import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index) => {
      this.editedItemIndex = index;
      this.editMode = true;
    });
  }

  onAddItem(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;
    this.slService.addIngredient(new Ingredient(name, amount));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
