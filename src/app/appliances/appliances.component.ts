import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SalesComponent } from '../sales/sales.component';
import { SaleService } from '../sale.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css'],
  providers: [NavbarComponent, SalesComponent, SaleService]
})
export class AppliancesComponent implements OnInit {

  constructor(private navBar: NavbarComponent, private salesComponent: SalesComponent, private saleService: SaleService) { }

  sales = this.salesComponent.sales;
  public filteredSales = [];
  saleDisplay;
  public empty: Boolean = true;
  public salesArray;
    ngOnInit() {
      this.saleService.getSales().subscribe(dataLastEmittedFromObserver => {
        this.saleDisplay = dataLastEmittedFromObserver;
        for (let i = 0; i < this.saleDisplay.length; i++) {
          if (this.saleDisplay[i].category != "Vehicles" && this.saleDisplay[i].category != "Electronics" &&  this.saleDisplay[i].category != "Home Items" ) {
            this.filteredSales.push(this.saleDisplay[i]);
            console.log(this.filteredSales)
          } else  {
            this.empty = false;
            console.log("null")
            
        }
      }
    })
  }
}