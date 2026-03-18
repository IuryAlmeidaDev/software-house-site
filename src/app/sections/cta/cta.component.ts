import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MagneticDirective } from '../../shared/directives/magnetic.directive';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [MagneticDirective, RouterLink],
  template: `
    <section id="contact" class="cta-wrap" data-reveal>
      <div class="panel glass">
        <span class="eyebrow">final call / projeto sob medida</span>
        <h2>Vamos construir um software que faça sentido para o seu contexto.</h2>
        <p>
          A N&A Software House une estratégia, UX/UI e engenharia para entregar produto com clareza,
          profundidade técnica e acabamento premium.
        </p>
        <div class="actions">
          <a appMagnetic class="cta-button" routerLink="/contact">Falar com a N&A</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-wrap {
      padding: 120px 0 70px;
    }

    .panel {
      position: relative;
      padding: clamp(28px, 5vw, 54px);
      border-radius: 40px;
      text-align: center;
      overflow: hidden;
      isolation: isolate;
    }

    .panel::before,
    .panel::after {
      content: '';
      position: absolute;
      inset: auto;
      width: 320px;
      height: 320px;
      border-radius: 50%;
      filter: blur(32px);
      z-index: -1;
    }

    .panel::before {
      top: -120px;
      left: -100px;
      background: radial-gradient(circle, rgba(197,208,222,0.14), transparent 62%);
    }

    .panel::after {
      right: -100px;
      bottom: -140px;
      background: radial-gradient(circle, rgba(215,196,184,0.12), transparent 62%);
    }

    h2 {
      margin: 18px auto 14px;
      max-width: 900px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.5rem, 7vw, 5.2rem);
      line-height: 0.95;
      letter-spacing: -0.07em;
    }

    p {
      max-width: 760px;
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.8;
    }

    .actions {
      margin-top: 28px;
      display: flex;
      justify-content: center;
    }

    .cta-button {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      min-height: 64px;
      padding: 0 24px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.16);
      background: linear-gradient(135deg, rgba(197,208,222,0.16), rgba(255,255,255,0.08));
      box-shadow: 0 0 0 1px rgba(255,255,255,0.08) inset;
      overflow: hidden;
      transition: transform 180ms ease;
    }

    .cta-button::before {
      content: '';
      position: absolute;
      inset: -30%;
      background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.24), transparent 30%);
    }
  `]
})
export class CtaSectionComponent {}
