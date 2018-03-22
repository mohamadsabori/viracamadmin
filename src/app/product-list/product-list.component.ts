import {Component, OnInit} from '@angular/core';
import {ProductserviceService} from '../services/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: Array<{ title: string, note: string, id: number, fileSource: string }>;

  constructor(private service: ProductserviceService) {
  }

  ngOnInit() {
    this.service.loadAllProducts().subscribe(data => {
      this.items = [];
      for (let i = 0; i < data.json().length; i++) {
        this.items.push({
          title: data.json()[i]["title"] != null ? data.json()[i]["title"] : "",
          note: data.json()[i]["note"] != null ? data.json()[i]["note"] : "",
          id: data.json()[i]["id"],
          fileSource: data.json()[i]["fileSource"] != null ? 'http://localhost:8080/ViraCamServer/product/files?id=' + data.json()[i]["id"] +
            '&filename=' + data.json()[i]["fileSource"] : ""
        });
      }
    });
  }

}
