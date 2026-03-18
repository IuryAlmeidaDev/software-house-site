import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  blurb: string;
  metrics: string[];
  accent: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectOverlayService {
  private readonly activeProjectSubject = new BehaviorSubject<ProjectItem | null>(null);
  private readonly openedSubject = new Subject<void>();
  private readonly closedSubject = new Subject<void>();

  activeProject$ = this.activeProjectSubject.asObservable();
  opened$ = this.openedSubject.asObservable();
  closed$ = this.closedSubject.asObservable();

  open(project: ProjectItem): void {
    this.activeProjectSubject.next(project);
    this.openedSubject.next();
  }

  close(): void {
    this.activeProjectSubject.next(null);
    this.closedSubject.next();
  }
}
