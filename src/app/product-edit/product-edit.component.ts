import {Component, OnInit} from '@angular/core';
import {ProductserviceService} from '../services/productservice.service';
import {Product} from '../model/Product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public newProduct: Product = new Product('', '', '');
  public fileAddress: string;

  constructor(private service: ProductserviceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.loadProduct(id).subscribe(data => {
          this.newProduct = new Product(data.json()['title'], data.json()['cost'], data.json()['note']);
          this.fileAddress = data.json()["fileSource"] != null ? 'http://localhost:8080/ViraCamServer/product/files?id=' + data.json()["id"] +
            '&filename=' + data.json()["fileSource"] : "";
        }, error => {
          console.log(error);
        });
      }
    });
  }

}
