import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  
  a:String="http://localhost:8080";

  constructor(private http:HttpClient) {

  }

  getInventoryDetails():Observable<any> {
   return this.http.get(this.a+"/getinventorydetails");
  }

   
}
