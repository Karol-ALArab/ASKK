import {
  AfterViewInit,
  Directive,
  DOCUMENT,
  ElementRef,
  HostBinding,
  Inject,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements AfterViewInit, OnDestroy{
  private observer!: IntersectionObserver;
  @HostBinding('attr.animate.enter') enterAnimation = 'fade-in-on-load';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
  ) {
    this.addStyles();
  }

  // when element is scrolled into viewport
  ngAfterViewInit() {
    const target = this.el.nativeElement;
    target.classList.add('fade-in-target');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            target.classList.add('visible');
            this.observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      },
    );
    this.observer.observe(target);
  }

  private addStyles() {
    const styleId = 'app-fade-in-directive-styles';

    if (!this.document.getElementById(styleId)) {
      const styleElement = this.document.createElement('style');
      styleElement.id = styleId;

      // Styles using angulars animations
      styleElement.textContent = `
        .fade-in-target {
          opacity: 0;
          transform: translateY(80px);
          transition: opacity 1.5s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .fade-in-target.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `;
      // adding the styles to the element
      this.document.head.appendChild(styleElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
