import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private api_raiz = "http://localhost:3000";
  private url_endpoint = "/api/v1/categories"

  constructor(private http: HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.api_raiz + this.url_endpoint)
  }

  getCategoryById(id: number):Observable<Category> {
    return this.http.get<Category>(this.api_raiz + this.url_endpoint + "/" + id)
  }

  saveCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(this.api_raiz + this.url_endpoint, category)
  }

  deleteCategory(id: number):Observable<any> {
    return this.http.delete(this.api_raiz + this.url_endpoint + "/" + id)
  }
}
