import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('amountInput', { static: true })
  amountInput: ElementRef<HTMLInputElement>;

  constructor(private slService: ShoppingListService) {}

  onAddItem(nameInput: HTMLInputElement) {
    this.slService.addIngredient(
      new Ingredient(nameInput.value, +this.amountInput.nativeElement.value)
    );
  }
}
