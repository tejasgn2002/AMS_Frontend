import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-carrier',
  standalone: false,
  templateUrl: './add-carrier.component.html',
  styleUrl: './add-carrier.component.css'
})
export class AddCarrierComponent {

  carrierName: string = '';
  discountPercentageThirtyDaysAdvanceBooking?: number;
  discountPercentageSixtyDaysAdvanceBooking?: number;
  discountPercentageNinteyDaysAdvanceBooking?: number;
  bulkBookingDiscount?: number;
  refundPercentageForTicketCancellation2DaysBeforeTravelDate?: number;
  refundPercentageForTicketCancellation10DaysBeforeTravelDate?: number;
  refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate?: number;
  silverUserDiscount?: number;
  goldUserDiscount?: number;
  platinumUserDiscount?: number;
  url?:string;
   constructor(private http: HttpClient) { }

  submitForm() {

    if(
      this.carrierName == '' ||
      this.discountPercentageThirtyDaysAdvanceBooking  == undefined ||
      this.discountPercentageSixtyDaysAdvanceBooking  == undefined ||
      this.discountPercentageNinteyDaysAdvanceBooking  == undefined ||
      this.bulkBookingDiscount == undefined ||
      this.refundPercentageForTicketCancellation2DaysBeforeTravelDate == undefined ||
      this.refundPercentageForTicketCancellation10DaysBeforeTravelDate == undefined ||
      this.refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate == undefined ||
      this.silverUserDiscount == undefined ||
      this.goldUserDiscount == undefined ||
      this.platinumUserDiscount == undefined
    ){
      alert("No fields cannot be empty"+this.bulkBookingDiscount);
      return;
    }

    const carrier = JSON.stringify({
        'carrierName' : this.carrierName,
        'discountPercentageThirtyDaysAdvanceBooking' : this.discountPercentageThirtyDaysAdvanceBooking,
        'discountPercentageSixtyDaysAdvanceBooking' : this.discountPercentageSixtyDaysAdvanceBooking,
        'discountPercentageNinteyDaysAdvanceBooking' : this.discountPercentageNinteyDaysAdvanceBooking,
        'bulkBookingDiscount' : this.bulkBookingDiscount,
        'refundPercentageForTicketCancellation2DaysBeforeTravelDate' : this.refundPercentageForTicketCancellation2DaysBeforeTravelDate,
        'refundPercentageForTicketCancellation10DaysBeforeTravelDate' : this.refundPercentageForTicketCancellation10DaysBeforeTravelDate,
        'refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate' : this.refundPercentageForTicketCancellation20DaysOrMoreBeforeTravelDate,
        'silverUserDiscount' : this.silverUserDiscount,
        'goldUserDiscount' : this.goldUserDiscount,
        'platinumUserDiscount' : this.platinumUserDiscount
    })
    this.url = "http://localhost:8082/addcarrier";
    const headers = { 'content-type': 'application/json' };
    this.http.post<any>(this.url, carrier, { headers }).subscribe({

      next: data => {
        alert(JSON.stringify(data));
      },
      error: error => {
        console.log(JSON.stringify(error));
      }
    });
  }

}
