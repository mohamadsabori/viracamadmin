import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';


import {AppComponent} from './app.component';
import {ProductserviceService} from './services/productservice.service';
import {UploadImageService} from './services/upload-image.service';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OrderServiceService} from './services/order-service.service';
import {ProducteditComponent} from './productedit/productedit.component';
import {OrderindexComponent} from './orderindex/orderindex.component';
import {ProductcreateComponent} from './productcreate/productcreate.component';
import {ProductindexComponent} from './productindex/productindex.component';
import {UserindexComponent} from './userindex/userindex.component';
import {ViracamserviceService} from './viracamservice.service';
import { FactorDetailsComponent } from './factor-details/factor-details.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: 'product-list',
    component: ProductindexComponent
  },
  {
    path: 'product-add',
    component: ProductcreateComponent
  },
  {
    path: 'product-edit/:id',
    component: ProducteditComponent
  },
  {
    path: 'user-list',
    component: UserindexComponent
  },
  {
    path: 'order-list',
    component: OrderindexComponent
  },
  {
    path: 'factor-details/:id',
    component: FactorDetailsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ProductindexComponent,
    ProductcreateComponent,
    ProducteditComponent,
    UserindexComponent,
    OrderindexComponent,
    FactorDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [ProductserviceService, UploadImageService, OrderServiceService, ViracamserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
