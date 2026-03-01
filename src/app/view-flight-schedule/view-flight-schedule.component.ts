import { Component,OnInit } from '@angular/core';
import { FlightSchedule } from '../Bean/FlightSchedule';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-flight-schedule',
  standalone: false,
  templateUrl: './view-flight-schedule.component.html',
  styleUrl: './view-flight-schedule.component.css'
})
export class ViewFlightScheduleComponent implements OnInit{

  url?:string;
  flightschedules:FlightSchedule[] = []; 

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
   this.url = "http://localhost:8082/viewflightschedule"
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.flightschedules= data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
}