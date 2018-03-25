import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from './model/product';
@Injectable()
export class ViracamserviceService {
  private baseUrl: String = '/ViraCamServer';
  constructor(private http: Http) {
  }

  loadAllPRoductTypes() {
    return this.http.get(this.baseUrl + '/product/loadAllProductTypes');
  }

  saveProduct(product: Product) {
    return this.http.post(this.baseUrl + '/product/add', product);
  }

  loadAllProducts() {
    return this.http.get(this.baseUrl + '/product/loadAllProducts');
  }

  loadProduct(id) {
    return this.http.get(this.baseUrl + '/product/loadProductById?id=' + id);
  }

  loadAllUserOrders() {
    return this.http.get(this.baseUrl + '/productorder/loadalluserorders');
  }
}
