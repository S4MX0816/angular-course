import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input('appUnless') set unless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.template);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(template, vcRef);
  }
}
