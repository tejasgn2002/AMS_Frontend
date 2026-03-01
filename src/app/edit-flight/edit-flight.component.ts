import { Component } from '@angular/core';
import { Flight } from '../Bean/Flight';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-flight',
  standalone: false,
  templateUrl: './edit-flight.component.html',
  styleUrl: './edit-flight.component.css'
})
export class EditFlightComponent {
  searchFlightId?:number;
  url?:string;

  constructor(private http:HttpClient){}
  flight:Flight = {
    'flightID': 0,
    'carrierID': 0,
    'origin': '',
    'destination': '',
    'airFare':0,
    'seatCapacityEconomyClass': 0,
    'seatCapacityBusinessClass': 0,
    'seatCapacityExecutiveClass': 0
  };

  searchFlight() {
    this.url = "http://localhost:8082/searchflight/"+this.searchFlightId;
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.flight = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }

  saveFlight() {
    this.url = "http://localhost:8082/editflight";
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>(this.url, this.flight, { headers }).subscribe({

      next: data => {
        alert(JSON.stringify(data));
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
}
