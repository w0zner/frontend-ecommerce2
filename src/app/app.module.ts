import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailProductComponent } from './components/cart/detail-product/detail-product.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SumaryOrderComponent } from './components/orders/sumary-order/sumary-order.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryAddComponent } from './components/category/category-add/category-add.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { HeaderAdminComponent } from './components/headers/header-admin/header-admin.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { HeaderUserComponent } from './components/headers/header-user/header-user.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { LoginComponent } from './components/authentication/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'admin/products', component: ProductListComponent},
  {path: 'admin/products/new', component: ProductAddComponent},
  {path: 'admin/products/update/:id', component: ProductAddComponent},
  {path: 'admin/categories', component: CategoryListComponent},
  {path: 'admin/categories/new', component: CategoryAddComponent},
  {path: 'admin/categories/update/:id', component: CategoryAddComponent},
  {path: 'product/detail/:id', component: DetailProductComponent},
  {path: 'cart/sumary', component: SumaryOrderComponent},
  {path: 'user/register', component: RegistrationComponent},
  {path: 'user/login', component: LoginComponent},
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
    SumaryOrderComponent,
    CategoryListComponent,
    CategoryAddComponent,
    RegistrationComponent,
    LoginComponent
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
