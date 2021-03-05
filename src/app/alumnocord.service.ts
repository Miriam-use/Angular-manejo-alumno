import { Injectable } from '@angular/core';
import { Observable } from "rxjs";  
import {HttpHeaders, HttpClient } from "@angular/common/http";  
import { Alumno } from "../app/alumno"; 

@Injectable()
export class AlumnocordService {

  Url="http://localhost:8080/Api/Alumno/";  
  constructor(private http:HttpClient) { }  
   InsertEmployee(employee:Alumno)  
   {  
     debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.post<Alumno[]>(this.Url+'/InsertEmployee/', employee,httpOptions)  
   }  
   GetEmployeeRecord():Observable<Alumno[]>  
   {  
     debugger;  
    return this.http.get<Alumno[]>(this.Url+"/GetAllEmployee")  
   }  
   DeleteEmployee(id:string):Observable<number>  
   {  
     debugger;  
    return this.http.get<number>(this.Url + '/Delete/?id='+id);  
   }  
   GetEmployeeById(id:string)  
   {  
    return this.http.get<Alumno>(this.Url + '/GetEmployeeById/?id=' + id);  
   }  
   UpdatEmplouee(employee:Alumno)  
   {  
    debugger;  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
     return this.http.post<Alumno[]>(this.Url+'/UpdateEmployee/', employee,httpOptions)  
   }

}
