import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [
    new Sale('Used Bike', 'I have had it for 20 years, its old and rusty', 100)
  ];

  filteredSales: Sale[] = [];

  // currentRoute: string = this.router.url;
  public addingSale: boolean = false;
  public saleFilter: boolean = false;

  addNewSale() {
    this.addingSale = true;
  }

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, price: number) {
    this.addingSale = false;
    let newSale: Sale = new Sale(title,description,price,category);
    this.sales.push(newSale);
  }

  filterSales(category) {
    this.filteredSales = [];
    this.saleFilter = true;
    for (let i = 0; i < this.sales.length; i++) {
      if(this.sales[i].category === category) {
        this.filteredSales.push(this.sales[i]);
      }
    }
  }

}
