import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SalesComponent } from './sales/sales.component';
import { fireConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { AuthGuardService } from './auth-guard.service';
import { AngularFireAuthModule } from 'angularfire2/auth';





export const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SalesComponent,
    SaleDetailComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
