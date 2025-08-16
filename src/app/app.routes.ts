import { Routes } from '@angular/router';
import { Sobre } from './pages/sobre/sobre';
import { Projetos } from './pages/projetos/projetos';
import { Experiencias } from './pages/experiencias/experiencias';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
    // Rota padrão: se a URL estiver vazia, redireciona para /sobre
    { path: '', redirectTo: '/sobre', pathMatch: 'full' }, 

    // Rotas para cada página
    { path: 'sobre', component: Sobre },
    { path: 'projetos', component: Projetos },
    { path: 'experiencias', component: Experiencias },
    { path: 'contato', component: Contato },

    // Rota coringa: se a URL não existir, redireciona para /sobre (opcional)
    { path: '**', redirectTo: '/sobre' }
];