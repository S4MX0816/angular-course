import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('amountInput', { static: true })
  amountInput: ElementRef<HTMLInputElement>;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAddItem(nameInput: HTMLInputElement) {
    this.ingredientAdded.emit(
      new Ingredient(nameInput.value, +this.amountInput.nativeElement.value)
    );
  }
}
