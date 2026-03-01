import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FlightBooking } from '../Bean/FlightBooking';

@Component({
  selector: 'app-view-booking',
  standalone: false,
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent {
   bookings:FlightBooking[]=[]; 
  url: string = '';
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.url = "http://localhost:8082/listflightbooking"
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.bookings = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
  
  }
  