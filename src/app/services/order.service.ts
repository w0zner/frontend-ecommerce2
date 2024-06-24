import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private api_raiz = "http://localhost:3000";
  private url_endpoint = "/api/v1/orders"

  constructor(private http: HttpClient) { }

  createOrder(order: Order):Observable<Order>{
    return this.http.post<Order>(this.api_raiz + this.url_endpoint, order)
  }

  updateOrder(formData:any):Observable<any>{
    return this.http.post(this.api_raiz + this.url_endpoint + "/update/state/order", formData)
  }

  getOrderByUser(userId: number):Observable<Order[]> {
    return this.http.get<Order[]>(this.api_raiz + this.url_endpoint + "/user-id/" + userId)
  }

  getOrderById(id: number):Observable<Order> {
    return this.http.get<Order>(this.api_raiz + this.url_endpoint + "/" + id)
  }


}
