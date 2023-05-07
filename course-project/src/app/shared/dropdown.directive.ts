import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean;

  constructor(private elRef: ElementRef) {}

  @HostListener('document:click', ['$event.target']) toggleOpen(
    el: HTMLElement
  ) {
    this.isOpen = this.elRef.nativeElement.contains(el) ? !this.isOpen : false;
  }
}
