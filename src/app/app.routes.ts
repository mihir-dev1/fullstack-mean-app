import { Routes } from '@angular/router';
import { FruitsComponent } from './components/fruits/fruits.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { categoryResolver } from './core/category.resolver';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'todo-list', pathMatch: 'full' }, // Default route
    {
        path: 'fruit',
        component: FruitsComponent,
        resolve: { category: categoryResolver }
    },
    {
        path: 'vegetables',
        component: VegetablesComponent,
        resolve: { category: categoryResolver }
    },
    {
        path: 'category/:id',
        component: CategoryDetailsComponent
    },
    {
      path:'todo-list',
      component:TodoListComponent
    },
    { path: '**', component: NotFoundComponent } // Catch-all for unknown routes
];
