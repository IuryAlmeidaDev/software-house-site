import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="page-hero page-top-space" data-reveal>
      <span class="eyebrow">contact / start signal</span>
      <h1 class="page-title">Conta o contexto. A N&A desenha o software certo.</h1>
      <p class="page-copy">Produto novo, plataforma interna, operação complexa ou evolução de software existente. A primeira conversa serve para entender o cenário e propor um caminho sob medida.</p>
    </section>

    <section class="contact-layout" data-reveal>
      <form class="glass form-panel" [formGroup]="form">
        <label>
          <span>Nome</span>
          <input type="text" formControlName="name" placeholder="Seu nome" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" formControlName="email" placeholder="voce@empresa.com" />
        </label>
        <label>
          <span>Empresa</span>
          <input type="text" formControlName="company" placeholder="Nome da empresa" />
        </label>
        <label>
          <span>Escopo</span>
          <textarea rows="6" formControlName="scope" placeholder="Produto novo, plataforma interna, redesign, IA aplicada..."></textarea>
        </label>
        <button type="button" [disabled]="form.invalid">Enviar briefing</button>
      </form>

      <aside class="glass info-panel">
        <h2>O que ajuda no primeiro contato</h2>
        <ul>
          <li>Qual problema o software precisa resolver</li>
          <li>Quem usa, quem aprova e qual operação é afetada</li>
          <li>Prazos, restrições e integrações que já existem</li>
          <li>Se já existe design system, time interno ou stack definida</li>
        </ul>
        <div class="contact-chip">contato@nyasoftwarehouse.com</div>
      </aside>
    </section>
  `,
  styles: [`
    .contact-layout {
      width: var(--container);
      margin: 0 auto 80px;
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: 18px;
    }

    .form-panel,
    .info-panel {
      padding: 28px;
      border-radius: 30px;
    }

    form {
      display: grid;
      gap: 16px;
    }

    label span {
      display: block;
      margin-bottom: 10px;
      color: #dce4f3;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 18px;
      padding: 16px 18px;
      background: rgba(255,255,255,0.04);
      color: var(--text);
      outline: none;
    }

    textarea {
      resize: vertical;
      min-height: 160px;
    }

    button {
      min-height: 56px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      background: linear-gradient(135deg, rgba(197,208,222,0.16), rgba(255,255,255,0.08));
      color: var(--text);
      cursor: pointer;
    }

    button:disabled {
      opacity: .5;
      cursor: not-allowed;
    }

    h2 {
      margin: 0 0 12px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2rem;
      line-height: .96;
      letter-spacing: -.05em;
    }

    ul {
      padding-left: 18px;
    }

    li {
      color: var(--muted);
      line-height: 1.85;
    }

    .contact-chip {
      display: inline-flex;
      margin-top: 24px;
      padding: 12px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
    }

    @media (max-width: 900px) {
      .contact-layout {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);

  readonly form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    scope: ['', Validators.required]
  });
}
