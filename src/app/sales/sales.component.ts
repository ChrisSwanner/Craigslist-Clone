import { Component, OnInit } from '@angular/core';
import { Sale } from '../sale.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  currentRoute: string = this.router.url;
  public addingSale: boolean = false;

  addNewSale() {
    this.addingSale = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
