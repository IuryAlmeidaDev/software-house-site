import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudies } from '../../data/site-content';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="projects" class="projects">
      <div class="heading" data-reveal>
        <span class="eyebrow">showcase / perpetual motion</span>
        <h2 class="section-title">Cases que mostram software feito sob medida.</h2>
        <p class="section-copy">
          Projetos com diferentes contextos, stacks e operações. A interface segue viva e interativa,
          mas agora com um tom mais limpo, maduro e focado em clareza.
        </p>
      </div>

      <div class="marquee" data-reveal>
        <div class="track">
          <a
            class="project-card glass"
            *ngFor="let project of repeatedProjects"
            [routerLink]="['/cases', project.slug]"
            [style.--accent]="project.accent"
          >
            <div class="project-meta">
              <span>{{ project.category }}</span>
              <strong>{{ project.id }}</strong>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.blurb }}</p>
            <div class="metrics">
              <span *ngFor="let metric of project.stack.slice(0, 3)">{{ metric }}</span>
            </div>
          </a>
        </div>
      </div>

      <div class="actions" data-reveal>
        <a routerLink="/cases" class="ghost-link">Ver todos os cases</a>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      padding: 90px 0 30px;
    }

    .heading {
      margin-bottom: 28px;
    }

    .marquee {
      position: relative;
      overflow: hidden;
      padding: 18px 0 24px;
      mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
    }

    .track {
      display: flex;
      gap: 18px;
      width: max-content;
      animation: drift 34s linear infinite;
    }

    .marquee:hover .track {
      animation-play-state: paused;
    }

    .project-card {
      --accent: #95a8bf;
      position: relative;
      width: min(420px, 78vw);
      min-height: 320px;
      padding: 22px;
      border-radius: 28px;
      overflow: hidden;
      transition: transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease, filter 260ms ease;
      background:
        radial-gradient(circle at var(--lx, 50%) var(--ly, 50%), color-mix(in srgb, var(--accent) 18%, transparent), transparent 32%),
        linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
    }

    .project-card::before {
      content: '';
      position: absolute;
      inset: -20%;
      background: radial-gradient(circle at center, rgba(255,255,255,0.10), transparent 35%);
      opacity: 0;
      transform: scale(0.92);
      transition: opacity 260ms ease, transform 260ms ease;
      pointer-events: none;
      filter: blur(26px);
    }

    .project-card:hover {
      transform: translateY(-8px) scale(1.01);
      border-color: rgba(255,255,255,0.16);
      box-shadow: 0 18px 80px rgba(0,0,0,0.28);
      filter: saturate(1.02);
    }

    .project-card:hover::before {
      opacity: 1;
      transform: scale(1.06);
    }

    .project-meta,
    .metrics {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      color: var(--muted);
      font-size: 0.82rem;
    }

    .project-meta strong {
      color: #e4e9ef;
      font-weight: 600;
    }

    h3 {
      margin: 18px 0 10px;
      font-size: 1.8rem;
      line-height: 1;
      letter-spacing: -0.05em;
      font-family: 'Space Grotesk', sans-serif;
    }

    p {
      color: var(--muted);
      line-height: 1.75;
      min-height: 108px;
    }

    .metrics {
      margin-top: 26px;
    }

    .metrics span,
    .ghost-link {
      padding: 10px 12px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.03);
    }

    .actions {
      display: flex;
      justify-content: flex-end;
    }

    @keyframes drift {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  `]
})
export class ProjectsSectionComponent {
  readonly projects = caseStudies;
  readonly repeatedProjects = [...this.projects, ...this.projects];
}
