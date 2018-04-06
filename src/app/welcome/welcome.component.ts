import { Component, OnInit } from '@angular/core';
import { SaleService } from '../sale.service'; 
import { SalesComponent } from '../sales/sales.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [SalesComponent, SaleService]
})
export class WelcomeComponent implements OnInit {
saleDisplay;
  sales;
  constructor(private salesComponent: SalesComponent, private salesService: SaleService) { }
  ngOnInit() {
    this.salesService.getSales().subscribe(dataLastEmittedFromObserver => {
      this.saleDisplay = dataLastEmittedFromObserver;
      this.sales = this.saleDisplay;
  })
}
}
