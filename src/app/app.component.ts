import {Component, ElementRef, ViewChild} from '@angular/core';
import {Product} from './model/Product';
import {ProductserviceService} from './services/productservice.service';
import {UploadImageService} from './services/upload-image.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private loggedIn = true;
  constructor() {
    document.querySelector('body').dir = 'rtl';

  }
}
