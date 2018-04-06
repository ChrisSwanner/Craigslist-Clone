import { Component, OnInit, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Sale } from '../sale.model';
import { Router, ActivatedRoute, Params, } from '@angular/router';
import { SaleService } from '../sale.service';
import { Location } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css'],
  providers: [SaleService]
})
export class SaleDetailComponent implements OnInit {
  @Input() selectedSale;
  saleId: string;
  saleDisplay;
  private editing: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location, 
    private saleService: SaleService,
    private authService: AuthService
    
  ) { }

  public admin: Boolean = this.authService.admin;
  

  ngOnInit() {
    console.log(this.admin);
    this.route.params.forEach((urlParameters) => {
      this.saleId = urlParameters['id'];
    })
    this.saleService.getSaleById(this.saleId).subscribe(dataLastEmittedFromObserver => {
      this.saleDisplay = dataLastEmittedFromObserver;

    })
  }

  edit() {
    this.editing= true;
  }

  adminRedirect() {
    this.router.navigate(['/admin'])
  }

  delete(saleToDisplay) {
    this.saleService.deleteSale(saleToDisplay);
    this.adminRedirect();
  }

  update(saleToDisplay) {
    this.saleService.updateSale(saleToDisplay);
    this.editing = false;
  }
}
