import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../common/order';
import { API_URL } from '../common/app.constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private endpoint = "/api/v1/orders"

  constructor(private http: HttpClient) { }

  createOrder(order: Order):Observable<Order>{
    return this.http.post<Order>(API_URL + this.endpoint, order)
  }

  updateOrder(formData:any):Observable<any>{
    return this.http.post(API_URL + this.endpoint + "/update/state/order", formData)
  }

  getOrderByUser(userId: number):Observable<Order[]> {
    return this.http.get<Order[]>(API_URL + this.endpoint + "/user-id/" + userId)
  }

  getOrderById(id: number):Observable<Order> {
    return this.http.get<Order>(API_URL + this.endpoint + "/" + id)
  }


}
