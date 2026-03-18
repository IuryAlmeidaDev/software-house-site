import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.page').then((m) => m.HomePage),
    title: 'N&A Software House — Software sob medida'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.page').then((m) => m.ServicesPage),
    title: 'Serviços — N&A Software House'
  },
  {
    path: 'cases',
    loadComponent: () => import('./pages/cases/cases.page').then((m) => m.CasesPage),
    title: 'Cases — N&A Software House'
  },
  {
    path: 'cases/:slug',
    loadComponent: () => import('./pages/case-detail/case-detail.page').then((m) => m.CaseDetailPage),
    title: 'Case Study — N&A Software House'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then((m) => m.AboutPage),
    title: 'Sobre — N&A Software House'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then((m) => m.ContactPage),
    title: 'Contato — N&A Software House'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
