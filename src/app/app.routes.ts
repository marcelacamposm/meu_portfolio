import { Routes } from '@angular/router';
import { Sobre } from './pages/sobre/sobre';
import { Projetos } from './pages/projetos/projetos';
import { Experiencias } from './pages/experiencias/experiencias';
import { Contato } from './pages/contato/contato';
import { Home } from './home/home';
import { RenderMode } from '@angular/ssr';

export const routes: Routes = [ 
    { path: '', component: Home, pathMatch: 'full',
        data: {
            ssr: {
                renderMode: RenderMode.Client,
            }
        }}, 

    { path: 'sobre', component: Sobre },
    { path: 'projetos', component: Projetos },
    { path: 'experiencias', component: Experiencias },
    { path: 'contato', component: Contato },

    { path: '**', redirectTo: '/' }
];