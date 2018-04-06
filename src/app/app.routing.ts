import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders }  from '@angular/core';
import { HomeItemsComponent} from './home-items/home-items.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SalesComponent } from './sales/sales.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { ElectronicsComponent } from './electronics/electronics.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { JewelryComponent } from '../app/jewelry/jewelry.component'
export const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'sales',
        component: SalesComponent
    },
    {
        path: 'details/:id',
        component: SaleDetailComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'electronics',
        component: ElectronicsComponent
    },
    {
        path: 'appliances',
        component: AppliancesComponent
    },
    {
        path: 'vehicles',
        component: VehiclesComponent
    },
    {
        path: 'jewelry',
        component: JewelryComponent
    },
    {
        path: "homeItems",
        component: HomeItemsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);