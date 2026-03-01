import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { availableFlight } from './availableFlight';
import { Flight } from '../Bean/Flight';
import { FlightSchedule } from '../Bean/FlightSchedule';
import { AngularAppEngine } from '@angular/ssr';

@Component({
  selector: 'app-flight-booking',
  standalone: false,
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent {
  isEditable: boolean = false;
  origin: string = '';
  destination: string = '';
  flightName: string = '';
  passengerName: string = '';

  flightId?: number;
  fId?: number;
  numSeats: number = 0;
  seatCategory: string = '';
  travelDate: string = '';
  bookingStatus: string = 'Booked';
  bookingAmount: number = 0;

  isError: boolean = false;
  userId?: number;
  locations: string[] = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bengaluru','Hyderabad'];
  url?: string;
  availableFlights: availableFlight[] = [];
  flights: Flight[] = [];
  flightschedules: FlightSchedule[] = [];
  filteredFlights: any[] = [];
  flag: number = 0;
  dateerror?: string;
  constructor(private route: ActivatedRoute,private router:Router, private http: HttpClient) { }

  amount() {
    this.availableFlights.forEach((flightAmount) => {
      if (flightAmount.flightId == this.flightId) {
        if (this.seatCategory === 'Economy') {
          this.bookingAmount = flightAmount.airFair * 1.0 * this.numSeats;
        }
        else if (this.seatCategory === 'Executive') {
          this.bookingAmount = flightAmount.airFair * 1.3 * this.numSeats;
        }
        else {
          this.bookingAmount = flightAmount.airFair * 2.5 * this.numSeats;
        }

      }
    });

  }

  onchange() {
    this.bookingAmount = 0;
  }

  filterFlights(): void {

    if (this.flag === 0) {
      this.searchFlight();
    }
    this.flightName = '';
    this.filteredFlights = [];
    if (this.origin === this.destination) {
      alert("Origin and Destination cannot be the same.");
      return;
    }

    const selectedDate = new Date(this.travelDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
      alert('Please enter a Valid date.');
      return;
    }

    this.filteredFlights = this.availableFlights.filter(
      flight => flight.origin == this.origin && flight.destination == this.destination && this.travelDate == flight.date
    );

    if (this.filteredFlights.length === 0) {
      this.bookingStatus = "No flights available for the selected route.";
      this.isError = true;
    } else {
      this.bookingStatus = '';
    }

  }

  searchFlight() {
    this.flightschedules.forEach((schedule) => {
      this.flights.forEach((flightDetails) => {
        if (schedule.flightID == flightDetails.flightID) {
          console.log(schedule.flightID);
          this.availableFlights.push(new availableFlight(schedule.flightID, flightDetails.origin, flightDetails.destination, flightDetails.airFare, schedule.dateOfTravel));
        }
      })
    })
    this.flag = 1;
  }

  ngOnInit() {
    const userID = this.route.snapshot.paramMap.get('userId');
    if (userID) {
      this.userId = +userID;
    }

    this.url = "http://localhost:8082/viewflightschedule"
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.flightschedules = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });

    this.url = "http://localhost:8082/listflight"
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.flights = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });


  }

  onBack(){
    this.router.navigate(['/user-dashboard',this.userId]);
  }

  onSubmit() {
    // alert(this.flightId);
    // return;
    const flight = JSON.stringify({
      'flightID': this.flightId,
      'userID': this.userId,
      'noOfSeats': this.numSeats,
      'seatCategory': this.seatCategory,
      'dateOfTravel': this.travelDate,
      'bookingStatus': 'Booked',
      'bookingAmount': this.bookingAmount
    });
    if (confirm("Do Want to confirm Booking")) {
      this.url = "http://localhost:8082/flightbooking";
      const headers = { 'content-type': 'application/json' };
      this.http.post<any>(this.url, flight, { headers }).subscribe({

        next: data => {
          alert(JSON.stringify(data));
          this.router.navigate(['/user-dashboard',this.userId]);
        },
        error: error => {
          console.log(JSON.stringify(error));
        }
      });
    }
  }
}

