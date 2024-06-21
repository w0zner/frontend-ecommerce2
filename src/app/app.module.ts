import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SumaryOrderComponent } from './components/orders/sumary-order/sumary-order.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin/products', component: ProductListComponent},
  {path: 'admin/products/new', component: ProductAddComponent},
  {path: 'admin/products/update/:id', component: ProductAddComponent},
  {path: 'product/detail/:id', component: DetailProductComponent},
  {path: 'cart/sumary', component: SumaryOrderComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    HeaderAdminComponent,
    ProductAddComponent,
    DetailProductComponent,
    HeaderUserComponent,
    SumaryOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
