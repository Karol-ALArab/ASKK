import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAnim]',
  standalone: true,
})
export class HoverAnim {
  @Input() appHoverAnim = 'gray';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.applyAnim(this.appHoverAnim);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeAnim();
  }

  private applyAnim(color: string) {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'z-index', '100');


    if (element.tagName === 'P') {
      this.renderer.setStyle(element, 'transition', 'all 0.3s ease-in-out');
      this.renderer.setStyle(element, 'text-shadow', `0 0 1px ${color}, 0 0 20px ${color}`);
      this.renderer.setStyle(element, 'transform', 'scale(1.02)');
      this.renderer.setStyle(element, 'transform-origin', 'center');
    } else {
      this.renderer.setStyle(element, 'transition', 'all 0.2s ease-in-out');

      // Then set the new styles
      this.renderer.setStyle(element, 'box-shadow', `2px 1px 5px ${color}, 3px 1px 6px ${color}`);
      this.renderer.setStyle(element, 'transform', 'scale(1.02)');
      this.renderer.setStyle(element, 'transform-origin', 'center');
    }
  }

  private removeAnim() {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'z-index', '1');

    this.renderer.setStyle(
      element,
      'transition',
      'all 0.3s ease-in-out, transform 0.3s ease-in-out',
    );

    this.renderer.setStyle(element, 'box-shadow', 'none');
    this.renderer.setStyle(element, 'text-shadow', 'none');
    this.renderer.setStyle(element, 'transform', 'scale(1)');
  }
}
