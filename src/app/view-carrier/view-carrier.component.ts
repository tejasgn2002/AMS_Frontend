import { Component } from '@angular/core';
import { Carrier } from '../Bean/Carrier';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-carrier',
  standalone: false,
  templateUrl: './view-carrier.component.html',
  styleUrl: './view-carrier.component.css'
})
export class ViewCarrierComponent {
 Carriers:Carrier[]=[]; 
  url: string = '';
  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.url = "http://localhost:8082/listcarrier"
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.Carriers = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
}
