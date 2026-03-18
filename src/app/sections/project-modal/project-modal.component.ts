import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectOverlayService } from '../../core/project-overlay.service';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overlay" *ngIf="overlay.activeProject$ | async as project" (click)="close()">
      <article class="modal glass" (click)="$event.stopPropagation()" [style.--accent]="project.accent">
        <div class="top-row">
          <div>
            <span class="tag">{{ project.category }}</span>
            <h3>{{ project.title }}</h3>
          </div>
          <button type="button" (click)="close()">Fechar</button>
        </div>
        <p>
          {{ project.blurb }} O modal serve como case opener e pode virar rota dedicada depois.
          Aqui a ideia é vender densidade técnica sem virar muro de texto de agência gourmet.
        </p>
        <div class="metric-grid">
          <div *ngFor="let metric of project.metrics">
            <strong>{{ metric }}</strong>
            <span>capability unlocked</span>
          </div>
        </div>
      </article>
    </div>
  `,
  styles: [`
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(3, 3, 7, 0.72);
      backdrop-filter: blur(18px);
      display: grid;
      place-items: center;
      padding: 20px;
      z-index: 60;
    }

    .modal {
      --accent: #3b82f6;
      width: min(760px, calc(100vw - 24px));
      padding: 26px;
      border-radius: 32px;
      border-color: color-mix(in srgb, var(--accent) 40%, rgba(255,255,255,0.12));
      background:
        radial-gradient(circle at top right, color-mix(in srgb, var(--accent) 18%, transparent), transparent 24%),
        linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06));
    }

    .top-row {
      display: flex;
      justify-content: space-between;
      gap: 18px;
      align-items: start;
    }

    .tag {
      color: var(--muted);
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0.16em;
    }

    h3 {
      margin: 12px 0 0;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      line-height: 0.95;
      letter-spacing: -0.05em;
    }

    button {
      min-height: 48px;
      padding: 0 16px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.12);
      background: rgba(255,255,255,0.04);
      color: var(--text);
      cursor: pointer;
    }

    p {
      color: var(--muted);
      line-height: 1.85;
      margin: 18px 0 24px;
    }

    .metric-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .metric-grid div {
      padding: 18px;
      border-radius: 20px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .metric-grid strong {
      display: block;
      margin-bottom: 8px;
    }

    .metric-grid span {
      color: var(--muted);
      font-size: 0.9rem;
    }

    @media (max-width: 720px) {
      .metric-grid {
        grid-template-columns: 1fr;
      }
      .top-row {
        flex-direction: column;
      }
    }
  `]
})
export class ProjectModalComponent {
  readonly overlay = inject(ProjectOverlayService);

  close(): void {
    const transition = document.startViewTransition?.bind(document);
    if (transition) {
      transition(() => this.overlay.close());
      return;
    }
    this.overlay.close();
  }
}
