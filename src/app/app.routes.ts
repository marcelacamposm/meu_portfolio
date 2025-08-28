import { Routes } from '@angular/router';
import { Sobre } from './pages/sobre/sobre';
import { Projetos } from './pages/projetos/projetos';
import { Experiencias } from './pages/experiencias/experiencias';
import { Contato } from './pages/contato/contato';
import { Home } from './home/home';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [ 
    { path: '', redirectTo: 'aboutme', pathMatch: 'full',}, 
    { path: 'aboutme', component: Home },
    { path: 'projects', component: Projetos },
    { path: 'experiences', component: Experiencias },
    { path: 'contact', component: Contato },
    { path: '**', redirectTo: '/' }
];