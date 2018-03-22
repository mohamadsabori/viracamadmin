import {Product} from './Product';
import {SystemUsers} from './SystemUsers';
import {Category} from './Category';
export class ProductOrder {
  public id: number;
  public product: Product;
  public user: SystemUsers;
  public orderDate: String;
  public orderTime: String;
  public orderStatus: Category;
}
