import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {


  a:String="http://localhost:8080";
  constructor(private http:HttpClient) {
  
   }
  getsalarydetails():Observable<any>
  {
    return this.http.get(this.a+"/getsalerydetails");

  }
  addSalary(value: any):Observable<any>
  {

    return this.http.post(this.a+"/addsalarydetails",value);
  }

deleteSalary(serial_number:number):Observable<any>
{
  return this.http.delete(this.a+`/deletesalarydetails`,{params: {customer_bill_id:serial_number}})
}

}
