import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-productindex',
  templateUrl: './productindex.component.html',
  styleUrls: ['./productindex.component.css']
})
export class ProductindexComponent implements OnInit {
  products: Array<Product>;
  constructor() { }

  ngOnInit() {
  }

}
