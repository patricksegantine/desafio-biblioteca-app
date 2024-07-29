import { Routes } from '@angular/router';

import { CadAutoresComponent } from './components/cadastros/cad-autores/cad-autores.component';
import { CadAssuntosComponent } from './components/cadastros/cad-assuntos/cad-assuntos.component';
import { CadLivrosComponent } from './components/cadastros/cad-livros/cad-livros.component';
import { RelLivrosComponent } from './components/relatorios/rel-livros/rel-livros.component';

export const routes: Routes = [
  { path: 'cad-autores', component: CadAutoresComponent },
  { path: 'cad-assuntos', component: CadAssuntosComponent },
  { path: 'cad-livros', component: CadLivrosComponent },
  { path: 'rel-livros', component: RelLivrosComponent },
  { path: '', redirectTo: '/cad-autores', pathMatch: 'full' }
];
