import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

const sharedCompAndDirective = [
  AlertComponent,
  LoadingSpinnerComponent,
  DropdownDirective,
  PlaceholderDirective,
];

@NgModule({
  declarations: [...sharedCompAndDirective],
  imports: [CommonModule],
  exports: [...sharedCompAndDirective, CommonModule],
  // Old way of creating dynamic components
  // entryComponents: [AlertComponent],
})
export class SharedModule {}
