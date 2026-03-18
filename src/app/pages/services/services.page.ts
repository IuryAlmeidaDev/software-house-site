import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../../data/site-content';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink, MagneticDirective],
  template: `
    <section class="page-hero page-top-space" data-reveal>
      <span class="eyebrow">services / system design</span>
      <h1 class="page-title">Serviços para produtos e plataformas feitos sob medida.</h1>
      <p class="page-copy">A N&A Software House desenha, valida e desenvolve software sob medida para contextos que exigem clareza, escalabilidade e boa experiência de uso.</p>
    </section>

    <section class="content-grid" data-reveal>
      <article class="service-card glass" *ngFor="let item of serviceItems; let i = index" [style.--accent]="accents[i % accents.length]">
        <span class="service-label">{{ item.label }}</span>
        <h2>{{ item.title }}</h2>
        <p>{{ item.copy }}</p>
        <ul>
          <li *ngFor="let bullet of item.bullets">{{ bullet }}</li>
        </ul>
      </article>
    </section>

    <section class="split-band glass" data-reveal>
      <div>
        <span class="eyebrow">delivery model</span>
        <h2>Squad enxuto, barra alta e direção clara.</h2>
      </div>
      <div>
        <p>Entramos onde o produto pede profundidade: discovery, arquitetura, design system, frontend Angular, plataformas internas, IA aplicada e superfícies operacionais.</p>
        <a appMagnetic routerLink="/contact" class="inline-cta">Falar sobre escopo</a>
      </div>
    </section>
  `,
  styles: [`
    .content-grid {
      width: var(--container);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
      padding-bottom: 34px;
    }

    .service-card {
      position: relative;
      padding: 26px;
      border-radius: 28px;
      overflow: hidden;
      min-height: 280px;
      background:
        radial-gradient(circle at 85% 10%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 24%),
        linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
    }

    .service-label {
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: .14em;
      font-size: .78rem;
    }

    h2 {
      margin: 16px 0 12px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      line-height: .96;
      letter-spacing: -.05em;
    }

    p, li {
      color: var(--muted);
      line-height: 1.8;
    }

    ul {
      padding-left: 18px;
      margin: 18px 0 0;
    }

    .split-band {
      width: var(--container);
      margin: 0 auto 70px;
      padding: 28px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      border-radius: 32px;
    }

    .split-band h2 {
      margin: 18px 0 0;
      font-size: clamp(2rem, 5vw, 3.8rem);
    }

    .inline-cta {
      display: inline-flex;
      margin-top: 18px;
      padding: 14px 20px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.14);
      background: linear-gradient(135deg, rgba(197,208,222,0.16), rgba(255,255,255,0.08));
    }

    @media (max-width: 900px) {
      .content-grid,
      .split-band {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ServicesPage {
  readonly serviceItems = services;
  readonly accents = ['#95a8bf', '#b9a89d', '#9cb1ab', '#b8b3aa'];
}
