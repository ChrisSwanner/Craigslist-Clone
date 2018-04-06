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

  getSaleById(projectId: string) {
    return this.database.object('sales/' + projectId);
}

  deleteSale(localSaleToDelete) {
    let saleInFirebase = this.getSaleById(localSaleToDelete.$key);
    saleInFirebase.remove();
    this.getSaleById(localSaleToDelete.price).remove();
  }

  updateSale(localSaleToUpdate) {
    let projectEntryInFirebase = this.getSaleById(localSaleToUpdate.$key);
    projectEntryInFirebase.update({title: localSaleToUpdate.title,
    description: localSaleToUpdate.description,
    price: localSaleToUpdate.price,
    category: localSaleToUpdate.category
   })
  }
}
