import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthGuardService } from '../auth-guard.service';
import { ProjectDetailComponent } from '../sale-detail/sale-detail.component';
import { Sale } from '../sale.model';
import { SalesComponent } from '../sales/sales.component';
import { SaleService } from '../sale.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService, AuthGuardService, AllProjectsComponent, ProjectService]
})
export class NavbarComponent implements OnInit{
  user;
  private LoggedOut: Boolean;
  private LoggedIn: Boolean;
  private admin: Boolean;
  private userName: String;
  

  constructor(public authService: AuthService, private allProjectsComponent: AllProjectsComponent, private saleService: ProjectService) {
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
    this.saleService.getProjects().subscribe(dataLastEmittedFromObserver => {
      this.saleDisplay = dataLastEmittedFromObserver;

  })
  this.allProjectsComponent.sales = this.saleService.getProjects();
}


  
  private saleDisplay = this.allProjectsComponent.saleDisplay;
  public productArray;

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

  charityFilter() {
   
    this.productArray = [];

    for (let i = 0; i < this.saleDisplay.length; i++) {
      if (this.saleDisplay[i].saleType === "charity") {
        this.productArray.push(this.saleDisplay[i]);
      } else {
        return null;
      }
    }
  }

  ideaFilter() {
    
   
    this.productArray = [];

    for (let i = 0; i < this.saleDisplay.length; i++) {
      if (this.saleDisplay[i].saleType === "idea") {
        this.productArray.push(this.saleDisplay[i]);
      } else {
        return null;
    }
  }
}

  productFilter() {
    this.productArray = [];
    for (let i = 0; i < this.saleDisplay.length; i++) {
      if (this.saleDisplay[i].saleType != "idea" && this.saleDisplay[i].saleType != "charity") {
        this.productArray.push(this.saleDisplay[i]);
      } else {
        console.log("null")
        
    }
  }
  
}

}