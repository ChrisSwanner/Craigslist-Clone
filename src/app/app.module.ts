import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { fireConfig } from './api-keys';
import { routing } from './app.routing';
import { AuthGuardService } from './auth-guard.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SalesComponent } from './sales/sales.component';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './app.routing';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HomeItemsComponent } from './home-items/home-items.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { PhonesComponent } from './phones/phones.component';

export const firebaseMasterConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SaleDetailComponent,
    SalesComponent,
    NavbarComponent,
    AdminComponent,
    ElectronicsComponent,
    AppliancesComponent,
    VehiclesComponent,
    HomeItemsComponent,
    JewelryComponent,
    PhonesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    RouterModule.forRoot(appRoutes),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseMasterConfig),
    AngularFireAuthModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }