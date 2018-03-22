import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {ProductserviceService} from './services/productservice.service';
import {UploadImageService} from './services/upload-image.service';
import {RouterModule, Routes} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OrderServiceService} from './services/order-service.service';
import {UserserviceService} from "./services/userservice.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product-add',
    component: ProductAddComponent
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'order-list',
    component: OrderListComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    UserListComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [ProductserviceService, UploadImageService, OrderServiceService, UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
