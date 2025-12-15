// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard'; 

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full'
    },
    // *** МАРШРУТ, ЯКИЙ ВИРІШУЄ ПОМИЛКУ NG04002 ***
    {
        path: 'items',
        loadComponent: () => import('./components/items-list/items-list').then(m => m.ItemsListComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'items/add',
        canActivate: [authGuard], 
        loadComponent: () => import('./components/item-form/item-form').then(m => m.ItemFormComponent)
    },
    {
        path: 'items/:id',
        loadComponent: () => import('./components/item-details/item-details').then(m => m.ItemDetailsComponent)
    },
    {
        path: '**',
        redirectTo: 'items'
    }
];