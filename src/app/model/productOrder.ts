import {Product} from "./product";
import {SystemUsers} from "./systemUsers";
import {Category} from "./category";
import {UserOrder} from "./userOrder";
/**
 * Created by Mohamad on 3/22/2018.
 */
export interface ProductOrder{
  id: number;
  product: Product;
  user: SystemUsers;
  orderDate: string;
  orderTime: string;
  orderStatus: Category;
  userOrder: UserOrder;
  qty: number;
  totalPrice: number;
}
