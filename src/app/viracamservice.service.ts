import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from './model/product';
import {HttpHeaders} from '@angular/common/http';
@Injectable()
export class ViracamserviceService {
  // public baseUrl: String = '/ViraCamServer';
  public baseUrl: String = 'http://176.31.82.40:8080/ViraCamServer';
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

  loadAllUsers() {
    return this.http.get(this.baseUrl + '/users/loadallusers');
  }

  loadAllUsersOrders() {
    return this.http.get(this.baseUrl + '/userorder/loadallusersorders');
  }

  loadFactorDetails(id) {
    return this.http.get(this.baseUrl + '/userorder/loadallusersordersbyid/' + id);
  }

  confirmOrder(id) {
    return this.http.get(this.baseUrl + '/userorder/confirmOrder/' + id);
  }

  cancelOrder(id) {
    return this.http.get(this.baseUrl + '/userorder/cancelOrder/' + id);
  }

  deleteProduct(product: Product) {
    return this.http.post(this.baseUrl + '/product/deleteProduct/', product);
  }
}
