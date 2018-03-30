import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SalesComponent } from './sales/sales.component';



const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule  .forRoot(appRoutes);
