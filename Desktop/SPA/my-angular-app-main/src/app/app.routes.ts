import { Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list'; 
import { ItemDetailsComponent } from './components/item-details/item-details'; 

export const routes: Routes = [
  // Маршрут для списку
  {
    path: 'items',
    component: ItemsListComponent
  },
  // Динамічний маршрут для деталей
  {
    path: 'items/:id',
    component: ItemDetailsComponent
  },
  // Редирект з кореневого шляху
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  }
];