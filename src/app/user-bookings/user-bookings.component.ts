import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../Bean/user';
import { FlightSchedule } from '../Bean/FlightSchedule';
import { FlightBooking } from '../Bean/FlightBooking';
import { Flight } from '../Bean/Flight';

interface Booking {
  bookingId: number;
  flightId: number;
  flightName: string;
  origin: string;
  destination: string;
  passengerName: string;
  seats: number;
  seatCategory: string;
  travelDate: string;
  bookingStatus: string;
  bookingAmount: number;
}

@Component({
  selector: 'app-user-bookings',
  standalone: false,
  templateUrl: './user-bookings.component.html',
  styleUrl: './user-bookings.component.css'
})

export class UserBookingsComponent implements OnInit {
  bookings: Booking[] = [];
  message: string = '';
  userId?: number;
  user: User = {
    "userID": 0,
    "userName": "",
    "password": "",
    "role": "",
    "customerCategory": "",
    "phone": 0,
    "emailId": "",
    "address1": "",
    "address2": "",
    "city": "",
    "state": "",
    "country": "",
    "zipCode": 0,
    "dOB": ""
  };
  url: string = '';
  flightBooking: FlightBooking[] = [];
  flight: Flight[] = [];
  constructor(private route: ActivatedRoute,private router:Router, private http: HttpClient) { }
  ngOnInit(): void {

    const userID = this.route.snapshot.paramMap.get('userId');
    if (userID) {
      this.userId = +userID;
    }

    this.url = "http://localhost:8082/searchuser/" + this.userId;
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.user = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });

    this.url = "http://localhost:8082/userflightbooking/" + this.userId;
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.flightBooking = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });

    this.url = "http://localhost:8082/listflight";
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.flight = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });

  }

  onBack(){
    this.router.navigate(['/user-dashboard',this.userId]);
  }

  cancelBooking(booking: FlightBooking): void {

    if (confirm("Do you want to cancel the Flight Booking: " + booking.bookingID)) {
      booking.bookingStatus = 'Cancelled';
      this.url = "http://localhost:8082/cancelflightbooking/" + booking.bookingID;
      this.http.get<any>(this.url).subscribe({
        next: data => {
          alert(JSON.stringify(data));
        },
        error: error => {
          console.log(JSON.stringify(error));
        }
      });
    }
  }
}
