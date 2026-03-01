import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Flight } from '../Bean/Flight';

@Component({
  selector: 'app-view-flight',
  standalone: false,
  templateUrl: './view-flight.component.html',
  styleUrl: './view-flight.component.css'
})
export class ViewFlightComponent  implements OnInit {

  flights:Flight[]=[]; 
  url: string = '';
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
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
}