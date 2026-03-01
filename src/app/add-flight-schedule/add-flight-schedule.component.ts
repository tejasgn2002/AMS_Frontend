import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-flight-schedule',
  standalone: false,
  templateUrl: './add-flight-schedule.component.html',
  styleUrl: './add-flight-schedule.component.css'
})
export class AddFlightScheduleComponent {

  flightID?: number;
  dateOfTravel?: string;
  businessClassBookedCount?: number;
  economyClassBookedCount?: number;
  executiveClassBookedCount?: number;
  url?:string;

  constructor(private http:HttpClient) { }

  onSchedule() {

    if (this.flightID == undefined ||
      this.dateOfTravel == undefined ||
      this.businessClassBookedCount == undefined ||
      this.economyClassBookedCount == undefined ||
      this.executiveClassBookedCount == undefined 
    ){
      alert("No fields cannot be empty");
      return;
    }

    const flightschedule = JSON.stringify({
      'flightID': this.flightID,
      'dateOfTravel': this.dateOfTravel,
      'businessClassBookedCount': this.businessClassBookedCount,
      'economyClassBookedCount': this.economyClassBookedCount,
      'executiveClassBookedCount': this.executiveClassBookedCount
    });

    this.url = "http://localhost:8082/addflightschedule";
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>(this.url, flightschedule, { headers }).subscribe({

      next: data => {
        alert(JSON.stringify(data));
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });

  }

}
