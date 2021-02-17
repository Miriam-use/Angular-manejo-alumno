import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})

export class BookDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.GetBook(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        email: res['email'],
        curso: res['curso'],
        telefono: res['telefono'],
        apellido: res['apellido']
      });
    });

    this.updateForm = this.formBuilder.group({
      name: [''],
      email: [''],
      curso: [''],
      telefono: [''],
      apellido: ['']
    })
  }

  ngOnInit() { }

  onUpdate(): any {
    this.crudService.updateBook(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('¡Datos actualizados con éxito!')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
