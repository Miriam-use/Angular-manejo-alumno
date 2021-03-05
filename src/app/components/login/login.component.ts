import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../service/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient){

	}
	
	validateLogin(user: User){
		return this.http.post('/books-list',{
			username : user.username,
			password : user.password
		})
	}

  ngOnInit(): void {
  }

}
