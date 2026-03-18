import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudies } from '../../data/site-content';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero page-top-space" data-reveal>
      <span class="eyebrow">case studies / proof</span>
      <h1 class="page-title">Cases que mostram como a N&A resolve contextos diferentes com software sob medida.</h1>
      <p class="page-copy">Cada projeto combina contexto, arquitetura, interface e execução para atender operações e produtos com necessidades específicas.</p>
    </section>

    <section class="cases-grid" data-reveal>
      <a class="case-card glass" *ngFor="let item of items" [routerLink]="['/cases', item.slug]" [style.--accent]="item.accent">
        <div class="meta">
          <span>{{ item.category }}</span>
          <strong>{{ item.id }}</strong>
        </div>
        <h2>{{ item.title }}</h2>
        <p>{{ item.summary }}</p>
        <div class="tags">
          <span *ngFor="let tag of item.stack.slice(0, 3)">{{ tag }}</span>
        </div>
      </a>
    </section>
  `,
  styles: [`
    .cases-grid {
      width: var(--container);
      margin: 0 auto 80px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    .case-card {
      position: relative;
      min-height: 320px;
      padding: 24px;
      border-radius: 28px;
      overflow: hidden;
      transition: transform 220ms ease, border-color 220ms ease;
      background:
        radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 32%),
        linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
    }

    .case-card:hover {
      transform: translateY(-6px);
      border-color: rgba(255,255,255,0.18);
    }

    .meta,
    .tags {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      color: var(--muted);
      font-size: .84rem;
    }

    h2 {
      margin: 20px 0 12px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      line-height: .95;
      letter-spacing: -.05em;
    }

    p {
      color: var(--muted);
      line-height: 1.8;
      min-height: 120px;
    }

    .tags span {
      padding: 10px 12px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 999px;
      background: rgba(255,255,255,0.03);
    }

    @media (max-width: 900px) {
      .cases-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CasesPage {
  readonly items = caseStudies;
}
