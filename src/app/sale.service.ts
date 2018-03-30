import { Injectable } from '@angular/core';
import { Sale } from './sale.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class SaleService {

  constructor(private database: AngularFireDatabase) {
    this.sales = database.list('sales');
   }

  sales: FirebaseListObservable<any[]>;


  getSales() {
    return this.sales;
  }

  addSale(newSale: Sale) {
  this.sales.push(newSale);
  }
}
