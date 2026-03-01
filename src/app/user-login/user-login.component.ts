import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-login',
  standalone: false,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userId?:number;
  password?:string;
  message?:string
  validCheck:string = '';
  url?:string;
  constructor(private router: Router,private http: HttpClient) {}

  onClick(){
    this.message = '';

  }

  onRegister(){
    this.router.navigate(['/registration']); 
  }
  
  onSubmit() {
    if(this.userId == undefined || this.password === undefined){
      this.message = "No Files cannot be Empty";
      return;
    }

    this.url="http://localhost:8082/userlogin";
    const headers = {'content-type':'application/json'};
    
    const userCheck = JSON.stringify({ 
      'userId' : this.userId,
      'password': this.password
    });

    this.http.post<any>(this.url,userCheck,{headers}).subscribe({
      next: data => {
        this.validCheck = JSON.stringify(data);
        if(this.validCheck == "\"User Login successfully\""){
          alert(this.validCheck);
          this.router.navigate(['/user-dashboard',this.userId]);
        } 
        else{
          this.message = this.validCheck;
        }

      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
}
