import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Flight } from '../Bean/Flight';

@Component({
  selector: 'app-delete-flight',
  standalone: false,
  templateUrl: './delete-flight.component.html',
  styleUrl: './delete-flight.component.css'
})
export class DeleteFlightComponent {
  flightIdToDelete?: number;
  url?: string;
  constructor(private http: HttpClient) { }
  flights: Flight[] = [];

  deleteFlight(): void {
    if (confirm("Do you want to delete Flight Id: " + this.flightIdToDelete)) {
      this.url = "http://localhost:8082/deleteflight/" + this.flightIdToDelete;
      this.http.delete<any>(this.url).subscribe({
        next: data => {
          alert(JSON.stringify(data));
          this.flights.forEach((elements,index)=>{
            if(elements.flightID == this.flightIdToDelete){
              this.flights.splice(index,1);
            }
          });
          return this.flights;
        },
        error: error => {
          console.log(JSON.stringify(error));
        }
      });
    
  }

}



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
