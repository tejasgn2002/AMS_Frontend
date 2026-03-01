import { Component } from '@angular/core';
import { Carrier } from '../Bean/Carrier';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-carrier',
  standalone: false,
  templateUrl: './edit-carrier.component.html',
  styleUrl: './edit-carrier.component.css'
})
export class EditCarrierComponent {
  searchCarrierId?: number;
  carrier:Carrier = {
        'carrierId' : 0,
        'carrierName' : '',
        'discountPercentageThirtyDaysAdvanceBooking' :0,
        'discountPercentageSixtyDaysAdvanceBooking' : 0,
        'discountPercentageNinteyDaysAdvanceBooking' : 0,
        'bulkBookingDiscount' : 0,
        'refundPercentageForTicketCancellation2DaysBeforeTravelDate' :0,
        'refundPercentageForTicketCancellation10DaysBeforeTravelDate' : 0,
        'refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate' : 0,
        'silverUserDiscount' : 0,
        'goldUserDiscount' : 0,
        'platinumUserDiscount' : 0
    
  };
  url?:string;
  constructor(private http:HttpClient){}
  onSearch() {
    this.url = "http://localhost:8082/carriersearch/"+this.searchCarrierId;
    this.http.get<any>(this.url).subscribe({
      next: data => {
        this.carrier = data;
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }

  onSave() {
    this.url = "http://localhost:8082/eidtcarrier";
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>(this.url, this.carrier, { headers }).subscribe({

      next: data => {
        alert(JSON.stringify(data));
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }
}