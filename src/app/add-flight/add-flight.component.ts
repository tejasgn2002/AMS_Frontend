import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  standalone: false,
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css'
})
export class AddFlightComponent {

  carrierID?: number;
  origin?: string;
  destination?: string;
  airFare?: number;
  seatCapacityEconomyClass?: number;
  seatCapacityBusinessClass?: number;
  seatCapacityExecutiveClass?: number;
  url?: string;
  validCheck?: string;

  constructor(private http: HttpClient) { }

  addFlight() {

    if (this.carrierID == undefined ||
      this.origin == undefined ||
      this.destination == undefined ||
      this.airFare == undefined ||
      this.seatCapacityEconomyClass == undefined ||
      this.seatCapacityBusinessClass == undefined ||
      this.seatCapacityExecutiveClass == undefined
    ){
      alert("No fields cannot be empty");
      return;
    }


      const flight = JSON.stringify({
        'carrierID': this.carrierID,
        'origin': this.origin,
        'destination': this.destination,
        'airFare': this.airFare,
        'seatCapacityEconomyClass': this.seatCapacityEconomyClass,
        'seatCapacityBusinessClass': this.seatCapacityBusinessClass,
        'seatCapacityExecutiveClass': this.seatCapacityExecutiveClass
      });
    this.url = "http://localhost:8082/addflight";
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>(this.url, flight, { headers }).subscribe({

      next: data => {
        alert(JSON.stringify(data));
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
}
