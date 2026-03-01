import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Carrier } from '../Bean/Carrier';

@Component({
  selector: 'app-delete-carrier',
  standalone: false,
  templateUrl: './delete-carrier.component.html',
  styleUrl: './delete-carrier.component.css'
})
export class DeleteCarrierComponent {
  carrierIdToDelete?: number;
  url?:string;
  carriers:Carrier[] = [];
  constructor(private http: HttpClient) { }
  deleteCarrier(): void {
    if (confirm("Do you want to delete Flight Id: " + this.carrierIdToDelete)) {
      this.url = "http://localhost:8082/deletecarrier/" + this.carrierIdToDelete;
      this.http.delete<any>(this.url).subscribe({
        next: data => {
          alert(JSON.stringify(data));
          this.carriers.forEach((elements, index) => {
            if (elements.carrierId == this.carrierIdToDelete) {
              this.carriers.splice(index, 1);
            }
          });
          return this.carriers;
        },
        error: error => {
          console.log(JSON.stringify(error));
        }
      });

    }
  }

  ngOnInit(): void {
    this.url = "http://localhost:8082/listcarrier"
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.carriers = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }

}
