import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-login',
  standalone: false,
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  adminId?: number;
  password: string = '';
  url:string = '';
  message = '';
  validCheck:string = '';
  constructor(private router: Router,private http: HttpClient) {}

  onClick(){
    this.message = '';
  }
  
  onSubmit() {

    if(this.adminId == undefined || this.password == ''){
      this.message = "No Files cannot be Empty";
      return;
    }

    this.url="http://localhost:8082/adminlogin";
    const headers = {'content-type':'application/json'};
    const adminCheck = JSON.stringify({ 
      'adminId' : this.adminId,
      'password': this.password
    });
    this.http.post<any>(this.url,adminCheck,{headers}).subscribe({
      next: data => {
        this.validCheck = JSON.stringify(data);
        if(this.validCheck == "\"Admin Login successfully\""){
          alert(this.validCheck);
          this.router.navigate(['/admin-dashboard']);
        } 
        else{
          this.message = this.validCheck;
        }

      },
      error: error => {
        console.log(JSON.stringify(error.text));
      }
    });
  }
}

