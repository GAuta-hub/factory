import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  a: String = "http://localhost:8080";

  private username: string = '';

  constructor(private http: HttpClient) { }

  setUsername(name: string) {
    this.username = name;
  }

  getUsername(): string {
    return this.username;
  }

  getUserDetails(): Observable<any> {
    return this.http.get(this.a + "/getuserdetails");
  }

  addNewUser(value: any): Observable<any> {
    console.log(value);
    return this.http.post(this.a + "/adduserdetails", value);

  }
}