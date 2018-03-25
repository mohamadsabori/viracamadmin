import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Product} from '../model/product';

@Injectable()
export class ProductserviceService {
  private baseUrl: String = '/ViraCamServer';
  constructor(private _http: Http) {
  }

  saveProduct(product: Product) {
    let headersp = new Headers({
      'Content-Type': 'application/json'
    });
    console.log('start saving...');
    return this._http.post(this.baseUrl +  '/product/add', product);
  }

  loadAllProducts() {
    console.log(this.baseUrl + '/product/loadAllProductsForClient');
    return this._http.get(this.baseUrl + '/product/loadAllProductsForClient');
  }

  loadProduct(productId) {
    return this._http.get(this.baseUrl + '/product/loadProduct?id=' + productId);
  }


}
