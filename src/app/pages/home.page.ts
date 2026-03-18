import { Component } from '@angular/core';
import { HeroArchitectureComponent } from '../sections/hero-architecture/hero-architecture.component';
import { ProjectsSectionComponent } from '../sections/projects/projects.component';
import { ProcessSectionComponent } from '../sections/process/process.component';
import { StackSectionComponent } from '../sections/stack/stack.component';
import { CtaSectionComponent } from '../sections/cta/cta.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroArchitectureComponent,
    ProjectsSectionComponent,
    ProcessSectionComponent,
    StackSectionComponent,
    CtaSectionComponent
  ],
  template: `
    <app-hero-architecture />
    <app-projects-section />
    <app-process-section />
    <app-stack-section />
    <app-cta-section />
  `
})
export class HomePage {}
