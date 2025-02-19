import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawmaterialsService {

   a:String="http://localhost:8080";
  
    constructor(private http:HttpClient) {}

     getRawMaterialDetails():Observable<any> {
       return this.http.get(this.a+"/getrawmaterialsdetails");
      }
    
      addRawMaterials(value: any):Observable<any>
      {
    
        return this.http.post(this.a+"/addrawmaterialsdetails",value);
      }
    
    deleteRawMaterial(rawmaterial_id:number):Observable<any>
    {
      return this.http.delete(this.a+`/deleterawmaterials`,{params: {rawmaterial_id:rawmaterial_id}})
    }
}
