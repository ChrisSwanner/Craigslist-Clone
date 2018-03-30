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
  ]

  // currentRoute: string = this.router.url;
  public addingSale: boolean = false;

  addNewSale() {
    this.addingSale = true;
  }

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, price: number) {
    this.addingSale = false;
    let newSale: Sale = new Sale(title,description,price);
    this.sales.push(newSale);
  }

}
