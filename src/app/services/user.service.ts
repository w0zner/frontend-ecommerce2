import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { API_URL } from '../common/app.constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = "/api/v1/users"

  constructor(private http: HttpClient) { }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(API_URL + this.endpoint + "/" + id);
  }
}
