import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Step {
  title: string;
  label: string;
  copy: string;
}

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="process" class="process">
      <div class="heading" data-reveal>
        <span class="eyebrow">process / unlockable flow</span>
        <h2 class="section-title">Nosso processo traduz complexidade em clareza.</h2>
        <p class="section-copy">
          Cada etapa revela como a N&A estrutura software sob medida: entendimento, arquitetura,
          execução e evolução contínua.
        </p>
      </div>

      <div class="graph glass" data-reveal>
        <button
          type="button"
          class="node"
          *ngFor="let step of steps; let i = index"
          [class.active]="i <= unlockedIndex"
          [class.next]="i === unlockedIndex + 1"
          [style.--delay]="i"
          (click)="unlock(i)"
        >
          <span class="node-index">0{{ i + 1 }}</span>
          <strong>{{ step.title }}</strong>
          <small>{{ step.label }}</small>
        </button>

        <div class="step-panel">
          <span class="eyebrow">stage active</span>
          <h3>{{ activeStep.title }}</h3>
          <p>{{ activeStep.copy }}</p>
        </div>

        <svg viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
          <path d="M170 110 C 310 110, 320 120, 440 175" [class.lit]="unlockedIndex >= 1"></path>
          <path d="M495 175 C 650 220, 640 250, 785 255" [class.lit]="unlockedIndex >= 2"></path>
          <path d="M785 255 C 910 260, 870 320, 865 330" [class.lit]="unlockedIndex >= 3"></path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    .process {
      padding: 110px 0 40px;
    }

    .heading {
      margin-bottom: 28px;
    }

    .graph {
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      padding: 26px;
      border-radius: 34px;
      overflow: hidden;
      min-height: 430px;
    }

    svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    path {
      fill: none;
      stroke: rgba(255,255,255,0.12);
      stroke-width: 2;
      stroke-dasharray: 10 12;
      transition: stroke 320ms ease;
    }

    path.lit {
      stroke: rgba(197, 208, 222, 0.82);
      filter: drop-shadow(0 0 10px rgba(197,208,222,0.18));
    }

    .node {
      position: relative;
      z-index: 1;
      min-height: 136px;
      text-align: left;
      padding: 18px;
      border-radius: 24px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.04);
      color: var(--text);
      cursor: pointer;
      transition: transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease;
      align-self: start;
      margin-top: calc(var(--delay) * 52px);
    }

    .node:hover,
    .node.next,
    .node.active {
      border-color: rgba(255,255,255,0.18);
      background: linear-gradient(180deg, rgba(197,208,222,0.10), rgba(255,255,255,0.05));
      box-shadow: 0 18px 70px rgba(0,0,0,0.20);
      transform: translateY(-4px);
    }

    .node-index,
    small {
      display: block;
      color: var(--muted);
    }

    strong {
      display: block;
      margin: 12px 0 8px;
      font-size: 1.1rem;
    }

    .step-panel {
      position: absolute;
      left: 26px;
      right: 26px;
      bottom: 26px;
      padding: 24px;
      border-radius: 28px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      z-index: 1;
      backdrop-filter: blur(18px);
    }

    .step-panel h3 {
      margin: 14px 0 10px;
      font-size: 1.8rem;
      line-height: 1;
      letter-spacing: -0.05em;
      font-family: 'Space Grotesk', sans-serif;
    }

    .step-panel p {
      max-width: 760px;
      color: var(--muted);
      line-height: 1.8;
      margin: 0;
    }

    @media (max-width: 920px) {
      .graph {
        grid-template-columns: repeat(2, 1fr);
        min-height: unset;
        padding-bottom: 180px;
      }
    }

    @media (max-width: 640px) {
      .graph {
        grid-template-columns: 1fr;
      }

      .node {
        margin-top: 0;
      }
    }
  `]
})
export class ProcessSectionComponent {
  readonly steps: Step[] = [
    {
      title: 'Discovery',
      label: 'signal extraction',
      copy: 'O foco é entender o cenário real: pessoas, operações, metas, restrições e oportunidade.'
    },
    {
      title: 'Architecture',
      label: 'system shape',
      copy: 'Desenhamos fronteiras, fluxos, estados e contratos. UX e arquitetura caminham juntas para o software refletir a realidade do negócio.'
    },
    {
      title: 'Build',
      label: 'high fidelity execution',
      copy: 'Implementação com foco em componentização, motion controlado, acessibilidade e performance percebida. O resultado precisa ser consistente por dentro e intuitivo por fora.'
    },
    {
      title: 'Scale',
      label: 'feedback + evolution',
      copy: 'Produto bom evolui com governança, feedback e base técnica suficiente para crescer sem atrito.'
    }
  ];

  unlockedIndex = 0;
  activeStep = this.steps[0];

  unlock(index: number): void {
    this.unlockedIndex = index;
    this.activeStep = this.steps[index];
  }
}
