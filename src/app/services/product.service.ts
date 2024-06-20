import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api_raiz = "http://localhost:3000";
  private url_endpoint = "/api/v1/products"

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.api_raiz + this.url_endpoint);
  }

  createProduct(formData:any):Observable<any> {
    return this.http.post<Product>(this.api_raiz + this.url_endpoint, formData);
  }

  deleteProductById(id: number):Observable<any> {
    return this.http.delete(this.api_raiz + this.url_endpoint + "/" + id);
  }

  getProductById(id: number):Observable<Product> {
    return this.http.get<Product>(this.api_raiz + this.url_endpoint + "/" + id);
  }
}
