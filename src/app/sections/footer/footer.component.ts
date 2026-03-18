import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div>
        <strong>N&A Software House</strong>
        <span>Software sob medida com clareza, interação e profundidade técnica.</span>
      </div>
      <div>
        <a routerLink="/">Home</a>
        <a routerLink="/services">Serviços</a>
        <a routerLink="/cases">Cases</a>
        <a routerLink="/about">Sobre</a>
        <a routerLink="/contact">Contato</a>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      width: var(--container);
      margin: 0 auto;
      padding: 30px 0 36px;
      display: flex;
      justify-content: space-between;
      gap: 18px;
      color: var(--muted);
      font-size: 0.95rem;
    }

    .footer strong {
      display: block;
      color: var(--text);
      margin-bottom: 6px;
      font-family: 'Space Grotesk', sans-serif;
    }

    .footer div:last-child {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
    }

    @media (max-width: 720px) {
      .footer {
        flex-direction: column;
      }
    }
  `]
})
export class FooterSectionComponent {}
