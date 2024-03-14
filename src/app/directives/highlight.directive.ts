import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() set appHighlight(condition: boolean) {
    if (condition) {
      this.renderer.addClass(this.el.nativeElement, 'highlighted');
      setTimeout(() => {
        this.renderer.removeClass(this.el.nativeElement, 'highlighted');
      }, 3000);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }
}
