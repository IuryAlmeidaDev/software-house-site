import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { caseStudies } from '../../data/site-content';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <ng-container *ngIf="caseStudy as item; else missing">
      <section class="page-hero page-top-space" data-reveal>
        <span class="eyebrow">{{ item.category }}</span>
        <h1 class="page-title">{{ item.title }}</h1>
        <p class="page-copy">{{ item.summary }}</p>
      </section>

      <section class="detail-layout" data-reveal>
        <article class="story glass">
          <h2>Desafio</h2>
          <p>{{ item.challenge }}</p>
          <h2>Solução</h2>
          <p>{{ item.solution }}</p>
        </article>

        <aside class="meta-card glass" [style.--accent]="item.accent">
          <h3>Impacto</h3>
          <ul>
            <li *ngFor="let bullet of item.impact">{{ bullet }}</li>
          </ul>
          <h3>Stack</h3>
          <div class="stack-list">
            <span *ngFor="let tech of item.stack">{{ tech }}</span>
          </div>
        </aside>
      </section>

      <section class="back-row" data-reveal>
        <a routerLink="/cases">← Voltar para os cases</a>
      </section>
    </ng-container>

    <ng-template #missing>
      <section class="page-hero page-top-space" data-reveal>
        <span class="eyebrow">case not found</span>
        <h1 class="page-title">Esse case não existe.</h1>
        <p class="page-copy">Provavelmente esse slug não existe ou ainda não foi publicado.</p>
        <a routerLink="/cases" class="ghost-link">Voltar para os cases</a>
      </section>
    </ng-template>
  `,
  styles: [`
    .detail-layout {
      width: var(--container);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.2fr .8fr;
      gap: 18px;
    }

    .story,
    .meta-card {
      padding: 28px;
      border-radius: 30px;
    }

    .meta-card {
      background:
        radial-gradient(circle at top right, color-mix(in srgb, var(--accent) 22%, transparent), transparent 28%),
        linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
    }

    h2, h3 {
      font-family: 'Space Grotesk', sans-serif;
      letter-spacing: -.05em;
    }

    h2 {
      font-size: 2rem;
      margin: 0 0 10px;
    }

    h3 {
      margin: 0 0 12px;
      font-size: 1.3rem;
    }

    p, li {
      color: var(--muted);
      line-height: 1.85;
    }

    .stack-list {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .stack-list span {
      padding: 10px 12px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.03);
      color: var(--text);
    }

    .back-row {
      width: var(--container);
      margin: 22px auto 80px;
      color: var(--muted);
    }

    .ghost-link {
      display: inline-flex;
      margin-top: 18px;
      padding: 14px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
    }

    @media (max-width: 900px) {
      .detail-layout {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CaseDetailPage {
  constructor(private readonly route: ActivatedRoute) {}

  get caseStudy() {
    return caseStudies.find((item) => item.slug === this.route.snapshot.paramMap.get('slug'));
  }
}
