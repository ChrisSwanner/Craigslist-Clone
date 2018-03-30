import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale.model';
import { SalesComponent } from '../sales.component';
@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, price: number, category: string) {
    this.addingSale = false;
    let newSale: Sale = new Sale(title,description,price,category);
    this.sales.push(newSale);
  }

  addNewSale() {
    this.addingSale = true;
  }

  public addingSale: boolean = false;


}
