import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_raiz = "http://localhost:3000";
  private url_endpoint = "/api/v1/users"

  constructor(private http: HttpClient) { }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(this.api_raiz + this.url_endpoint + "/" + id);
  }
}
