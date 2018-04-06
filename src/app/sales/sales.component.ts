import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale.model';
import { Router } from '@angular/router';
import { SaleService } from '../sale.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers: [SaleService]
})
export class SalesComponent implements OnInit {

  sales: FirebaseListObservable<any[]>;
  filteredSales: Sale[] = [];

  // currentRoute: string = this.router.url;
  public addingSale: boolean = false;
  public salesFilter: boolean = false;
  saleDisplay;
  public normal: boolean = true;
  public isFiltering: Boolean = false;


  addNewSale() {
    this.addingSale = true;
    this.normal = false;
    this.isFiltering = false;
  }

  submitRedirect() {
    this.router.navigate(['/']);
  }

  constructor(private router: Router, private saleService: SaleService) { }


  ngOnInit() {
    this.saleService.getSales().subscribe(dataLastEmittedFromObserver => {
      this.saleDisplay = dataLastEmittedFromObserver;
    })
    console.log(this.saleDisplay);

  }

  submitForm(title: string, description: string, price: number, category: string) {
    this.addingSale = false;
    let newSale: Sale = new Sale(title,description,price,category);
    this.saleService.addSale(newSale);
    this.submitRedirect();
  }

  filterSales(category) {
    this.filteredSales = [];
    this.salesFilter = true;
    for (let i = 0; i < this.saleDisplay.length; i++) {
      if(this.saleDisplay[i].category === category) {
        this.filteredSales.push(this.saleDisplay[i]);
      }
    }
  }

}


