import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";  
import { FormGroup, FormControl } from '@angular/forms';  
import { AlumnocordService } from "../alumnocord.service";  
import { Alumno } from "../alumno";  
import { Observable } from "rxjs";  
import { identifierModuleUrl } from '@angular/compiler';  
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addalumno',
  templateUrl: './addalumno.component.html',
  styleUrls: ['./addalumno.component.css']
})
export class AddalumnoComponent implements OnInit {

  massage: string;  
  dataSaved = false;  
  Addemployee:FormGroup;  
  EmployeeIdUpdate = "0";  
  constructor(private router: Router,private emprecordService:AlumnocordService) { }  
  
  InsertEmployee(employee:Alumno)  
  {  
debugger;  
    if (this.EmployeeIdUpdate != "0") employee.id=this.EmployeeIdUpdate;  
      this.emprecordService.InsertEmployee(employee).subscribe(  
        ()=>  
        {  
          if (this.EmployeeIdUpdate == "0") {  
            this.massage = 'Saved Successfully';  
    
          }  
          else  
          {  
            this.massage = 'Update Successfully';  
          }  
          this.dataSaved = true;  
          this.router.navigate(['/employee']);  
        })  
  }  
  onFormSubmit() {  
    const Emp = this.Addemployee.value;  
    this.InsertEmployee(Emp);  
  }  
    
  EmployeeEdit(id: string) {  
    debugger;  
    this.emprecordService.GetEmployeeById(id).subscribe(emp => {  
      this.massage = null;  
      this.dataSaved = false;  
      debugger;  
      this.EmployeeIdUpdate=id;  
      this.Addemployee.controls['Name'].setValue(emp.name);  
      this.Addemployee.controls['Apellido'].setValue(emp.apellido);  
      this.Addemployee.controls['Curso'].setValue(emp.curso);  
      this.Addemployee.controls['Email'].setValue(emp.email);  
      this.Addemployee.controls['Telefono'].setValue(emp.telefono);  
    });  
    debugger;  
  }  
  clearform() {  
    debugger;  
    this.Addemployee.controls['Name'].setValue("");  
    this.Addemployee.controls['Apellido'].setValue("");  
    this.Addemployee.controls['Curso'].setValue("");  
    this.Addemployee.controls['Email'].setValue("");  
    this.Addemployee.controls['Telefono'].setValue("");  
     
  }  
  ngOnInit() {  
    this.Addemployee = new FormGroup({  
         
      Name: new FormControl(),  
      Department:new FormControl(),  
      Address:new FormControl(),  
      City:new FormControl(),  
      Country:new FormControl(),  
  });  
  let Id = localStorage.getItem("id");  
if(Id!=null)  
{  
  this.EmployeeEdit(Id) ;  
 }}

}
