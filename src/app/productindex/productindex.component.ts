import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ViracamserviceService} from '../viracamservice.service';

@Component({
  selector: 'app-productindex',
  templateUrl: './productindex.component.html',
  styleUrls: ['./productindex.component.css']
})
export class ProductindexComponent implements OnInit {
  products: Array<Product>;
  constructor(private service: ViracamserviceService ) {
    this.service.loadAllProducts().subscribe(
      res => {
        this.products = res.json();
      },
      error => {
        console.log(error);
      }
    );

  }

  ngOnInit() {
  }

  deleteProduct(id: any) {
    this.service.deleteProduct(id).subscribe(
      data => {
        this.products = data.json();
      },
      error => {
        console.log(error);
      }
    );
  }

}
