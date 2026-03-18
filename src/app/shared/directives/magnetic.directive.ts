import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  standalone: true
})
export class MagneticDirective {
  private readonly element = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const el = this.element.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px) scale(1.03)`;
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const el = this.element.nativeElement;
    el.style.transform = 'translate(0, 0) scale(1)';
  }
}
