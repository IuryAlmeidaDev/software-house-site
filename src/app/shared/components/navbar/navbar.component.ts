import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MagneticDirective } from '../../directives/magnetic.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MagneticDirective],
  template: `
    <header class="nav-wrap">
      <nav class="nav glass">
        <a class="brand" routerLink="/">
          <span class="brand-mark"></span>
          <span>N&A Software House</span>
        </a>

        <button class="mobile-toggle" type="button" (click)="menuOpen = !menuOpen">
          Menu
        </button>

        <div class="nav-links" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="menuOpen = false">Home</a>
          <a routerLink="/services" routerLinkActive="active" (click)="menuOpen = false">Serviços</a>
          <a routerLink="/cases" routerLinkActive="active" (click)="menuOpen = false">Cases</a>
          <a routerLink="/about" routerLinkActive="active" (click)="menuOpen = false">Sobre</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="menuOpen = false">Contato</a>
        </div>

        <a appMagnetic class="cta" routerLink="/contact">Solicitar projeto</a>
      </nav>
    </header>
  `,
  styles: [`
    .nav-wrap {
      position: sticky;
      top: 16px;
      z-index: 40;
      width: var(--container);
      margin: 16px auto 0;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      padding: 16px 18px;
      border-radius: 999px;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-family: 'Space Grotesk', sans-serif;
      letter-spacing: -0.04em;
      font-size: 1.05rem;
      white-space: nowrap;
    }

    .brand-mark {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent-soft), var(--accent));
      box-shadow: 0 0 22px rgba(197, 208, 222, 0.24);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 22px;
      color: var(--muted);
      font-size: 0.95rem;
    }

    .nav-links a {
      position: relative;
      padding: 6px 0;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -4px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
      transform: scaleX(0);
      transition: transform 180ms ease;
    }

    .nav-links a.active,
    .nav-links a:hover {
      color: var(--text);
    }

    .nav-links a.active::after,
    .nav-links a:hover::after {
      transform: scaleX(1);
    }

    .cta {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 20px;
      border-radius: 999px;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(197,208,222,0.14), rgba(255,255,255,0.08));
      border: 1px solid rgba(255,255,255,0.12);
      transition: transform 180ms ease;
      isolation: isolate;
      white-space: nowrap;
    }

    .cta::before {
      content: '';
      position: absolute;
      inset: -30%;
      background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.18), transparent 30%);
      z-index: -1;
    }

    .mobile-toggle {
      display: none;
      color: var(--text);
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(255,255,255,0.04);
      padding: 10px 14px;
      border-radius: 999px;
    }

    @media (max-width: 900px) {
      .mobile-toggle {
        display: inline-flex;
      }

      .cta {
        display: none;
      }

      .nav {
        border-radius: 28px;
        flex-wrap: wrap;
      }

      .nav-links {
        display: none;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px 4px 2px;
      }

      .nav-links.open {
        display: flex;
      }
    }
  `]
})
export class NavbarComponent {
  menuOpen = false;
}
