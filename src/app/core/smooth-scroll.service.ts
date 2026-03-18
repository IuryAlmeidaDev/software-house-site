import { DestroyRef, Injectable, NgZone, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SmoothScrollService {
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private lenis: { raf: (time: number) => void; destroy?: () => void } | null = null;
  private rafId = 0;
  private initialized = false;

  async init(): Promise<void> {
    if (this.initialized || typeof window === 'undefined') {
      return;
    }

    this.initialized = true;

    const { default: Lenis } = await import('lenis');
    this.lenis = new Lenis({
      autoRaf: false,
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false
    });

    this.zone.runOutsideAngular(() => {
      const tick = (time: number): void => {
        this.lenis?.raf(time);
        this.rafId = window.requestAnimationFrame(tick);
      };

      this.rafId = window.requestAnimationFrame(tick);
    });

    this.destroyRef.onDestroy(() => {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      this.lenis?.destroy?.();
    });
  }
}
