import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProductserviceService} from '../services/productservice.service';
import {UploadImageService} from '../services/upload-image.service';
import {Router} from '@angular/router';
import {Product} from '../model/Product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @ViewChild('costInput') costInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
  private productAdded: Boolean;
  public newProduct: Product = new Product('', '', '');
  constructor(private addProductService: ProductserviceService, private uploadImageService: UploadImageService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Hey');
    this.newProduct = new Product(this.nameInputRef.nativeElement.value, this.costInputRef.nativeElement.value
      , this.descriptionInputRef.nativeElement.value);
    console.log('newProduct=' + this.newProduct);
    this.addProductService.saveProduct(this.newProduct).subscribe(
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


}
