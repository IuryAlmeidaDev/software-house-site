import { AfterViewInit, Component, DestroyRef, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterSectionComponent } from './sections/footer/footer.component';
import { SmoothScrollService } from './core/smooth-scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterSectionComponent],
  template: `
    <app-navbar />
    <main class="route-shell">
      <router-outlet />
    </main>
    <app-footer-section />
  `,
  styles: [`
    .route-shell {
      min-height: calc(100vh - 140px);
    }
  `]
})
export class AppComponent implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly smoothScroll = inject(SmoothScrollService);

  ngAfterViewInit(): void {
    this.smoothScroll.init();
    queueMicrotask(() => this.observeReveals());

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        setTimeout(() => this.observeReveals(), 50);
      });
  }

  private observeReveals(): void {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    targets.forEach((el) => observer.observe(el));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
