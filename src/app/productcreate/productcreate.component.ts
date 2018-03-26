import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';
import {ProductImages} from '../model/productImages';
import {ProductProperties} from '../model/productProperties';
import {ProductCategory} from '../model/productCategory';
import {ViracamserviceService} from '../viracamservice.service';
import {UploadImageService} from '../services/upload-image.service';


@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.css']
})
export class ProductcreateComponent implements OnInit {

  newProduct: Product;
  angForm: FormGroup;
  productTypes: Array<ProductCategory>;
  productAdded = false;

  constructor(private fb: FormBuilder, private service: ViracamserviceService, public uploadImageService: UploadImageService) {
    this.createForm();
    this.productTypes = new Array();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      cost: ['', Validators.required],
      productCode: ['', Validators.required],
      productType: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.service.loadAllPRoductTypes().subscribe(data => {
      this.productTypes = data.json();
    }, error2 => {
      console.log(error2);
    });

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
        this.newProduct = new Product();
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

  addProductDescription(fileInput: any, index) {
    console.log(fileInput.target.value);
    this.newProduct.productProperties[index].value = fileInput.target.value;
  }

  setImageValue (fileInput: any, i) {
    this.uploadImageService.fileChangeEvent(fileInput);
    this.newProduct.productImages[i].filename = fileInput.target.files[0].name;
    this.newProduct.productImages[i].photo = fileInput.target.files[0].file;
  }
}
