import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from '../Bean/user';

@Component({
  selector: 'app-view-customer',
  standalone: false,
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {
  
Users:User[]=[]; 
  url: string = '';
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.url = "http://localhost:8082/listuser"
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.Users = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }


}
