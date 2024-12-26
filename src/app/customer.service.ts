import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  a:String="http://localhost:8080";
  constructor(private http:HttpClient) {
  
   }
  getcustomerbilldetails():Observable<any>
  {
    return this.http.get(this.a+"/getcustomerbilldetails");

  }
  addcustomerbill(value: any):Observable<any>
  {

    return this.http.post(this.a+"/addnewuser",value);
  }
}
