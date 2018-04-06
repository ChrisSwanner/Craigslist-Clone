import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuardService } from '../auth-guard.service';
import { SaleDetailComponent } from '../sale-detail/sale-detail.component';
import { Sale } from '../sale.model';
import { SalesComponent } from '../sales/sales.component';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService, AuthGuardService, SalesComponent, SaleService]
})
export class NavbarComponent implements OnInit{
  user;
  private LoggedOut: Boolean;
  private LoggedIn: Boolean;
  private admin: Boolean;
  private userName: String;
  

  constructor(public authService: AuthService, private salesComponent: SalesComponent, private saleService: SaleService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.LoggedOut = true;
        this.admin = false;
        this.LoggedIn = false;
      } else {
        this.LoggedOut = false;
        this.admin = true;
        this.LoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit() {
    this.saleService.getSales().subscribe(dataLastEmittedFromObserver => {
      this.saleDisplay = dataLastEmittedFromObserver;

  })
  this.salesComponent.sales = this.saleService.getSales();
}


  
  private saleDisplay = this.salesComponent.saleDisplay;
  public saleArray;
  public empty: boolean;

  login() {
    this.authService.login();
    this.LoggedOut = false;
    this.admin = true;
    this.LoggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.LoggedOut = true;
    this.admin = false;
    this.LoggedIn = false;
  }
}