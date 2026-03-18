import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero page-top-space" data-reveal>
      <span class="eyebrow">about / operating model</span>
      <h1 class="page-title">A N&A Software House cria software sob medida com método, clareza e acabamento premium.</h1>
      <p class="page-copy">A N&A une estratégia, UX/UI e engenharia para construir plataformas, produtos internos e sistemas de operação que resolvem problemas reais sem sacrificar experiência.</p>
    </section>

    <section class="about-grid" data-reveal>
      <article class="glass panel large">
        <span>Princípio 01</span>
        <h2>Forma segue arquitetura.</h2>
        <p>A interface não inventa uma realidade paralela. Ela precisa refletir estados, risco, contexto e decisão.</p>
      </article>
      <article class="glass panel">
        <span>Princípio 02</span>
        <h2>Interação com função.</h2>
        <p>Toda animação existe para orientar, contextualizar ou melhorar percepção de qualidade.</p>
      </article>
      <article class="glass panel">
        <span>Princípio 03</span>
        <h2>Design e engenharia na mesma mesa.</h2>
        <p>Menos handoff, mais sistema. A distância entre conceito e produção precisa ser curta.</p>
      </article>
    </section>

    <section class="timeline glass" data-reveal>
      <div>
        <span class="eyebrow">how we work</span>
        <h2>Times enxutos, decisões rápidas e software desenhado para a vida real.</h2>
      </div>
      <div class="points">
        <article>
          <strong>Discovery</strong>
          <p>Entender contexto, objetivos, restrições e sinais que realmente orientam a decisão.</p>
        </article>
        <article>
          <strong>System Design</strong>
          <p>Fluxos, estados, arquitetura de informação, linguagem visual e component model.</p>
        </article>
        <article>
          <strong>Build</strong>
          <p>Arquitetura, design system, frontend e integração com o que precisa funcionar de verdade.</p>
        </article>
      </div>
    </section>

    <section class="back-row" data-reveal>
      <a routerLink="/contact" class="ghost-link">Vamos conversar</a>
    </section>
  `,
  styles: [`
    .about-grid {
      width: var(--container);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.1fr .9fr .9fr;
      gap: 18px;
    }

    .panel {
      padding: 24px;
      border-radius: 28px;
      min-height: 260px;
    }

    .panel.large {
      min-height: 380px;
    }

    .panel span {
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: .14em;
      font-size: .75rem;
    }

    .panel h2,
    .timeline h2 {
      margin: 18px 0 12px;
      font-size: clamp(1.8rem, 4vw, 3rem);
      line-height: .96;
      font-family: 'Space Grotesk', sans-serif;
      letter-spacing: -.05em;
    }

    .panel p,
    .timeline p {
      color: var(--muted);
      line-height: 1.8;
    }

    .timeline {
      width: var(--container);
      margin: 18px auto 0;
      padding: 28px;
      border-radius: 32px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .points {
      display: grid;
      gap: 18px;
    }

    .points article {
      padding: 18px;
      border-radius: 22px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .points strong {
      display: block;
      margin-bottom: 8px;
      font-size: 1.15rem;
    }

    .back-row {
      width: var(--container);
      margin: 22px auto 80px;
    }

    .ghost-link {
      display: inline-flex;
      padding: 14px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
    }

    @media (max-width: 900px) {
      .about-grid,
      .timeline {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutPage {}
