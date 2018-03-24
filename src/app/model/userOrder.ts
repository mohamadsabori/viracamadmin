import {ProductOrder} from "./productOrder";
import {ShippingMethod} from "./shippingMethod";
/**
 * Created by Mohamad on 3/22/2018.
 */
export interface UserOrder{
  id: number;
  orderset: Array<ProductOrder>;
  userFullName: string;
  userPhoneNumber: string;
  userAddress: string;
  shippingMethod: ShippingMethod;
}
