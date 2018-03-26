import {Component, OnInit} from '@angular/core';
import {UploadImageService} from '../services/upload-image.service';
import {ViracamserviceService} from '../viracamservice.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';
import {ProductCategory} from '../model/productCategory';
import {ActivatedRoute} from '@angular/router';
import {ProductImages} from "../model/productImages";
import {ProductProperties} from "../model/productProperties";

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent implements OnInit {

  newProduct: Product;
  angForm: FormGroup;
  productTypes: Array<ProductCategory>;
  productAdded = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder
    , private service: ViracamserviceService, public uploadImageService: UploadImageService) {
    this.createForm();
    this.productTypes = new Array();
    this.service.loadAllPRoductTypes().subscribe(data => {
      this.productTypes = data.json();
    }, error2 => {
      console.log(error2);
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      productCode: ['', Validators.required],
      productType: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.service.loadProduct(id).subscribe(data => {
            this.newProduct = data.json();
          }, error => {
            console.log(error);
          }
        );
      }
    });
  }
  addNewPicture() {
    this.newProduct.productImages.push(new ProductImages());
  }

  addNewProperties() {
    this.newProduct.productProperties.push(new ProductProperties());
  }

  saveProduct() {
    this.service.saveProduct(this.newProduct).subscribe(
      res => {
        console.log('result is ' + res.json());
        console.log('ID by JSON parse=' + JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
        this.uploadImageService.upload(res.json()['id']);
        this.productAdded = true;
        this.newProduct = new Product();
      },
      error => {
        console.log(error);
      }
    );
  }


}
