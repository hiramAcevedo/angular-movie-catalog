// app.routes.ts
import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

export const routes: Routes = [
    { path: '', component: MovieListComponent }, // Ruta principal: Catálogo
    { path: 'movie/:id', component: MovieDetailComponent }, // Ruta dinámica: Detalles de película
    { path: '**', redirectTo: '' }
];
