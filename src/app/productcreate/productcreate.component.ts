import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Product} from "../model/product";
import {ProductImages} from "../model/productImages";
import {ProductProperties} from "../model/productProperties";
import {ProductCategory} from "../model/productCategory";
import {ViracamserviceService} from "../viracamservice.service";


@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  newProduct: Product;
  angForm: FormGroup;
  productTypes: Array<ProductCategory>;

  constructor(private router: Router, private fb: FormBuilder, private service: ViracamserviceService) {
    this.createForm();
    this.productTypes = new Array();
    this.service.loadAllPRoductTypes().subscribe(data => {
      this.productTypes = data.json();
    },error2 => {
      console.log(error2);
    });
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      productCode: ['', Validators.required],
      productType: ['',Validators.required],
      description: ['', Validators.required]
    });
    this.newProduct = new Product();
  }


  ngOnInit() {
  }

  saveProduct() {
    this.service.saveProduct(this.newProduct).subscribe(
      res => {
        console.log('result is ' + res.json());
        console.log('ID by JSON parse=' + JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.uploadImageService.upload(res.json()['id']);
        this.productAdded = true;
        this.newProduct = new Product('', '', '');
      },
      error => {
        console.log(error);
      }
    );
  }

  addNewProperties() {
    this.newProduct.productProperties.push(new ProductProperties());
  }

  clearProperty(i) {
    this.newProduct.productProperties.splice(i, 1);
  }

  addNewPicture() {
    this.newProduct.productImages.push(new ProductImages());
  }

  clearImage(id) {
    this.newProduct.productImages.splice(id, 1);
  }
}
