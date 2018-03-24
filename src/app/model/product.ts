import {ProductImages} from "./productImages";
import {ProductProperties} from "./productProperties";
import {ProductCategory} from "./productCategory";
/**
 * Created by Mohamad on 3/22/2018.
 */
export class Product{
  name: string;
  cost: string;
  description: string;
  productCode: string;
  id: number;
  productImages: Array<ProductImages>;
  productProperties: Array<ProductProperties>;
  category: ProductCategory;

  constructor() {
  this.productImages = new Array();
  this.productProperties = new Array();
  this.category = new ProductCategory();
  }
}
