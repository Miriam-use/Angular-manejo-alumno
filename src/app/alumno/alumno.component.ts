import { Component, OnInit } from '@angular/core';
import { AlumnocordService } from "../alumnocord.service";  
import { Alumno } from "../alumno"; 
import { Observable } from "rxjs";  
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  private emp: Observable<Alumno[]>;  
  massage:String;  
  dataSaved=false;  
  constructor(private router: Router,private emprecordService:AlumnocordService) { }  
   Loademployee()  
   {  
      debugger;  
      this.emp = this.emprecordService.GetEmployeeRecord();  
      console.log(this.emp);  
        
      debugger;  
      
   }  
   EmployeeEdit(id: string) {  
    debugger;  
   localStorage.removeItem("id");  
   localStorage.setItem("id",id.toString());  
    this.router.navigate(['/addemployee'], { queryParams: { Id: id } });  
    debugger;  
  }  
   Deleteemployee(id: string) {  
    if (confirm("Are You Sure To Delete this Informations")) {  
  
      this.emprecordService.DeleteEmployee(id).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = "Deleted Successfully";  
        }  
      );  
    }  
  }  
  ngOnInit() {  
    localStorage.clear();
    this.Loademployee();  
      
  }  

}
