import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {ProductOrder} from '../model/ProductOrder';

@Injectable()
export class OrderServiceService {

  private baseUrl: String = '/ViraCamServer';

  constructor(private http: Http) {
  }

  loadAllOrders() {
    return this.http.get(this.baseUrl + '/productorder/loadalluserorders');
  }

  confirmProductOrder(order: ProductOrder) {
    return this.http.post(this.baseUrl + '/productorder/confirmProductOrder', order);
  }

}
