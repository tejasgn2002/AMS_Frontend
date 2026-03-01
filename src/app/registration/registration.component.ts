import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { text } from 'stream/consumers';
@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  FirstName?: string;
  LastName?: string;
  Password?: string;
  Contact?: number;
  Email: string = '';
  Address1?: string;
  Address2?: string;
  City?: string;
  State?: string;
  Country?: string;
  ZipCode?: number;
  DOB?: string;
  message: string = '';
  url: string = '';
  validCheck?: string;
  Category?:string;
  greenMessage:string = '';

  constructor(private router: Router, private http: HttpClient) { }

  onClick() {
    this.message = '';
    this.greenMessage = '';
  }

  onChangePassword(){
    
  }

  onRegister() {
    if (this.FirstName === undefined || this.LastName === undefined || this.Password === undefined || this.Contact === undefined ||
      this.Email === undefined || this.Address1 === undefined || this.Address2 === undefined || this.City === undefined || this.State === undefined || this.Country === undefined
      || this.ZipCode === undefined || this.DOB === undefined || this.Category === undefined
    ) {
      this.message = "No Fields cannot be Empty";
      return;
    }

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.Email))) {
      this.message = "Enter the valid Email-Id";
      return;
    }

     if (!(/^[A-Z]+[^\s@]+@[0-9]+$/.test(this.Password)) || this.Password.length <= 8) {
      this.message = "Password must contain 8 character and Special Character  ( Eg: Password@123)";
      return;
    }
    if (!(/^[0-9]{10}$/.test(String(this.Contact)))) {
      this.message = "Enter the valid Contact Number";
      return;
    }

    if (!(/^[0-9]{5,}$/.test(String(this.ZipCode)))) {
      this.message = "Enter the valid ZipCode";
      return;
    }

    this.url = "http://localhost:8082/adduser";
    const headers = { 'content-type': 'application/json' };
    const userRegister = JSON.stringify({
      'userName': this.FirstName +" "+ this.LastName,
      'password': this.Password,
      'role': 'Customer',
      'customerCategory': this.Category,
      'phone': this.Contact,
      'emailId': this.Email,
      'address1': this.Address1,
      'address2': this.Address2,
      'city': this.City,
      'state': this.State,
      'country': this.Country,
      'zipCode': this.ZipCode,
      'dOB': this.DOB

    });



    this.http.post<any>(this.url, userRegister, { headers }).subscribe({

      next: data => {
        this.validCheck = JSON.stringify(data);
        if (this.validCheck === "\"Issue in saving Customer Information. Please check the data and try again\"" || this.validCheck === "\"Email-Id Already Exist\"") {
          this.message = this.validCheck;
        }
        else {
          alert(this.validCheck);
          this.router.navigate(['/user-login']);
        }
      },
      error: error => {
        alert(JSON.stringify(error));
      }
    });

  }
}
