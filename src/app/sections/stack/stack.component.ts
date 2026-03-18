import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stack-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="stack" class="stack">
      <div class="heading" data-reveal>
        <span class="eyebrow">capabilities / bento grid</span>
        <h2 class="section-title">Competências organizadas como sistema, não como vitrine.</h2>
        <p class="section-copy">
          Cada card representa uma frente de entrega da N&A Software House. A interação continua sofisticada,
          mas com visual mais limpo e menos saturado.
        </p>
      </div>

      <div class="grid" data-reveal>
        <article class="tile glass large">
          <span>AI Systems</span>
          <h3>Soluções com contexto, automação e governança aplicadas ao negócio.</h3>
          <p>RAG, copilots, pipelines de inferência e interfaces que deixam o invisível legível.</p>
        </article>
        <article class="tile glass tall">
          <span>Web Platforms</span>
          <h3>Aplicações web robustas com arquitetura de componentes e UX consistente.</h3>
        </article>
        <article class="tile glass">
          <span>Cloud Infra</span>
          <h3>Kubernetes, CI/CD, edge e automação operacional.</h3>
        </article>
        <article class="tile glass">
          <span>Data Systems</span>
          <h3>ETL, analytics e pipelines em tempo quase real.</h3>
        </article>
        <article class="tile glass wide">
          <span>Design Ops</span>
          <h3>Design system com tokens, motion primitives e consistência operacional.</h3>
          <p>Menos ruído visual, mais escala de interface.</p>
        </article>
        <article class="tile glass">
          <span>DevOps</span>
          <h3>Entrega estável e previsível.</h3>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .stack {
      padding: 110px 0 50px;
    }

    .heading {
      margin-bottom: 28px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 170px;
      gap: 18px;
    }

    .tile {
      position: relative;
      padding: 22px;
      border-radius: 28px;
      overflow: hidden;
      transition: transform 240ms ease, border-color 240ms ease, background 240ms ease;
    }

    .tile::before {
      content: '';
      position: absolute;
      inset: auto -18% -50% auto;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(197,208,222,0.14), transparent 62%);
      filter: blur(10px);
      pointer-events: none;
    }

    .tile:hover {
      transform: translateY(-6px) scale(1.01);
      border-color: rgba(255,255,255,0.18);
      background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04));
    }

    .tile span {
      display: inline-block;
      color: var(--muted);
      text-transform: uppercase;
      font-size: 0.76rem;
      letter-spacing: 0.14em;
    }

    .tile h3 {
      margin: 14px 0 10px;
      font-size: 1.6rem;
      line-height: 1.06;
      letter-spacing: -0.05em;
      font-family: 'Space Grotesk', sans-serif;
    }

    .tile p {
      margin: 0;
      color: var(--muted);
      line-height: 1.75;
    }

    .large { grid-column: span 2; grid-row: span 2; }
    .wide { grid-column: span 2; }
    .tall { grid-row: span 2; }

    @media (max-width: 1000px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .grid {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
      }
      .large, .wide, .tall {
        grid-column: span 1;
        grid-row: span 1;
      }
    }
  `]
})
export class StackSectionComponent {}
