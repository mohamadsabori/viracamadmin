import {ProductOrder} from './productOrder';
import {ShippingMethod} from './shippingMethod';
import {Category} from "./category";
/**
 * Created by Mohamad on 3/22/2018.
 */
export interface UserOrder {
  id: number;
  orderDate: string;
  orderTime: string;
  orderSerial: string;
  shippingMethodDetails: string;
  totalFactor: string;
  orderset: Array<ProductOrder>;
  userFullName: string;
  userPhoneNumber: string;
  userAddress: string;
  shippingMethod: ShippingMethod;
  orderStatus: Category;
}

/*
id
orderDate
orderSerial
orderStatus
orderTime
orderset
shippingMethod
shippingMethodDetails
totalFactor
userAddress
userFullName
userPhoneNumber
*/
